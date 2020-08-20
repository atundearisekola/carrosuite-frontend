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
import { editLeavePolicy, setLoader } from "appRedux/actions/staff";

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

class CreateSalaryStructure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
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
        numberOfDays: this.state.numberOfDays,
      };
      this.setState({ loading: false, visible: false });
      this.props.editLeavePolicy(data);
      this.props.setLoader(true);
    };

    const handleInput = (e) => {
      e.preventDefault();
      const name = e.target.name;
      const value = e.target.value;
      this.setState({ [name]: value });
      console.log(this.state);
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
        <Button type="primary" className="btn btn-success" onClick={showModal}>
          <PlusOutlined /> Create Salary Structure
        </Button>
        <Modal
          visible={visible}
          title={
            <div className="modal__header">
              <PlusOutlined />
              <span className=""> Add Structure</span>
            </div>
          }
          onOk={onFinish}
          onCancel={handleCancel}
          footer={[
            <Button
              className="btn btn-primary"
              key="submit"
              type="primary"
              loading={loading}
              onClick={onFinish}
            >
              Save Structure
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
                  placeholder=" Enter Structure Name "
                  id="name"
                  required
                  name="name"
                  value={this.state.name}
                  onChange={handleInputs}
                />
              </Form.Item>
              <Form.Item
                name="pay_amount"
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
                <label for="pay_amount" class="form__label">
                  Basic Pay Amount
                </label>
                <Input
                  type="text"
                  class="form__input"
                  placeholder=" Enter Basic Pay Amount! "
                  id="pay_amount"
                  required
                  name="pay_amount"
                  value={this.state.pay_amount}
                  onChange={handleInputs}
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
                  onChange={handleInputs}
                  value={this.state.description}
                />
              </Form.Item>

              <Form.Item
                name="total_amount"
                rules={[
                  {
                    type: "text",
                    message: "The input is not valid Number",
                  },
                ]}
              >
                <label for="total_amount" class="form__label">
                  Enter Total Pay Amount
                </label>
                <Input
                  type="number"
                  class="form__input"
                  placeholder=" Enter Amount! "
                  id="total_amount"
                  name="total_amount"
                  value={this.state.total_amount}
                  onChange={handleInputs}
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
        editLeavePolicy,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSalaryStructure);
