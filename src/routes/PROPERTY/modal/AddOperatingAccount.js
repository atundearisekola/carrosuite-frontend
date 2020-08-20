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
import { addOperatingAccount } from "appRedux/actions/property";

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
function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

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
      bank: "",
      bank_name: "",
      account_type: "",
      account_number: "",
      cashflow: "",
      note: "",
      account_balance: "",
      bankcode: "",
    };
  }

  render() {
    const { visible, loading } = this.state;

    const ButtonGroup = Button.Group;
    const { TextArea } = Input;

    const onFinish = () => {
      console.log("Received values of form: ");

      const data = {
        bank: this.state.bank,
        bank_name: this.state.bank_name,
        account_type: this.state.account_type,
        account_number: this.state.account_number,
        cashflow: this.state.cashflow,
        note: this.state.note,
        account_balance: this.state.account_balance,
        bankcode: this.state.bankcode,
      };
      this.setState({ loading: false, visible: false });
      this.props.addOperatingAccount(data);
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
              <span className=""> Create Operating Account</span>
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
              Save Account
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
              <label>Bank</label>

              <Form.Item>
                <Select
                  showSearch
                  placeholder="Select a Bank"
                  optionFilterProp="children"
                  name="bank"
                  onChange={handleInput}
                  onFocus={handleInput}
                  onBlur={handleInput}
                  onSearch={handleInput}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  defaultValue={this.state.bank}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="bank"
                rules={[
                  {
                    type: "text",
                    message: "The input is not valid Number",
                  },
                  {
                    required: true,
                    message: "Enter Account Name",
                  },
                ]}
              >
                <input
                  type="text"
                  class="form__input"
                  placeholder=" Enter Account Name "
                  id="bank_name"
                  required
                  name="bank_name"
                  value={this.state.bank_name}
                  onChange={handleInput}
                />
                <label for="bank_name" class="form__label">
                  Enter Account Name
                </label>
              </Form.Item>

              <label>Bank Account Type</label>

              <Form.Item>
                <Select
                  showSearch
                  placeholder="Select a Bank Account Type"
                  optionFilterProp="children"
                  name="account_type"
                  id="account_type"
                  onChange={handleInput}
                  onFocus={handleInput}
                  onBlur={handleInput}
                  onSearch={handleInput}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  defaultValue={this.state.account_type}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="account_number"
                rules={[
                  {
                    type: "text",
                    message: "The input is not valid Number",
                  },
                  {
                    required: true,
                    message: "Enter Account Number",
                  },
                ]}
              >
                <input
                  type="text"
                  class="form__input"
                  placeholder="Enter Account Number "
                  id="account_number"
                  required
                  name="account_number"
                  value={this.state.account_number}
                  onChange={handleInput}
                />
                <label for="account_number" class="form__label">
                  Enter Account Number
                </label>
              </Form.Item>

              <label>Cashflow Classification (Optional)</label>

              <Form.Item>
                <Select
                  showSearch
                  placeholder="None"
                  optionFilterProp="children"
                  name="cashflow"
                  id="cashflow"
                  onChange={handleInput}
                  onFocus={handleInput}
                  onBlur={handleInput}
                  onSearch={handleInput}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  defaultValue={this.state.cashflow}
                >
                  <Option value="jack">None</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="note"
                rules={[
                  {
                    type: "text",
                    message: "The input is not valid Number",
                  },
                  {
                    required: true,
                    message: "Enter Notes (Optional)",
                  },
                ]}
              >
                <label for="note" class="form__label">
                  Enter Notes (Optional)
                </label>
                <TextArea
                  class="form__input"
                  placeholder="Enter Notes (Optional)"
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  name="note"
                  id="note"
                  value={this.state.note}
                  onChange={handleInput}
                />
              </Form.Item>

              <Form.Item
                name="account_number"
                rules={[
                  {
                    type: "text",
                    message: "The input is not valid Number",
                  },
                  {
                    required: true,
                    message: "Enter Account Number",
                  },
                ]}
              >
                <input
                  type="text"
                  class="form__input"
                  placeholder="0.00 "
                  id="account_balance"
                  required
                  name="account_balance"
                  value={this.state.account_number}
                  onChange={handleInput}
                />
                <label for="account_balance" class="form__label">
                  Opening Balance (Optional)
                </label>
              </Form.Item>

              <Form.Item
                name="bankcode"
                label="Enter Bank Code"
                rules={[
                  {
                    required: true,
                    message: "Bank Code is required!",
                  },
                ]}
              >
                <Input
                  name="bankcode"
                  value={this.state.bankcode}
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
        addOperatingAccount,
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
