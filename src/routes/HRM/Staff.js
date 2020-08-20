import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getStaff } from "appRedux/actions/staff";
import {
  Col,
  Row,
  Button,
  Card,
  Tabs,
  Menu,
  Dropdown,
  message,
  Tooltip,
  Divider,
} from "antd";
import {
  PlusOutlined,
  DownOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";

import StaffBio1 from "./StaffBio1";
import StaffBio from "./StaffBio";
import EditTask from "./forms/EditTask";

class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    // this.props.setLoader(true);
    const id = { id: this.props.id };
    this.props.getStaff(id);
  }

  render() {
    const { TabPane } = Tabs;
    const { currentStaff } = this.props;
    const menu = (
      <Menu>
        <Menu.Item key="2">before Start Day</Menu.Item>
        <Menu.Item key="1">after Start Day</Menu.Item>
      </Menu>
    );
    const addTask = () => {
      this.setState((prevState) => ({
        tasks: [
          ...prevState.tasks,
          { unit: "", floor: "", size: "", remark: "" },
        ],
      }));

      console.log(this.state.tasks);
    };

    const removeTask = (index) => {
      var array = [...this.state.tasks];
      array.splice(index, 1);
      this.setState({ ...this.state, tasks: array });
    };

    const onChangeTask = (e, index) => {
      var arrays = [...this.state.tasks];
      let array = {
        ...arrays[index],
        [e.target.name]: e.target.value,
      };

      arrays[index] = array;

      this.setState({ ...this.state, tasks: arrays });
      console.log(this.state.tasks);
    };
    return (
      <section className="staff-section">
        <Row gutter={16} justify="space-around" className="staff-heading">
          <Col className="staff-heading__img-box">
            <img
              className="staff-heading__img"
              src={process.env.PUBLIC_URL + "/img/nat-8.jpg"}
            />
          </Col>
          {currentStaff.length ? (
            <>
              <Col className="staff-heading__details">
                <h1>
                  {currentStaff.User.first_name}. {currentStaff.last_name}
                </h1>
                <p>{currentStaff.Position.position}</p>
                <p>Department | {currentStaff.Department.department}</p>
                <p>Office Location | {currentStaff.employment_start}</p>
                <p>Employed Since | May' 2015</p>
              </Col>
              <Col className="staff-heading__contacts">
                <p className="staff-heading__contacts-item">
                  <MailOutlined /> {currentStaff.User.email}
                </p>
                <p className="staff-heading__contacts-item">
                  <PhoneOutlined /> +234 8159109387
                </p>
                <p className="staff-heading__contacts-item">
                  <PhoneOutlined /> +234 7039107486
                </p>
              </Col>
            </>
          ) : (
            <>
              <Col className="staff-heading__details">
                <h1>Alexandr Wren</h1>
                <p>HR Specialist</p>
                <p>Department | People</p>
                <p>Office Location | Ikeja, Lagos</p>
                <p>Employed Since | May' 2015</p>
              </Col>
              <Col className="staff-heading__contacts">
                <p className="staff-heading__contacts-item">
                  <MailOutlined /> Email
                </p>
                <p className="staff-heading__contacts-item">
                  <PhoneOutlined /> +234 8159109387
                </p>
                <p className="staff-heading__contacts-item">
                  <PhoneOutlined /> +234 7039107486
                </p>
              </Col>
            </>
          )}
        </Row>
        <Divider></Divider>
        <div className="staff-content">
          <Tabs defaultActiveKey="1" tabPosition="left">
            <TabPane
              tab={
                <span>
                  <UserOutlined />
                  Genaral
                </span>
              }
              key="1"
            >
              {currentStaff.length ? <StaffBio /> : <StaffBio1 />}
            </TabPane>
            <TabPane
              tab={
                <span>
                  <ScheduleOutlined />
                  Task
                </span>
              }
              key="2"
            >
              <Card title="STAFF TASKS">
                {currentStaff.length
                  ? currentStaff.tasks.map((task, index) => (
                      <Card
                        style={{ marginTop: 16 }}
                        type="inner"
                        title={task.task}
                      >
                        <PlusOutlined /> <p>{task.description}</p>
                        <p>Starting Date: {task.whenToAlert}</p>
                      </Card>
                    ))
                  : "No Task Yet!!!"}
              </Card>
            </TabPane>
          </Tabs>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(
      {
        getStaff,
      },
      dispatch
    ),
  };
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.isAuthenticated,
    departments: state.staffs.departments,
    currentStaff: state.staffs.currentStaff,
    loader: state.staffs.loader,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Staff);
