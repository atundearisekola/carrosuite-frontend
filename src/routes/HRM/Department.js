import React, { Component } from "react";

import AddDepartments from "./forms/AddDepartments";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchDepartments, addDepartment } from "appRedux/actions/staff";
import {
  Col,
  Row,
  Button,
  Card,
  Modal,
  Menu,
  Dropdown,
  message,
  Tooltip,
} from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

class Departments extends Component {
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
    this.props.fetchDepartments();
  }

  render() {
    const { departments } = this.props;

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

      this.props.addDepartment(data);
    };
    return (
      <div style={{ width: "100%" }}>
        <Modal
          visible={this.state.show}
          title="Add Department"
          // onOk={showModal}
          onCancel={showModal}
        >
          <AddDepartments
            state={this.state}
            {...this.props}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
          />
        </Modal>
        <Button className="btn btn-dark m-b-30" onClick={showModal}>
          Add Department
        </Button>
        <Row gutter={[16, 16]}>
          {departments.length
            ? departments.map((dept) => (
                <Col key={dept.id}>
                  <Card
                    title={<span className="lead text-gray">{dept.title}</span>}
                    className="bg-light"
                    key={dept.id}
                  >
                    <Button icon={<UserOutlined />} className="btn btn-primary">
                      {dept.members} Members
                    </Button>
                  </Card>
                </Col>
              ))
            : ""}
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(
      {
        fetchDepartments,
        addDepartment,
      },
      dispatch
    ),
  };
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.isAuthenticated,
    departments: state.staffs.departments,
    loader: state.staffs.loader,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Departments);
