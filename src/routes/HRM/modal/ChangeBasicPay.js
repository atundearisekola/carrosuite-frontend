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
  DatePicker,
} from "antd";
import { StopOutlined, PlusOutlined } from "@ant-design/icons";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeBasicPayment } from "appRedux/actions/staff";

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

class ChangeBasicPay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,

      date: new Date(this.props.record.date),
      staff: this.props.record.staff,
      duration: this.props.record.duration,
      contract_startDate: new Date(this.props.record.contract_startDate),
      contract_endDate: new Date(this.props.record.contract_endDate),
      basicPay: this.props.record.basicPay,
    };
  }

  render() {
    const { visible, loading } = this.state;
    const { record } = this.props;
    const ButtonGroup = Button.Group;
    const { TextArea } = Input;

    const onFinish = () => {
      console.log("Received values of form: ");

      const data = {
        date: this.state.date,
        staff: this.date.staff,
        duration: this.state.duration,
        contract_startDate: this.state.contract_startDate,
        contract_endDate: this.state.contract_endDate,
        basicPay: this.state.basicPay,
      };

      this.setState({ loading: false, visible: false });
      this.props.changeBasicPayment(data);
    };

    const handleInputs = (e) => {
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

    const handleDateChange = (date) => {
      this.setState({ ...this.state, date: date });
    };

    const handleStartDateChange = (date) => {
      this.setState({ ...this.state, contract_startDate: date });
    };
    const handleEndDateChange = (date) => {
      this.setState({ ...this.state, endDate: date });
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
          Change Payment
        </Button>
        <Modal
          visible={visible}
          title={
            <div className="modal__header">
              <PlusOutlined />
              <span className=""> Change Basic Payment</span>
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
              Change Payment
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
                label="Date"
                name="date"
                rules={[{ required: false, message: "Please input Date " }]}
              >
                <DatePicker
                  name="date"
                  onChange={handleDateChange}
                  value={record.date}
                />
              </Form.Item>

              <Form.Item
                label="Select Staff"
                name="staff"
                rules={[
                  {
                    required: false,
                    message: "Please select an Leave Policy Type",
                  },
                ]}
              >
                <Select
                  className="form-item"
                  mode="multiple"
                  showSearch
                  style={{ width: 200 }}
                  placeholder={`Select viewType Type`}
                  optionFilterProp="children"
                  name="staff"
                  value={this.state.viewType}
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
                  <Option value={record.id}>{record.name}</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Duration"
                hasFeedback
                name="duration"
                rules={[
                  {
                    required: true,
                    message: "Please select Duration",
                  },
                ]}
              >
                <Radio.Group
                  name="duration"
                  onChange={handleInputs}
                  value={this.state.duration}
                >
                  <Radio value={"monthly"}>Monthly</Radio>
                  <Radio value={"weekly"}>Weekly</Radio>
                  <Radio value={"bimonthly"}>Bi-Monthly</Radio>
                  <Radio value={"contract"}>Contract</Radio>
                </Radio.Group>
              </Form.Item>

              {this.state.duration == "contract" && (
                <>
                  <Form.Item
                    label="Start Date"
                    name="startDate"
                    rules={[
                      { required: false, message: "Please input Start Date!" },
                    ]}
                  >
                    <DatePicker
                      name="startDate"
                      onChange={handleStartDateChange}
                      value={this.state.startDate}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Eding Date"
                    name="endDate"
                    rules={[
                      { required: false, message: "Please input End Date!" },
                    ]}
                  >
                    <DatePicker
                      name="endDate"
                      onChange={handleEndDateChange}
                      value={this.state.endDate}
                    />
                  </Form.Item>
                </>
              )}
              <Row>
                <Col>
                  <p>Previous Pay: {record.BasicPay.basicPay}</p>
                </Col>
                <Col>
                  <Form.Item
                    label="Basic Pay"
                    name="basicPay"
                    rules={[
                      {
                        required: false,
                        message: "Please input Basic Pay",
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      name="basicPay"
                      onChange={handleInputs}
                      value={this.state.basicPay}
                    />
                  </Form.Item>
                </Col>
                <Col>
                  <p>Pay Difference: </p>
                </Col>
              </Row>
              <Form.Item
                label="Basic Pay"
                name="basicPay"
                rules={[
                  {
                    required: false,
                    message: "Please input Basic Pay",
                  },
                ]}
              >
                <Input
                  type="number"
                  name="basicPay"
                  onChange={handleInputs}
                  value={this.state.basicPay}
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
        changeBasicPayment,
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

export default connect(mapStateToProps, mapDispatchToProps)(ChangeBasicPay);
