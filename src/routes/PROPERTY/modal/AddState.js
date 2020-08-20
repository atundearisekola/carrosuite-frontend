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
import { addState } from "appRedux/actions/property";

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

class AddState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      name: "",
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
          Add
        </Button>
        <Modal
          visible={visible}
          title={
            <div className="modal__header">
              <PlusOutlined />
              <span className=""> Add State</span>
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
              Save State
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
                    message: "Enter State Name!",
                  },
                ]}
              >
                <input
                  type="text"
                  class="form__input"
                  placeholder=" Enter State Name "
                  id="state"
                  required
                  name="name"
                  value={this.state.name}
                  onChange={handleInput}
                />
                <label for="name" class="form__label">
                  State Name
                </label>
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
        addState,
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

export default connect(mapStateToProps, mapDispatchToProps)(AddState);
