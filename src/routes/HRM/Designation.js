import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import Table from "../../components/layouts/Table";

import AddDesignation from "./forms/AddDesignation";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchDesignations, addDesignation } from "appRedux/actions/staff";
import { Menu, Dropdown, Button, message, Tooltip, Modal } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

class Designation extends Component {
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
    this.props.fetchDesignations();
  }

  render() {
    const { mainDesignations, staffs } = this.props;

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

      this.props.addDesignation(data);
    };
    const columns = [
      {
        key: "designation",
        title: "Designation",
        dataIndex: "designation",
        width: "50",
      },
      {
        key: "members",
        title: "Members",
        dataIndex: "members",
        width: "50",
      },
    ];

    const actions = [
      {
        name: "View Staff Members",
        route: "/app/hrm/people/designation/:name",
      },
      {
        name: "View Description",
        route: "/app/hrm/people/designation/:description",
      },
    ];

    // const mainDesignations = staffs.designations;

    let dataSource = mainDesignations.length
      ? mainDesignations.map((designation) => {
          let members = staffs.map((staff) => {
            return staff.position === designation.id;
          });
          console.log(members);
          return {
            key: designation.id,
            id: designation.id,
            designation: designation.position,
            description: designation.description,
            member: members.length,
          };
        })
      : null;

    return (
      <div>
        <Modal
          visible={this.state.show}
          title="Add Designation"
          // onOk={showModal}
          onCancel={showModal}
        >
          <AddDesignation
            state={this.state}
            {...this.props}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
          />
        </Modal>
        <Button className="btn btn-dark" onClick={showModal}>
          Add Designation
        </Button>
        <Table
          columns={columns}
          area="arm"
          dataSource={dataSource}
          actions={actions}
          show={this.state.show}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ fetchDesignations, addDesignation }, dispatch),
  };
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.isAuthenticated,
    mainDesignations: state.staffs.designations,
    staffs: state.staffs.staffs,

    loader: state.staffs.loader,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Designation);
