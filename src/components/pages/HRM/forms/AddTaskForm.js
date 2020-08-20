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
  Card
} from "antd";
import {PlusOutlined} from  '@ant-design/icons'

const defaultTasks = [
  {
    title: "Internal Update",
    description: "Inform all relevant departments with an internal announcement"
  },
  { title: "Probation", description: "Put Staff on Probation for sometime" }
];

const AddTaskForm = props => {
  const values = useSelector(state => state.staffs.newStaff);
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
          border: "1px solid rgb(235, 237, 240)"
        }}
        subTitle={values.role + " at " + values.company}
        tags={<Tag color="red">Inactive</Tag>}
        avatar={{
          src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"
        }}
      />

      <div style={{ padding: "30px" }}>
        <Row gutter={[18, 18]}>
          {defaultTasks.map((task,idx) => (
            <Col key={idx} span={6}>
              <Card
                title={
                  <span>
                    <Checkbox value={task} /> <a>{task.title}</a>
                  </span>
                }
                style={{ background: "#ECECEC" }}
                bordered={true}
              
              >
                {task.description}
                </Card>
            </Col>
          ))}
          <Col span={6}>
            <Card
              title={
                <span>
                  <PlusOutlined /> Add Task
                </span>
              }
              bordered={true}
              style={{ background: "#ECECEC" }}
              onClick={() => {
                setVisible(!visible);
              }}
              content={<a>Add Task</a>}
            />
          </Col>
        </Row>
      </div>
      <Modal
        visible={visible}
        title="Add Task"
        // onOk={handleOk}
        onCancel={() => {
          setVisible(false);
        }}
        footer={[
          <Button
            key="back"
            className="btn btn-dark"
            onClick={() => {
              setVisible(false);
            }}
          >
            Cancel
          </Button>,
          <Button key="submit" className="btn btn-primary" htmlType="submit">
            Submit
          </Button>
        ]}
      >
        <AddTask menu={menu}/>
      </Modal>
    </div>
  );
};

export default AddTaskForm;
