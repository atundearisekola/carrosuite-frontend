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
  Radio,
} from "antd";
import { StopOutlined, PlusOutlined } from "@ant-design/icons";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addPostTax } from "appRedux/actions/staff";

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

class AddPostTaxDeduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      earning_frequency: "",
      earning_name: "",
      nameInPayslip: "",
      calculation_type: "",
      flat_amount: "",
      percentOfBasicPay: "",
      account: "",
      checkedList: [],
      indeterminate: true,
    };
  }

  render() {
    const { visible, loading } = this.state;

    const ButtonGroup = Button.Group;
    const { TextArea } = Input;

    const onFinish = () => {
      console.log("Received values of form: ");

      const data = {
        earning_frequency: this.state.earning_frequency,
        earning_name: this.state.earning_name,
        nameInPayslip: this.state.nameInPayslip,
        calculation_type: this.state.calculation_type,
        flat_amount: this.state.flat_amount,
        percentOfBasicPay: this.state.percentOfBasicPay,
        account: this.state.account,
        checkedList: this.state.checkedList,
      };
      this.setState({ loading: false, visible: false });
      this.props.addPostTax(data);
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
    const onChange = (checkedList) => {
      this.setState({
        checkedList,
        indeterminate:
          !!checkedList.length && checkedList.length < plainOptions.length,
        checkAll: checkedList.length === plainOptions.length,
      });
    };
    const CheckboxGroup = Checkbox.Group;

    const plainOptions = [
      "Mark as Active",
      "Taxable Component",
      "Prorated",
      "Consider for Pension deduction",
      "Show on Payslip",
    ];

    return (
      <div className="modal">
        <Button type="primary" className="btn btn-success" onClick={showModal}>
          Add Post Tax Deduction
        </Button>
        <Modal
          visible={visible}
          title={
            <div className="modal__header">
              <PlusOutlined />
              <span className=""> Add Post Tax Deduction</span>
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
              Add Deduction
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
                name="nameInPayslip"
                rules={[
                  {
                    type: "text",
                    message: "The input is not valid Number",
                  },
                ]}
              >
                <label for="nameInPaySlip" class="form__label">
                  Name In Payslip
                </label>
                <Input
                  type="text"
                  class="form__input"
                  placeholder=" Enter Number of Days! "
                  id="nameInPayslip"
                  required
                  name="nameInPayslip"
                  value={this.state.nameInPayslip}
                  onChange={handleInputs}
                />
              </Form.Item>

              <Form.Item
                label="Deduction Frequency"
                hasFeedback
                name="deduction_frequency"
                rules={[
                  {
                    required: true,
                    message: "Please select Duration",
                  },
                ]}
              >
                <Radio.Group
                  name="deduction_frequency"
                  onChange={handleInputs}
                  value={this.state.deduction_frequency}
                >
                  <Radio value={"one_time_deduction"}>One time deduction</Radio>
                  <Radio value={"recurring_for_subsequent_payrolls"}>
                    Recurring for subsequent payrolls
                  </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label="Deduction Type"
                hasFeedback
                name="deduction_type"
                rules={[
                  {
                    required: true,
                    message: "Please select Duration",
                  },
                ]}
              >
                <Radio.Group name="deduction_type" onChange={handleInputs}>
                  <Radio value={"fixed_amount"}> Fixed Amount</Radio>
                  <Radio value={"percentOfBasicPay"}>% of basic pay</Radio>
                </Radio.Group>
              </Form.Item>

              {this.state.deduction_type == "percentOfBasicPay" && (
                <Form.Item
                  name="percentOfBasicPay"
                  rules={[
                    {
                      type: "text",
                      message: "The input is not valid Number",
                    },
                  ]}
                >
                  <label for="percentOfBasicPay" class="form__label">
                    Enter Amount
                  </label>
                  <Input
                    type="number"
                    class="form__input"
                    placeholder=" Enter Amount! "
                    id="percentOfBasicPay"
                    name="percentOfBasicPay"
                    value={this.state.percentOfBasicPay}
                    onChange={handleInputs}
                  />
                </Form.Item>
              )}

              <label>Select Account (ADD)</label>
              <Form.Item
                name="account"
                rules={[
                  {
                    required: false,
                    message: "Please selectaccount ADD",
                  },
                ]}
              >
                <Select
                  className="form-item"
                  showSearch
                  style={{ width: 200 }}
                  placeholder={`Select Account (ADD)`}
                  optionFilterProp="children"
                  name="account"
                  value={this.state.account}
                  onChange={handleSelection("account")}
                  onFocus={handleSelection("account")}
                  onBlur={handleSelection("account")}
                  onSearch={handleSelection("account")}
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
                name="active"
                label="Mark as active"
                rules={[
                  {
                    required: false,
                    message: "Please select Reporting Account",
                  },
                ]}
              >
                <Checkbox
                  option="Mark as active"
                  value={this.state.checkedList}
                  onChange={onChange}
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
        addPostTax,
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
)(AddPostTaxDeduction);
