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
import { addVendor } from "appRedux/actions/property";

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

class AddVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      company: "",
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      phone: "",
      specialty: "",
    };
  }

  render() {
    const { visible, loading } = this.state;

    const ButtonGroup = Button.Group;
    const { TextArea } = Input;

    const onFinish = () => {
      console.log("Received values of form: ");

      const data = {
        company: this.state.company,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        address: this.state.address,
        phone: this.state.phone,
        vendor: this.state.vendor,
        specialty: this.state.specialty,
      };
      this.setState({ loading: false, visible: false });
      this.props.addVendor(data);
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
          Add
        </Button>
        <Modal
          visible={visible}
          title={
            <div className="modal__header">
              <PlusOutlined />
              <span className="">Create Vendor</span>
            </div>
          }
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button
              key="back"
              className="btn btn-danger"
              onClick={handleCancel}
            >
              Cancel
            </Button>,
            <Button
              className="btn btn-secondary"
              key="submit"
              type="primary"
              loading={loading}
              onClick={onFinish}
            >
              Save Vendor
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
                name="item_number"
                rules={[
                  {
                    type: "text",
                    message: "The input is not valid Number",
                  },
                  {
                    required: true,
                    message: "Enter Company!",
                  },
                ]}
              >
                <input
                  type="text"
                  class="form__input"
                  placeholder=" Enter Company "
                  id="company"
                  required
                  name="company"
                  value={this.state.company}
                  onChange={handleInput}
                />
                <label for="company" class="form__label">
                  Company Name
                </label>
              </Form.Item>

              <Form.Item
                name="first_name"
                rules={[
                  {
                    type: "text",
                    message: "The input is not valid Number",
                  },
                  {
                    required: true,
                    message: "Enter First Name!",
                  },
                ]}
              >
                <input
                  type="text"
                  class="form__input"
                  placeholder=" Enter First Name "
                  id="first_name"
                  required
                  name="first_name"
                  value={this.state.first_name}
                  onChange={handleInput}
                />
                <label for="first_name" class="form__label">
                  First Name
                </label>
              </Form.Item>

              <Form.Item
                name="item_number"
                rules={[
                  {
                    type: "text",
                    message: "The input is not valid text",
                  },
                  {
                    required: true,
                    message: "Enter Last Name!",
                  },
                ]}
              >
                <input
                  type="text"
                  class="form__input"
                  placeholder=" Enter Last Name "
                  id="last_name"
                  required
                  name="last_name"
                  value={this.state.last_name}
                  onChange={handleInput}
                />
                <label for="last_name" class="form__label">
                  Company Last Name
                </label>
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  {
                    type: "text",
                    message: "The input is not valid Number",
                  },
                  {
                    required: true,
                    message: "Enter Email!",
                  },
                ]}
              >
                <input
                  type="text"
                  class="form__input"
                  placeholder=" Enter  Email "
                  id="email"
                  required
                  name="email"
                  value={this.state.email}
                  onChange={handleInput}
                />
                <label for="email" class="form__label">
                  Email
                </label>
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  {
                    type: "text",
                    message: "The input is not valid Number",
                  },
                  {
                    required: true,
                    message: "Enter Address!",
                  },
                ]}
              >
                <label for="email" class="form__label">
                  Address
                </label>
                <TextArea
                  id=" email"
                  class="form__input"
                  placeholder="Enter Contact Address"
                  autoSize={{ minRows: 2, maxRows: 6 }}
                  name="email"
                  value={this.state.email}
                  onChange={handleInput}
                />
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input
                  class="form__input"
                  addonBefore={prefixSelector}
                  style={{ width: "100%" }}
                  name="phone"
                  value={this.state.phone}
                  onChange={handleInput}
                />
              </Form.Item>

              <Form.Item
                name="specialty"
                rules={[
                  {
                    type: "text",
                    message: "The input is not valid Number",
                  },
                  {
                    required: true,
                    message: "Enter Specialty!",
                  },
                ]}
              >
                <label for="specialty" class="form__label">
                  Specialty
                </label>
                <TextArea
                  id="specialty"
                  placeholder="Enter Specialty"
                  autoSize
                  name="specialty"
                  value={this.state.specialty}
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
        addVendor,
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

export default connect(mapStateToProps, mapDispatchToProps)(AddVendor);
