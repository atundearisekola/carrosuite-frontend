import React, { Component } from "react";

import {
  Select,
  Form,
  Row,
  Col,
  Button,
  Divider,
  Input,
  Tooltip,
  Cascader,
  Checkbox,
  AutoComplete,
  Modal,
} from "antd";
import { StopOutlined, PlusOutlined } from "@ant-design/icons";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { applyLeavePolicy, setLoader } from "appRedux/actions/staff";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const { Option } = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>
  </Form.Item>
);

class ApplyLeavePolicy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      applyTo: "",
    };
  }

  render() {
    const { visible, loading } = this.state;

    const ButtonGroup = Button.Group;
    const { TextArea } = Input;

    const onFinish = () => {
      console.log("Received values of form: ");

      const data = {
        name: this.state.name,
        applyTo: this.state.applyTo,
        designation: this.state.designation,
        staff: this.state.staff,
      };
      this.setState({ loading: false, visible: false });
      this.props.applyLeavePolicy(data);
      this.props.setLoader(true);
    };

    const handleSelection = (prop) => (event) => {
      const name = [prop];
      const value = event;
      console.log(name);
      this.setState({ [name]: value });
      console.log(this.state);
    };

    const handleInputs = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({ [name]: value });
      console.log(this.state);
    };
    const showModal = () => {
      this.setState({
        visible: true,
      });
    };

    const handleOk = () => {
      this.setState({ loading: true });
      setTimeout(() => {
        this.setState({ loading: false, visible: false });
      }, 3000);
    };

    const handleCancel = () => {
      this.setState({ visible: false });
    };

    return (
      <div className="modal">
        <Button type="primary" className="btn btn-primary" onClick={showModal}>
          Create Leave Policy
        </Button>
        <Modal
          visible={visible}
          title={
            <div className="modal__header">
              <PlusOutlined />
              <span className=""> Apply Leave Policy</span>
            </div>
          }
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button
              className="btn btn-primary"
              key="submit"
              type="primary"
              loading={loading}
              onClick={onFinish}
            >
              Apply Policy
            </Button>,
          ]}
        >
          <div className="property-form__form">
            <Form
              {...formItemLayout}
              name="add_property"
              onFinish={onFinish}
              scrollToFirstError
            >
              <Form.Item
                name="name"
                rules={[
                  {
                    type: "text",
                    message: "The input is not valid Number",
                  },
                  {
                    required: true,
                    message: "Enter City Name!",
                  },
                ]}
              >
                <label for="applyTo" class="form__label">
                  Apply To
                </label>
                <Select
                  showSearch
                  placeholder="Apply To"
                  optionFilterProp="children"
                  name="applyTo"
                  id="applyTo"
                  onChange={handleSelection("applyTo")}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="allStaff">All Staff</Option>
                  <Option value="designation">Designation</Option>
                  <Option value="selectedStaff">Selected Staff</Option>
                </Select>
              </Form.Item>
              {this.state.applyTo === "designation" && (
                <Form.Item
                  name="designation"
                  rules={[
                    {
                      type: "text",
                      message: "The designation is not valid Number",
                    },
                    {
                      required: true,
                      message: "Select Designation",
                    },
                  ]}
                >
                  <label for="designation" class="form__label">
                    Designation
                  </label>
                  <Select
                    showSearch
                    mode="multiple"
                    placeholder="Select Designation"
                    optionFilterProp="children"
                    name="designation"
                    id="designation"
                    onChange={handleSelection("designation")}
                    onFocus={handleSelection("designation")}
                    onBlur={handleSelection("designation")}
                    onSearch={handleSelection("designation")}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="allStaff">All Staff</Option>
                    <Option value="designation">Designation</Option>
                    <Option value="selectedStaff">Selected Staff</Option>
                  </Select>
                </Form.Item>
              )}

              {this.state.applyTo === "selectedStaff" && (
                <Form.Item
                  name="staff"
                  rules={[
                    {
                      type: "text",
                      message: "The staff is not valid Number",
                    },
                    {
                      required: true,
                      message: "Select Staff",
                    },
                  ]}
                >
                  <label for="staff" class="form__label">
                    Select Staff
                  </label>
                  <Select
                    showSearch
                    mode="multiple"
                    placeholder="Select Staff"
                    optionFilterProp="children"
                    name="staff"
                    id="staff"
                    onChange={handleSelection("staff")}
                    onFocus={handleSelection("staff")}
                    onBlur={handleSelection("staff")}
                    onSearch={handleSelection("staff")}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="allStaff">All Staff</Option>
                    <Option value="designation">Designation</Option>
                    <Option value="selectedStaff">Selected Staff</Option>
                  </Select>
                </Form.Item>
              )}
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(
      {
        applyLeavePolicy,
        setLoader,
      },
      dispatch
    ),
  };
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplyLeavePolicy);
