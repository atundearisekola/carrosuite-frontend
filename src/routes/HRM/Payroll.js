import React, { Component } from "react";
import { Row, Select } from "antd";
//import Table from "../../components/layouts/Table";
import CreateLeavePolicy from "./modal/CreateLeavePolicy";
import ApplyLeavePolicy from "./modal/ApplyLeavePolicy";
import EditLeavePolicy from "./modal/EditLeavePolicy";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchPayRoll } from "appRedux/actions/staff";

import {
  Menu,
  Dropdown,
  Button,
  Form,
  Input,
  message,
  Tooltip,
  Modal,
  Col,
  Space,
  Table,
  Divider,
} from "antd";

import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

class Payroll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      title: "",
      about: "",
      description: "",
    };
  }

  componentDidMount() {
    this.props.fetchPayRoll();
  }

  render() {
    const { Option } = Select;
    const { payrolls } = this.props;

    const columns = [
      {
        key: "id",
        title: "Date",
        dataIndex: "date",
        width: "50",
      },
      {
        key: "id",
        title: "Pay Roll",
        dataIndex: "payroll",
        width: "50",
      },
      {
        key: "id",
        title: "Employee",
        dataIndex: "employee",
        width: "50",
      },
      {
        key: "id",
        title: "Employee Payments",
        dataIndex: "employee_payments",
        width: "50",
      },
      {
        key: "id",
        title: "Other Payments",
        dataIndex: "other_payments",
        width: "50",
      },
      {
        key: "id",
        title: "Total",
        dataIndex: "total",
        width: "50",
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <Space size="middle">
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="1">
                    <Link>View Payroll</Link>
                  </Menu.Item>
                </Menu>
              }
            >
              <Button className="btn btn-dark">
                Action <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
        ),
      },
    ];

    const actions = [
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <Space size="middle">
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    <EditLeavePolicy />
                  </Menu.Item>
                </Menu>
              }
            >
              <Button className="btn btn-dark">
                Action <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
        ),
      },
    ];

    // const mainDesignations = staffs.designations;

    let dataSource = payrolls.length
      ? payrolls.map((payroll) => {
          return {
            key: payroll.id,
            id: payroll.id,
            date: payroll.date,
            payroll: payroll.payroll,
            employee: payroll.employee,
            employee_payments: payroll.employee_payments,
            other_payments: payroll.other_payments,
            total: payroll.total,
          };
        })
      : null;

    return (
      <section className="leavepolicy-section container">
        <Divider orientation="left">Payroll</Divider>
        <Row className="btn__container" justify="end">
          <Col>
            <Button className="btn btn-success">Add Payroll</Button>
          </Col>
        </Row>

        <Row className="table-header" justify="space-between">
          <Col className="table-header__item">
            <label className="table-header__item-label">show</label>
            <Select className="table-header__item-input" defaultValue="10">
              <Option value="10">10</Option>
              <Option value="25">25</Option>
              <Option value="50">50</Option>
              <Option value="100">100</Option>
            </Select>
            <label className="table-header__item-label">Entries</label>
          </Col>
          <Col className="table-header__item">
            {" "}
            <Form.Item name="search" label="Search">
              <Input className="table-header__item-input" name="search" />
            </Form.Item>
          </Col>
        </Row>

        <Table columns={columns} area="staff" dataSource={dataSource} />
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ fetchPayRoll }, dispatch),
  };
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.isAuthenticated,
    payrolls: state.staffs.payrolls,
    loader: state.staffs.loader,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payroll);
