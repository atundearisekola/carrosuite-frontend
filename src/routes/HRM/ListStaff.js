import React, { Component } from "react";
import Table from "../../components/layouts/Table";
import { Tag, Space } from "antd";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchStaffs, deleteStaff } from "appRedux/actions/staff";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Button, message, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
class ListStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      max: 30,
    };
  }

  componentDidMount() {
    const page = {
      start: this.state.start,
      max: this.state.max,
    };
    this.props.fetchStaffs(page);
  }

  render() {
    const { mainStaffs } = this.props;
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
        title: "Verification",
        key: "verification",
        dataIndex: "verification",
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
                  <Menu.Item key="2" icon={<UserOutlined />}>
                    <Link to={"/home/app/hrm/edit-staff/" + record.id}>
                      Edit Staff
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="3" icon={<UserOutlined />}>
                    <Button
                      onClick={() => this.props.deleteStaff({ id: record.id })}
                    >
                      Delete Staff
                    </Button>
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

    if (mainStaffs.length) {
      console.log("staffs", mainStaffs);
      dataSource = mainStaffs.length
        ? mainStaffs.map((staff) => {
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
              verification:
                staff.StaffReferences.length === 0 ? (
                  <Tag color="red">No Guarantor Provided</Tag>
                ) : (
                  <Tag color="green">Verified</Tag>
                ),
            };
          })
        : null;
    }

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
        fetchStaffs,
        deleteStaff,
      },
      dispatch
    ),
  };
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.isAuthenticated,
    mainStaffs: state.staffs.staffs,
    loader: state.staffs.loader,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListStaff);
