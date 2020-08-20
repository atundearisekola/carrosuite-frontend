import React, { Component } from "react";
import Table from "../../components/layouts/Table";
import { Tag, Space, Row, Col } from "antd";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchStaffs, deleteStaff } from "appRedux/actions/staff";
import { Link } from "react-router-dom";
import peopleIcon from "assets/people.png";
import {
  List,
  Avatar,
  Menu,
  Dropdown,
  Skeleton,
  Button,
  message,
  Tooltip,
  Card,
} from "antd";
import {
  DownOutlined,
  UserOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  MailOutlined,
  PhoneOutlined,
  EyeOutlined,
} from "@ant-design/icons";

class StaffDirectory extends Component {
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
    const page = {
      start: this.state.start,
      max: this.state.max,
    };
    this.props.fetchStaffs(page);
  }

  render() {
    const { mainStaffs } = this.props;
    const { Meta } = Card;

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
      <section className="staff-directory">
        <Row gutter={16}>
          {mainStaffs.length
            ? mainStaffs.map((prop) => {
                return (
                  <Col>
                    <Card
                      className="staff-directory__staff-card"
                      actions={[
                        <Link to={"/home/app/hrm/staff/id"}>
                          <EyeOutlined key="view" />
                        </Link>,
                        <Link to={"/home/app/hrm/edit-staff/id"}>
                          <EditOutlined key="edit" />
                        </Link>,
                        <EllipsisOutlined key="ellipsis" />,
                      ]}
                    >
                      <img
                        className="staff-directory__staff-img"
                        alt="example"
                        src={process.env.PUBLIC_URL + "/img/nat-8.jpg"}
                      />
                      <div className="staff-directory__staff-card__content">
                        <h1>Atunde Toyeeb</h1>
                        <p>HR Specialist</p>
                        <p className="staff-heading__contacts-item">
                          Department | People
                        </p>

                        <p className="staff-heading__contacts-item">
                          <MailOutlined /> Email
                        </p>
                        <p className="staff-heading__contacts-item">
                          <PhoneOutlined /> +234 8159109387
                        </p>

                        <p className="staff-heading__contacts-item">
                          Employed Since | May' 2015
                        </p>
                      </div>
                    </Card>
                  </Col>
                );
              })
            : null}
        </Row>
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(StaffDirectory);
