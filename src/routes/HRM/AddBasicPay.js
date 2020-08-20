import React, { Component } from "react";
import { Row, Select } from "antd";
import Table from "../../components/layouts/Table";
import CreateLeavePolicy from "./modal/CreateLeavePolicy";
import ApplyLeavePolicy from "./modal/ApplyLeavePolicy";
import EditLeavePolicy from "./modal/EditLeavePolicy";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addBasicPayment } from "appRedux/actions/staff";

import {
  Menu,
  Dropdown,
  Button,
  Form,
  Input,
  message,
  Tooltip,
  Modal,
  Divider,
  Col,
  Radio,
  DatePicker,
} from "antd";

import {
  DownOutlined,
  UserOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";

class AddBasicPay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      date: new Date(),
      staff: "",
      duration: "",
      contract_startDate: new Date(),
      contract_endDate: new Date(),
      basicPay: "",
    };
  }

  render() {
    const { Option } = Select;
    const { staffs } = this.props;

    const showModal = () => {
      this.setState({ ...this.state, show: !this.state.show });
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

    const handleSubmit = () => {
      console.log(this.props);
      const data = {
        date: this.state.date,
        staff: this.date.staff,
        duration: this.state.duration,
        contract_startDate: this.state.contract_startDate,
        contract_endDate: this.state.contract_endDate,
        basicPay: this.state.basicPay,
      };

      this.props.addBasicPayment(data);
    };

    return (
      <section className="leaveplan-section container">
        <Divider orientation="left">Staff Basic Pay</Divider>

        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: false, message: "Please input Date " }]}
        >
          <DatePicker
            name="date"
            onChange={handleDateChange}
            value={this.state.date}
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
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {staffs.length
              ? staffs.map((staff) => {
                  return <Option value={staff.id}>{staff.name}</Option>;
                })
              : null}
            <Option value="Staff1">Staff 1</Option>
            <Option value="Staff2">Staff2</Option>
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
          <Radio.Group name="duration" onChange={handleInputs}>
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
              name="contract_startDate"
              rules={[{ required: false, message: "Please input Start Date!" }]}
            >
              <DatePicker
                name="startDate"
                onChange={handleStartDateChange}
                value={this.state.startDate}
              />
            </Form.Item>
            <Form.Item
              label="Ending Date"
              name="contract_endDate"
              rules={[{ required: false, message: "Please input End Date!" }]}
            >
              <DatePicker
                name="contract_endDate"
                onChange={handleEndDateChange}
                value={this.state.endDate}
              />
            </Form.Item>
          </>
        )}

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

        <Divider></Divider>
        <Row justify="end">
          <Col>
            <Button className="btn btn-primary" onClick={handleSubmit}>
              <DoubleRightOutlined /> Add
            </Button>
          </Col>
        </Row>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ addBasicPayment }, dispatch),
  };
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.isAuthenticated,
    staffs: state.staffs.staffs,
    loader: state.staffs.loader,
    alertMessage: state.staffs.alertMessage,
    showMessage: state.staffs.showMessage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBasicPay);
