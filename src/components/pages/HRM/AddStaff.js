import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Steps, Button, message,Form  } from "antd";
import StaffPersonalForm from "./forms/StaffPersonalForm";
import StaffWorkForm from "./forms/WorkForm";
import { SAVE_STAFF, ADD_STAFF } from "../../../actions/types";
import AddTaskForm from "./forms/AddTaskForm";
import OfferDetails from "./forms/OfferDetails";
const { Step } = Steps;

const AddStaff = props => {
  const dispatch = useDispatch();
  const values = useSelector(state => state.staffs.newStaff);
  const steps = [
    {
      title: "Basin Info",
      content: <StaffPersonalForm />
    },
    {
      title: "Job Detials",
      content: <StaffWorkForm />
    },

    {
      title: "Offer Details",
      content: <OfferDetails />
    },
    {
      title: "Add Task",
      content: <AddTaskForm />
    }
  ];
  const [current, setCurrent] = useState(0);

  // Go to  next tab
  const next = () => {
    const newCurrent = current + 1;
    setCurrent(newCurrent);
  };

  // GO to previous page
  const prev = () => {
    const newCurrent = current - 1;
    setCurrent(newCurrent);
  };

  //Handle form Submission For each page
  const handleSubmit = values => {
        dispatch({
          type: SAVE_STAFF,
          payload: values
        });
        next();
  };

  const AddStaffData = () => {
    message.loading("Please Wait!");
    dispatch({
      type: ADD_STAFF,
      payload: values
    });
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 12 },
      sm: { span: 8 }
    }
  };
  return (
    <div>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content" style={{ marginTop: "2rem" }}>
        <Form {...formItemLayout} onFinish={handleSubmit}>
          {steps[current].content}

          <div className="steps-action">
            <Form.Item>
              {current > 0 && (
                <Button className="btn btn-secondary" onClick={() => prev()}>
                  Previous
                </Button>
              )}
              {current < steps.length - 1 && (
                <Button
                  htmlType="submit"
                  className="btn btn-primary"
                  style={{ marginLeft: 8 }}
                >
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  style={{ marginLeft: 8 }}
                  className="btn btn-primary"
                  onClick={AddStaffData}
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
};

export default AddStaff;
