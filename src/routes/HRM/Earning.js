import React, { Component } from "react";
import { Row, Select } from "antd";
//import Table from "../../components/layouts/Table";
import CreatePayrollItem from "./modal/CreatePayrollItem";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchPayRollItem, createPayRollItem } from "appRedux/actions/staff";

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
import AddNewEarning from "./modal/AddNewEarning";

class Earning extends Component {
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
    this.props.fetchPayRollItem();
  }

  render() {
    const { Option } = Select;
    const { earning } = this.props;

    const columns = [
      {
        key: "id",
        title: "Name",
        dataIndex: "name",
        width: "50",
      },
      {
        key: "id",
        title: "Earning Type",
        dataIndex: "earning_type",
        width: "50",
      },
      {
        key: "id",
        title: "Frequency",
        dataIndex: "frequency",
        width: "50",
      },
      {
        key: "id",
        title: "Prorated",
        dataIndex: "prorated",
        width: "50",
      },

      {
        key: "id",
        title: "Tax deductable",
        dataIndex: "tax_deductable",
        width: "50",
      },

      {
        key: "id",
        title: "Status",
        dataIndex: "status",
        width: "50",
      },

      {
        key: "action",
        render: (text, record) => (
          <Space size="middle">
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    <Link>View Payroll Item</Link>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<UserOutlined />}>
                    <Link>Enable Item</Link>
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
                    <Link>View Payroll Item</Link>
                  </Menu.Item>
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    <Link>Enable Item</Link>
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

    let dataSource = earning.length
      ? earning.map((item) => {
          return {
            key: item.id,
            id: item.id,
            name: item.name,
            earning_type: item.earning_type,
            frequency: item.frequency,
            prorated: item.prorated,
            tax_deductable: item.tax_deductable,
            status: item.status,
          };
        })
      : null;

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
        );
      },
      getCheckboxProps: (record) => ({
        disabled: record.name === "Disabled User", // Column configuration not to be checked
        name: record.name,
      }),
    };

    return (
      <section className="leavepolicy-section container">
        <Divider orientation="left">Earning Items</Divider>
        <Row className="btn__container" justify="end">
          <Col>
            <AddNewEarning />
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
    ...bindActionCreators({ fetchPayRollItem }, dispatch),
  };
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.isAuthenticated,
    earning: state.staffs.earning,
    loader: state.staffs.loader,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Earning);
