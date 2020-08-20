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
  DatePicker,
  Modal,
} from "antd";
import { StopOutlined, PlusOutlined, EnterOutlined } from "@ant-design/icons";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { assignLeavePolicy, setLoader } from "appRedux/actions/staff";
import moment from "moment";

const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";
const monthFormat = "YYYY/MM";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

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

class AssignLeavePolicy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      name: "",
      numberOfDays: "",
      startDate: new Date(),
    };
  }

  render() {
    const { visible, loading } = this.state;
    const { staffs } = this.props;

    const ButtonGroup = Button.Group;
    const { TextArea } = Input;

    const onFinish = () => {
      console.log("Received values of form: ");

      const data = {
        staff: this.state.staff,
        numberOfDays: this.state.numberOfDays,
        startDate: this.state.startDate,
      };
      this.setState({ loading: false, visible: false });
      this.props.assignLeavePolicy(data);
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

    const handlestartDateChange = (date) => {
      this.setState({ ...this.state, startDate: date });
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
          <EnterOutlined /> Assign Leave
        </Button>
        <Modal
          visible={visible}
          title={
            <div className="modal__header">
              <PlusOutlined />
              <span className=""> Assign Leave </span>
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
              Assign Leave
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
                name="staff"
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
                <label for="staff" class="form__label">
                  Staff
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
                  {staffs.length
                    ? staffs.map((staff) => {
                        return (
                          <Option value={staff.id}>
                            {staff.User.first_name}
                          </Option>
                        );
                      })
                    : null}
                  <Option value="allStaff">All Staff</Option>
                  <Option value="designation">Designation</Option>
                  <Option value="selectedStaff">Selected Staff</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="numberOfDays"
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
                <label for="numberOfDays" class="form__label">
                  Number of Days
                </label>
                <Input
                  type="text"
                  class="form__input"
                  placeholder=" Enter Number of Days! "
                  id="numberOfDays"
                  required
                  name="numberOfDays"
                  value={this.state.numberOfDays}
                  onChange={handleInputs}
                />
                <p>** Leave blank to take all</p>
              </Form.Item>

              <Form.Item
                name="startDate"
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
                <DatePicker
                  name="startDate"
                  onChange={handlestartDateChange}
                  defaultValue={moment("2015/01/01", dateFormat)}
                  format={dateFormat}
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
        assignLeavePolicy,
        setLoader,
      },
      dispatch
    ),
  };
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    staffs: state.staffs.staffs,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignLeavePolicy);
