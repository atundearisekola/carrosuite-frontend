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
  fetchLeavePolicies,
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

class LeavePolicy extends Component {
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
    this.props.fetchLeavePolicies();
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
  }

  render() {
    const { Option } = Select;
    const { leavepolicies, loader, alertMessage, showMessage } = this.props;

    const columns = [
      {
        key: "id",
        title: "Policy Name",
        dataIndex: "name",
        width: "50",
      },
      {
        key: "id",
        title: "Policy Date",
        dataIndex: "date",
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
                    <EditLeavePolicy record={record} />
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

    let dataSource = leavepolicies.length
      ? leavepolicies.map((policy) => {
          return {
            key: policy.id,
            id: policy.id,
            name: policy.name,
            date: policy.date,
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
        <Row className="btn__container" justify="space-between">
          <Col>
            <ApplyLeavePolicy />
          </Col>
          <Col>
            <CreateLeavePolicy />
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
    ...bindActionCreators(
      { fetchLeavePolicies, setLoader, hideMessage },
      dispatch
    ),
  };
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.isAuthenticated,
    mainDesignations: state.staffs.designations,
    staffs: state.staffs.staffs,
    leavepolicies: state.staffs.leavepolicies,
    loader: state.staffs.loader,
    alertMessage: state.staffs.alertMessage,
    showMessage: state.staffs.showMessage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeavePolicy);
