import React, { Component } from "react";
import { Row, Select, Table } from "antd";
//import Table from "../../components/layouts/Table";
import CircularProgress from "components/CircularProgress/index";
import AssignLeavePolicy from "./modal/AssignLeavePolicy";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchLeavePlans, setLoader } from "appRedux/actions/staff";

import {
  Menu,
  Dropdown,
  Button,
  Form,
  Input,
  message,
  Tooltip,
  Modal,
  Space,
  Col,
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
    const policy = { policy: this.props.policy };
    this.props.fetchLeavePlans(policy);
  }

  render() {
    const { Option } = Select;
    const { leaveplans, loader, alertMessage, showMessage } = this.props;

    const showModal = () => {
      this.setState({ ...this.state, show: !this.state.show });
    };

    const handleInput = (prop) => (event) => {
      event.preventDefault();
      const name = [prop];
      const value = event.target.value;
      this.setState({ [name]: value });
      console.log(this.state);
    };

    const handleSubmit = () => {
      const data = {
        title: this.state.title,
        about: this.state.about,
        description: this.state.description,
      };

      this.props.push("");
    };
    const columns = [
      {
        key: "id",
        title: "Staff Name",
        dataIndex: "staff_name",
        width: "50",
      },
      {
        key: "id",
        title: "Begin On",
        dataIndex: "startDate",
        width: "50",
      },
      {
        key: "id",
        title: "Ending",
        dataIndex: "ending",
        width: "50",
      },
      {
        key: "id",
        title: "Review",
        dataIndex: "review",
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
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    <Button onClick={() => {}}>Approve</Button>
                  </Menu.Item>
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    <Button onClick={() => {}}>Remove</Button>
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
                    <Button onClick={() => {}}>Approve</Button>
                  </Menu.Item>
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    <Button onClick={() => {}}>Remove</Button>
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

    // const mainDesignations = staffs.designations;

    let dataSource = leaveplans.length
      ? leaveplans.map((leaveplan) => {
          return {
            key: leaveplan.id,
            id: leaveplan.id,
            staff_name: leaveplan.staff_name,
            startDate: leaveplan.startDate,
            ending: leaveplan.ending,
            review: leaveplan.review,
          };
        })
      : null;

    return (
      <section className="leavepolicy-section container">
        <Row className=".btn__container" justify="end">
          <Col>
            <AssignLeavePolicy />
          </Col>
        </Row>
        <br />

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
    ...bindActionCreators({ fetchLeavePlans, setLoader }, dispatch),
  };
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.isAuthenticated,
    leaveplans: state.staffs.leaveplans,
    loader: state.staffs.loader,
    alertMessage: state.staffs.alertMessage,
    showMessage: state.staffs.showMessage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeavePolicy);
