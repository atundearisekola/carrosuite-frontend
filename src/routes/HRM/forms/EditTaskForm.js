import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTask from "./AddTask";

import {
  PageHeader,
  Tag,
  Col,
  Row,
  Menu,
  Modal,
  Button,
  Checkbox,
  Card,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";

const defaultTasks = [
  {
    name: "Internal_update",
    title: "Internal Update",
    description:
      "Inform all relevant departments with an internal announcement",
  },
  {
    name: "probation",
    title: "Probation",
    description: "Put Staff on Probation for sometime",
  },
];

const AddTaskForm = (props) => {
  const values = useSelector((state) => state.staffs.newStaff);
  const [visible, setVisible] = useState(false);
  const menu = (
    <Menu>
      <Menu.Item key="2">before Start Day</Menu.Item>
      <Menu.Item key="1">after Start Day</Menu.Item>
    </Menu>
  );
  return (
    <div>
      <PageHeader
        title={values.firstName + " " + values.lastName}
        style={{
          border: "1px solid rgb(235, 237, 240)",
        }}
        subTitle={values.role + " at " + values.company}
        tags={<Tag color="red">Inactive</Tag>}
        avatar={{
          src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
        }}
      />

      <div style={{ padding: "30px" }}>
        <Row gutter={[18, 18]}>
          {defaultTasks.map((task, idx) => (
            <Col key={idx} span={6}>
              <Card
                title={
                  <span>
                    <Checkbox
                      name={task.name}
                      onChange={props.handleInput(task.name)}
                      value={task}
                    />{" "}
                    <a>{task.title}</a>
                  </span>
                }
                style={{ background: "#ECECEC" }}
                bordered={true}
              >
                {task.description}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      {props.state.tasks.map((task, index) => (
        <Card
          title={
            <span>
              <PlusOutlined /> New Task {index}
            </span>
          }
          bordered={true}
          style={{ background: "#ECECEC" }}
        >
          <AddTask menu={menu} task={task} index={index} {...props} />
        </Card>
      ))}

      <Card
        title={
          <span>
            <PlusOutlined /> Add Task
          </span>
        }
        bordered={true}
        style={{ background: "#ECECEC" }}
        onClick={() => {
          props.addTask();
        }}
        content={<a>Add Task</a>}
      />
    </div>
  );
};

export default AddTaskForm;
