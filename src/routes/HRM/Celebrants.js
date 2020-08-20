import React, { Component } from "react";
//import Table from "../../components/layouts/Table";
import { Tag, Space, Table } from "antd";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchCelebrants, setLoader } from "appRedux/actions/staff";
import { Link } from "react-router-dom";
import {
  List,
  Avatar,
  Menu,
  Dropdown,
  Skeleton,
  Button,
  message,
  Tooltip,
} from "antd";
import {
  DownOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const count = 3;

class Celebrants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      max: 30,
      initLoading: true,
      loading: false,
      data: [],
      list: [],
    };
  }

  componentDidMount() {
    this.props.fetchCelebrants();
  }
  render() {
    const { celebrants } = this.props;
    const columns = [
      {
        title: "Id",
        key: "id",
        fixed: "left",
        dataIndex: "id",
        width: "50",
      },
      {
        title: "Name",
        key: "name",
        fixed: "left",
        render: (text, record) => (
          <Space size="middle">
            <Link to={"/home/app/hrm/staff/" + record.id}>{text}</Link>
          </Space>
        ),
        width: "80",
      },

      {
        title: "Email",
        key: "email",
        dataIndex: "email",
        width: "100",
      },

      {
        title: "Position",
        key: "position",
        dataIndex: "position",
        width: "100",
      },
      {
        title: "Department",
        key: "department",
        dataIndex: "department",
        // width: "200"
      },
      {
        title: "Gender",
        key: "gender",
        dataIndex: "gender",
        width: "30",
      },
      {
        title: "Type",
        key: "type",
        dataIndex: "type",
        width: "100",
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
                    <Link to={"/home/app/hrm/staff/" + record.id}>
                      View Staff
                    </Link>
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
        key: 1,
        name: "View Staff",
        route: "/app/hrm/staff",
      },
    ];

    let dataSource;

    if (celebrants.length) {
      console.log("staffs", celebrants);
      dataSource = celebrants.length
        ? celebrants.map((staff) => {
            return {
              id: staff.id,
              name: `${staff.User.first_name ? staff.User.first_name : ""} ${
                staff.User.last_name ? staff.User.last_name : ""
              }`,
              email: staff.User.email,
              key: staff.User.email,
              gender: staff.User.sex,
              position: staff.Position.position,
              department: staff.Department.deparment,
              phone_number: staff.User.phone_number,
              type: <Tag color="green">{staff.event_type}</Tag>,
            };
          })
        : null;
    }

    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: "center",
            marginTop: 12,
            height: 32,
            lineHeight: "32px",
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;

    return (
      <div>
        <Table
          columns={columns}
          area="staff"
          dataSource={dataSource}
          actions={actions}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(
      {
        fetchCelebrants,
        setLoader,
      },
      dispatch
    ),
  };
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.isAuthenticated,
    celebrants: state.staffs.celebrants,
    loader: state.staffs.loader,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Celebrants);
