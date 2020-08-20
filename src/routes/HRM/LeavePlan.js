import React, { Component } from "react";
import { Row, Select } from "antd";
import Table from "../../components/layouts/Table";
import CreateLeavePolicy from "./modal/CreateLeavePolicy";
import ApplyLeavePolicy from "./modal/ApplyLeavePolicy";
import EditLeavePolicy from "./modal/EditLeavePolicy";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchDesignations, addDesignation } from "appRedux/actions/staff";

import {
  Menu,
  Dropdown,
  Button,
  Form,
  Input,
  message,
  Tooltip,
  Modal,
  Divider,
  Col,
} from "antd";

import {
  DownOutlined,
  UserOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";

class LeavePolicy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      title: "",
      about: "",
      description: "",
      viewType: "",
    };
  }

  render() {
    const { Option } = Select;
    const { leavepolicies } = this.props;

    const showModal = () => {
      this.setState({ ...this.state, show: !this.state.show });
    };

    const handleInput = (prop) => (event) => {
      const name = [prop];
      const value = event;
      this.setState({ [name]: value });
      console.log(this.state);
    };

    const handleSubmit = () => {
      console.log(this.props);
      const view = this.state.viewType;

      this.props.history.push(`leave-plans/policy`);
    };

    return (
      <section className="leaveplan-section container">
        <Divider orientation="left">Plan Leave</Divider>
        <Row className="table-header" justify="space-between">
          <Col className="table-header__item">
            <Form.Item
              label="Leave Policy"
              name="leavePolicy"
              rules={[
                {
                  required: false,
                  message: "Please select an Leave Policy Type",
                },
              ]}
            >
              <Select
                className="form-item"
                showSearch
                style={{ width: 200 }}
                placeholder={`Select viewType Type`}
                optionFilterProp="children"
                name="leavePolicy"
                value={this.state.viewType}
                onChange={handleInput("leavePolicy")}
                onFocus={handleInput("leavePolicy")}
                onBlur={handleInput("leavePolicy")}
                onSearch={handleInput("leavePolicy")}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {leavepolicies.length
                  ? leavepolicies.map((policy) => {
                      return <Option value={policy.name}>{policy.name}</Option>;
                    })
                  : null}
                <Option value="Salary">Salary</Option>
                <Option value="Wages">Wages</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col className="table-header__item">
            <Form.Item
              name="viewType"
              label="Planning Type"
              rules={[
                {
                  required: false,
                  message: "Please select an view Type",
                },
              ]}
            >
              <Select
                className="form-item"
                showSearch
                style={{ width: 200 }}
                placeholder={`Select view Type`}
                optionFilterProp="children"
                name="viewType"
                value={this.state.viewType}
                onChange={handleInput("viewType")}
                onFocus={handleInput("viewType")}
                onBlur={handleInput("viewType")}
                onSearch={handleInput("viewType")}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="BasicView">Basic View</Option>
                <Option value="DateView">Calender View</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Divider></Divider>
        <Row justify="end">
          <Col>
            <Button className="btn btn-primary" onClick={handleSubmit}>
              <DoubleRightOutlined /> Next
            </Button>
          </Col>
        </Row>
      </section>
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
    leavepolicies: state.staffs.leavepolicies,
    loader: state.staffs.loader,
    alertMessage: state.staffs.alertMessage,
    showMessage: state.staffs.showMessage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeavePolicy);
