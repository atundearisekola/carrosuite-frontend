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
import { addCity } from "appRedux/actions/property";

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

class CreatePayrollItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      name: "",
      numberOfDays: "",
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
      };
      this.setState({ loading: false, visible: false });
      this.props.addState(data);
    };

    const handleInput = (e) => {
      e.preventDefault();
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
        <Button type="primary" className="btn btn-success" onClick={showModal}>
          Create Payroll Item
        </Button>
        <Modal
          visible={visible}
          title={
            <div className="modal__header">
              <PlusOutlined />
              <span className=""> Create Payroll Item</span>
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
              Create Payroll Item
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
                <label for="name" class="form__label">
                  Name
                </label>
                <Input
                  type="text"
                  class="form__input"
                  placeholder=" Enter Item Name "
                  id="name"
                  required
                  name="name"
                  value={this.state.name}
                  onChange={handleInput}
                />
              </Form.Item>
              <Form.Item
                name="days"
                rules={[
                  {
                    type: "text",
                    message: "The input is not valid Number",
                  },
                  {
                    required: true,
                    message: "Enter Number of Days!",
                  },
                ]}
              >
                <label for="name" class="form__label">
                  Number of Days
                </label>
                <Input
                  type="text"
                  class="form__input"
                  placeholder=" Enter Number of Days! "
                  id="days"
                  required
                  name="numberOfDays"
                  value={this.state.name}
                  onChange={handleInput}
                />
              </Form.Item>

              <Form.Item
                hasFeedback
                name="description"
                rules={[
                  {
                    required: false,
                    message: "Please include Additional Terms",
                  },
                ]}
              >
                <label>Description</label>
                <TextArea
                  placeholder="Enter Item Description"
                  name="description"
                  onChange={handleInput}
                  value={this.state.description}
                />
              </Form.Item>
              <label>Type</label>
              <Form.Item
                name="type"
                rules={[
                  {
                    required: false,
                    message: "Please select an  Type",
                  },
                ]}
              >
                <Select
                  className="form-item"
                  showSearch
                  style={{ width: 200 }}
                  placeholder={`Select Item Type`}
                  optionFilterProp="children"
                  name="type"
                  value={this.state.type}
                  onChange={handleInput}
                  onFocus={handleInput}
                  onBlur={handleInput}
                  onSearch={handleInput}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="Salary">Salary</Option>
                  <Option value="Wages">Wages</Option>
                </Select>
              </Form.Item>
              <label>Reporting Account</label>
              <Form.Item
                name="reportingAccount"
                rules={[
                  {
                    required: false,
                    message: "Please select Reporting Account",
                  },
                ]}
              >
                <Select
                  className="form-item"
                  showSearch
                  style={{ width: 200 }}
                  placeholder={`Select Reporting Account`}
                  optionFilterProp="children"
                  name="reportingAccount"
                  value={this.state.reportingAccount}
                  onChange={handleInput}
                  onFocus={handleInput}
                  onBlur={handleInput}
                  onSearch={handleInput}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="Salary">Salary</Option>
                  <Option value="Wages">Wages</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="defaultRate"
                rules={[
                  {
                    type: "text",
                    message: "The input is not valid Number",
                  },
                  {
                    required: true,
                    message: "Enter Default Rate!",
                  },
                ]}
              >
                <label for="defaultRate" class="form__label">
                  Default Rate
                </label>
                <Input
                  type="text"
                  class="form__input"
                  placeholder=" Enter Default Rate! "
                  id="defaultRate"
                  required
                  name="defaultRate"
                  value={this.state.defaultRate}
                  onChange={handleInput}
                />
              </Form.Item>
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
        addCity,
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

export default connect(mapStateToProps, mapDispatchToProps)(CreatePayrollItem);
