import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { Form } from '@ant-design/compatible';
import "@ant-design/compatible/assets/index.css";
import { Steps, Button, message, Form } from "antd";
import StaffPersonalForm from "./forms/StaffPersonalForm";
import StaffWorkForm from "./forms/WorkForm";
// import { SAVE_STAFF, ADD_STAFF } from "../../../actions/types";
import AddTaskForm from "./forms/AddTaskForm";
import OfferDetails from "./forms/OfferDetails";

import { addStaff } from "appRedux/actions/staff";
const { Step } = Steps;

class AddStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      first_name: "",
      last_name: "",
      email: "",
      sex: "",
      dob: new Date(),
      phone_number: "",
      nationality: "",
      state_of_origin: "",
      city: "",
      marital_status: "",
      religion: "",

      ////////////////

      company: "",
      primary_department: "",
      division: "",
      primary_position: "",
      reportsto: "",
      employment_type: "",
      startDate: new Date(),
      nin: "",
      location: "",

      ///////////////////////////

      leavePolicy: "",
      division: "",
      averageWeeklyHours: "",
      compensation: "",
      addition: "",

      ///////////////
      probation: "",
      internal_update: "",
      tasks: [],
    };
  }

  render() {
    // const values = useSelector(state => state.staffs.newStaff);

    const handleInput = (prop) => (event) => {
      event.preventDefault();
      const name = [prop];
      const value = event.target.value;
      this.setState({ [name]: value }, () => {
        validateField(name, value);
      });
      console.log(this.state);
    };

    const handleChange = (prop) => (event) => {
      this.setState({ ...this.state, [prop]: event.target.value });
    };

    const validateField = (fieldName, value) => {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;

      switch (fieldName) {
        case "email":
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? "" : " is invalid";
          break;
        case "password":
          passwordValid = value.length >= 6;
          fieldValidationErrors.password = passwordValid ? "" : " is too short";
          break;
        default:
          break;
      }
      this.setState(
        {
          formErrors: fieldValidationErrors,
          emailValid: emailValid,
          passwordValid: passwordValid,
        },
        validateForm
      );
    };

    const validateForm = () => {
      this.setState({
        formValid: this.state.emailValid && this.state.passwordValid,
      });
    };

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

    const handleDobChange = (date) => {
      this.setState({ ...this.state, dob: date });
    };
    const handleStartDateChange = (date) => {
      this.setState({ ...this.state, startdate: date });
    };

    const steps = [
      {
        title: "Basin Info",
        content: (
          <StaffPersonalForm
            state={this.state}
            handleDobChange={handleDobChange}
            handleInput={handleInput}
          />
        ),
      },
      {
        title: "Job Detials",
        content: (
          <StaffWorkForm
            state={this.state}
            handleStartDateChange={handleStartDateChange}
            handleInput={handleInput}
          />
        ),
      },

      {
        title: "Offer Details",
        content: (
          <OfferDetails
            state={this.state}
            handleStartDateChange={handleStartDateChange}
            handleInput={handleInput}
          />
        ),
      },
      {
        title: "Add Task",
        content: (
          <AddTaskForm
            state={this.state}
            handleInput={handleInput}
            addTask={addTask}
            removeTask={removeTask}
            onChangeTask={onChangeTask}
          />
        ),
      },
    ];

    // Go to  next tab
    const next = () => {
      const current = this.state.current + 1;
      this.setState({ current });
    };

    // GO to previous page
    const prev = () => {
      const current = this.state.current - 1;
      this.setState({ current });
    };

    //Handle form Submission For each page
    const handleSubmit = () => {
      const data = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        sex: this.state.sex,
        dob: this.state.dob,
        phone_number: this.state.phone_number,
        nationality: this.state.nationality,
        state_of_origin: this.state.state_of_origin,
        city: this.state.city,
        marital_status: this.state.marital_status,
        religion: this.state.religion,

        ////////////////

        company: this.state.company,
        primary_department: this.state.primary_department,
        division: this.state.division,
        primary_position: this.state.primary_position,
        reportsto: this.state.reportsto,
        employment_type: this.state.employment_type,
        startDate: this.state.startDate,
        nin: this.state.nin,
        location: this.state.location,

        ///////////////////////////

        leavePolicy: this.state.leavePolicy,
        division: this.state.division,
        averageWeeklyHours: this.state.averageWeeklyHours,
        compensation: this.state.compensation,
        addition: this.state.addition,

        ///////////////
        probation: this.state.probation,
        internal_update: this.state.internal_update,
        tasks: this.state.tasks,
      };

      this.props.addStaff(data);
    };

    const AddStaffData = () => {
      // message.loading("Please Wait!");
      // dispatch({
      //   type: ADD_STAFF,
      //   payload: values
      // });
    };

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 8 },
      },
    };

    return (
      <div>
        <Steps current={this.state.current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content" style={{ marginTop: "2rem" }}>
          <Form {...formItemLayout} onFinish={handleSubmit}>
            {steps[this.state.current].content}

            <div className="steps-action">
              <Form.Item>
                {this.state.current > 0 && (
                  <Button className="btn btn-secondary" onClick={() => prev()}>
                    Previous
                  </Button>
                )}
                {this.state.current < steps.length - 1 && (
                  <Button
                    onClick={() => next()}
                    htmlType="submit"
                    className="btn btn-primary"
                    style={{ marginLeft: 8 }}
                  >
                    Next
                  </Button>
                )}
                {this.state.current === steps.length - 1 && (
                  <Button
                    style={{ marginLeft: 8 }}
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Done
                  </Button>
                )}
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(
      {
        addStaff,
      },
      dispatch
    ),
  };
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStaff);
