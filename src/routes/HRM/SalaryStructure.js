import React, { Component } from "react";
import { Row, Select } from "antd";
//import Table from "../../components/layouts/Table";
import CircularProgress from "components/CircularProgress/index";
import CreateLeavePolicy from "./modal/CreateLeavePolicy";
import ApplyLeavePolicy from "./modal/ApplyLeavePolicy";
import EditLeavePolicy from "./modal/EditLeavePolicy";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  // fetchSalaryStructures,
  hideMessage,
  setLoader,
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
} from "antd";

import { DownOutlined, UserOutlined } from "@ant-design/icons";
import EditSalaryStructure from "./modal/EditSalaryStructure";
import { Link } from "react-router-dom";
import CreateSalaryStructure from "./modal/CreateSalaryStructure";

class SalaryStructure extends Component {
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
    // this.props.fetchSalaryStructures();
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
  }

  render() {
    const { Option } = Select;
    const { salaryStructures, loader, alertMessage, showMessage } = this.props;

    const columns = [
      {
        key: "id",
        title: "Name",
        dataIndex: "name",
        width: "50",
      },
      {
        key: "id",
        title: "Pay Type",
        dataIndex: "pay_type",
        width: "50",
      },
      {
        key: "id",
        title: "Pay Amount",
        dataIndex: "pay_amount",
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
                    <EditSalaryStructure record={record} />
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link>Delete Structure</Link>
                  </Menu.Item>
                </Menu>
              }
            >
              <Button>
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

    let dataSource = salaryStructures.length
      ? salaryStructures.map((item) => {
          return {
            key: item.id,
            id: item.id,
            pay_type: item.pay_type,
            pay_amount: item.pay_amount,
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
        <Row className="btn__container" justify="end">
          <Col>
            <CreateSalaryStructure />
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

        <Table
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          columns={columns}
          area="staff"
          dataSource={dataSource}
        />

        {loader ? (
          <div className="gx-loader-view">
            <CircularProgress />
          </div>
        ) : null}
        {showMessage ? message.error(alertMessage.toString()) : null}
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ setLoader, hideMessage }, dispatch),
  };
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.isAuthenticated,
    mainDesignations: state.staffs.designations,
    staffs: state.staffs.staffs,
    salaryStructures: state.staffs.salaryStructures,
    loader: state.staffs.loader,
    alertMessage: state.staffs.alertMessage,
    showMessage: state.staffs.showMessage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SalaryStructure);
