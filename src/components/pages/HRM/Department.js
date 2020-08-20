import React, { useState } from "react";
import { UserOutlined } from '@ant-design/icons';
import { Col, Row, Button, Card, Modal } from "antd";
import AddDepartments from "./forms/AddDepartments";

const Departments = () => {
  const defaultDept = [
    { title: "Sales", key: "sales", members: 50 },
    { title: "HR", key: "hr", members: 21 },
    { title: "Marketing", key: "marketing", members: 20 },
    { title: "IT", key: "it", members: 5 }
  ];
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(!show);
  };
  return (
    <div style={{ width: "100%" }}>
      <Modal
        visible={show}
        title="Add Department"
        // onOk={showModal}
        onCancel={showModal}
      >
        <AddDepartments />
      </Modal>
      <Button className="btn btn-dark m-b-30" onClick={showModal}>
        Add Department
      </Button>
      <Row gutter={[16, 16]}>
        {defaultDept.map(dept => (
          <Col span={6} key={defaultDept.key}>
            <Card
              title={<span className="lead text-gray">{dept.title}</span>}
              className="bg-light"
              key={dept.key}
            >
              <Button icon={<UserOutlined />} className="btn btn-primary">
                {dept.members} Members
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Departments;
