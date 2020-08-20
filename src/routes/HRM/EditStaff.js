import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { Form } from '@ant-design/compatible';
import "@ant-design/compatible/assets/index.css";
import { Steps, Button, message, Form } from "antd";
import EditStaffPersonalForm from "./forms/EditStaffPersonalForm";
import EditStaffWorkForm from "./forms/EditWorkForm";
// import { SAVE_STAFF, ADD_STAFF } from "../../../actions/types";
import EditTaskForm from "./forms/EditTaskForm";
import EditOfferDetails from "./forms/EditDetails";

import { editStaff, getStaff } from "appRedux/actions/staff";
const { Step } = Steps;

class AddStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      first_name: this.props.currentStaff.first_name,
      last_name: this.props.currentStaff.last_name,
      email: this.props.currentStaff.email,
      sex: this.props.currentStaff.sex,
      dob: new Date(this.props.currentStaff.dob),
      phone_number: this.props.currentStaff.phone_number,
      nationality: this.props.currentStaff.nationality,
      state_of_origin: this.props.currentStaff.state_of_origin,
      city: this.props.currentStaff.city,
      marital_status: this.props.currentStaff.marital_status,
      religion: this.props.currentStaff.religion,

      ////////////////

      company: this.props.currentStaff.company,
      primary_department: this.props.currentStaff.primary_department,
      division: this.props.currentStaff.division,
      primary_position: this.props.currentStaff.primary_position,
      reportsto: this.props.currentStaff.reportsto,
      employment_type: this.props.currentStaff.employment_type,
      startDate: new Date(this.props.currentStaff.startDate),
      nin: this.props.currentStaff.nin,
      location: this.props.currentStaff.location,

      ///////////////////////////

      leavePolicy: this.props.currentStaff.leavePolicy,
      division: this.props.currentStaff.division,
      averageWeeklyHours: this.props.currentStaff.averageWeeklyHours,
      compensation: this.props.currentStaff.compensation,
      addition: this.props.currentStaff.addition,

      ///////////////
      probation: this.props.currentStaff.probation,
      internal_update: this.props.currentStaff.internal_update,
      tasks: [this.props.currentStaff.tasks],
    };
  }

  componentDidMount() {
    // this.props.setLoader(true);
    const id = { id: this.props.id };
    this.props.getStaff(id);
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
          <EditStaffPersonalForm
            state={this.state}
            handleDobChange={handleDobChange}
            handleInput={handleInput}
          />
        ),
      },
      {
        title: "Job Detials",
        content: (
          <EditStaffWorkForm
            state={this.state}
            handleStartDateChange={handleStartDateChange}
            handleInput={handleInput}
          />
        ),
      },

      {
        title: "Offer Details",
        content: (
          <EditOfferDetails
            state={this.state}
            handleStartDateChange={handleStartDateChange}
            handleInput={handleInput}
          />
        ),
      },
      {
        title: "Add Task",
        content: (
          <EditTaskForm
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
    const handleSubmit = (values) => {
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

      this.props.editStaff(data);
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
        editStaff,
        getStaff,
      },
      dispatch
    ),
  };
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.isAuthenticated,
    currentStaff: state.staffs.currentStaff,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStaff);
