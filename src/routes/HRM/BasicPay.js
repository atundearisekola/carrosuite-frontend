import React, { Component } from "react";
import { Row, Select } from "antd";
//import Table from "../../components/layouts/Table";
import CreateLeavePolicy from "./modal/CreateLeavePolicy";
import ApplyLeavePolicy from "./modal/ApplyLeavePolicy";
import EditLeavePolicy from "./modal/EditLeavePolicy";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  fetchStaffs,
  filterBasicPaymentByEmployee,
  filterBasicPaymentByStatus,
} from "appRedux/actions/staff";

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
import AddBasicPay from "./AddBasicPay";
import ChangeBasicPay from "./modal/ChangeBasicPay";

class BasicPay extends Component {
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
    this.props.fetchStaffs();
  }

  render() {
    const { Option } = Select;
    const { staffs } = this.props;

    const columns = [
      {
        key: "id",
        title: "Employee Name",
        dataIndex: "name",
        width: "50",
      },
      {
        key: "id",
        title: "Department",
        dataIndex: "department",
        width: "50",
      },
      {
        key: "id",
        title: "Designation",
        dataIndex: "designation",
        width: "50",
      },
      {
        key: "id",
        title: "Email",
        dataIndex: "email",
        width: "50",
      },
      {
        key: "id",
        title: "Basic Payment",
        dataIndex: "employee_payment",
        width: "50",
      },
      {
        key: "id",
        title: "Annual Payments",
        dataIndex: "annual_payments",
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
                    <Link>View Pay</Link>
                  </Menu.Item>
                  <Menu.Item key="1">
                    <ChangeBasicPay record={record} />
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

    let dataSource = staffs.length
      ? staffs.map((staff) => {
          return {
            key: staff.id,
            id: staff.id,
            date: staff.BasicPay.date,

            employee: staff.User.name,
            department: staff.Department.department,
            designation: staff.Department.designation,
            email: staff.User.email,
            employee_payment: staff.BasicPay.employee_payment,
            annual_payments: staff.BasicPay.annual_payments,
          };
        })
      : null;

    return (
      <section className="leavepolicy-section container">
        <Divider orientation="left">Payroll</Divider>
        <Row className="btn__container" justify="end">
          <Col>
            <Link>Add Basic Pay</Link>
          </Col>
        </Row>

        <Row className="btn__container" justify="space-between">
          <Col>
            <Space size="middle">
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                      <Button
                        onClick={() => {
                          this.props.filterBasicPaymentByEmployee({
                            type: "full_time",
                          });
                        }}
                      >
                        Full Time Employee
                      </Button>
                    </Menu.Item>

                    <Menu.Item key="2" icon={<UserOutlined />}>
                      <Button
                        onClick={() => {
                          this.props.filterBasicPaymentByEmployee({
                            type: "part_time",
                          });
                        }}
                      >
                        Part Time Employee
                      </Button>
                    </Menu.Item>

                    <Menu.Item key="3" icon={<UserOutlined />}>
                      <Button
                        onClick={() => {
                          this.props.filterBasicPaymentByEmployee({
                            type: "contract",
                          });
                        }}
                      >
                        Contract Employee
                      </Button>
                    </Menu.Item>

                    <Menu.Item key="4" icon={<UserOutlined />}>
                      <Button
                        onClick={() => {
                          this.props.filterBasicPaymentByEmployee({
                            type: "intern",
                          });
                        }}
                      >
                        Interns
                      </Button>
                    </Menu.Item>
                  </Menu>
                }
              >
                <Button className="btn btn-dark">
                  Filter by Employee <DownOutlined />
                </Button>
              </Dropdown>
            </Space>
          </Col>

          <Col>
            <Space size="middle">
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                      <Button
                        onClick={() => {
                          this.props.filterBasicPaymentByStatus({
                            status: "all",
                          });
                        }}
                      >
                        Full Time Status
                      </Button>
                    </Menu.Item>

                    <Menu.Item key="2" icon={<UserOutlined />}>
                      <Button
                        onClick={() => {
                          this.props.filterBasicPaymentByStatus({
                            status: "active",
                          });
                        }}
                      >
                        Part Time Status
                      </Button>
                    </Menu.Item>

                    <Menu.Item key="3" icon={<UserOutlined />}>
                      <Button
                        onClick={() => {
                          this.props.filterBasicPaymentByStatus({
                            status: "portal_enabled",
                          });
                        }}
                      >
                        Contract Status
                      </Button>
                    </Menu.Item>

                    <Menu.Item key="4" icon={<UserOutlined />}>
                      <Button
                        onClick={() => {
                          this.props.filterBasicPaymentByStatus({
                            status: "portal_disable",
                          });
                        }}
                      >
                        Interns
                      </Button>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UserOutlined />}>
                      <Button
                        onClick={() => {
                          this.props.filterBasicPaymentByStatus({
                            status: "terminated",
                          });
                        }}
                      >
                        Interns
                      </Button>
                    </Menu.Item>
                  </Menu>
                }
              >
                <Button className="btn btn-dark">
                  Filter by Status <DownOutlined />
                </Button>
              </Dropdown>
            </Space>
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
    ...bindActionCreators(
      { fetchStaffs, filterBasicPaymentByEmployee, filterBasicPaymentByStatus },
      dispatch
    ),
  };
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.isAuthenticated,
    staffs: state.staffs.staffs,
    loader: state.staffs.loader,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicPay);
