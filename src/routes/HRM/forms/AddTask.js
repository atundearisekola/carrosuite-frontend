import React, { useState } from "react";
import "@ant-design/compatible/assets/index.css";
// import { Form } from '@ant-design/compatible';
import { Radio, Input, Dropdown, Cascader, Form, Button } from "antd";
import { DownOutlined, DeleteOutlined } from "@ant-design/icons";
const AddTask = (props) => {
  const handleRadio = (e) => {
    setRadioValue(e.target.value);
  };
  const { menu, task, index } = props;

  const [radioValue, setRadioValue] = useState(null);
  return (
    <div>
      <Input
        placeholder="Enter New Task"
        name="task"
        onChange={(e) => {
          props.onChangeTask(e, index);
        }}
        value={task.task}
      />
      <Input.TextArea
        placeholder="Enter Description"
        name="description"
        onChange={(e) => {
          props.onChangeTask(e, index);
        }}
        value={task.description}
        autoSize={{ minRows: 2, maxRows: 6 }}
      />
      <label>Notify</label>
      <Radio.Group
        placeholder="Notify"
        name="notify"
        onChange={(e) => {
          props.onChangeTask(e, index);
        }}
        value={task.notify}
      >
        <Radio value={"admin"}>Admin</Radio>
        <Radio value={"employee"}>Employee</Radio>
        <Radio value={"email"}>Email</Radio>
      </Radio.Group>
      {task.notify === "employee" && (
        <Input
          placeholder={`Enter Employee Name`}
          name="employment"
          onChange={(e) => {
            props.onChangeTask(e, index);
          }}
          value={task.employment}
        />
      )}
      {task.notify === "email" && (
        <div>
          {" "}
          <Input
            placeholder={`Enter  Name`}
            name="name"
            onChange={(e) => {
              props.onChangeTask(e, index);
            }}
            value={task.name}
          />
          <Input
            placeholder={`Enter  Email`}
            name="email"
            onChange={(e) => {
              props.onChangeTask(e, index);
            }}
            value={task.email}
          />
        </div>
      )}
      <Input
        placeholder={`When to Alert`}
        name="whenToAlert"
        onChange={(e) => {
          props.onChangeTask(e, index);
        }}
        value={task.whenToAlert}
        type="number"
      />{" "}
      days{" "}
      <Dropdown overlay={menu}>
        <a href="#">
          before Start Date <DownOutlined />
        </a>
      </Dropdown>
      <Button
        onClick={() => props.removeTask(index)}
        className="btn btn-danger"
      >
        <DeleteOutlined />
        Remove
      </Button>
    </div>
  );
};

export default AddTask;
