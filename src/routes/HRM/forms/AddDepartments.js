import React from "react";
import "@ant-design/compatible/assets/index.css";
import { Form } from "@ant-design/compatible";
import { Input, Button } from "antd";
import TextAreaEditor from "../../../components/layouts/TextAreaEditor";
const AddDepartment = (props) => {
  const { TextArea } = Input;
  return (
    <Form onSubmit={props.handleSubmit()}>
      <div style={{}}>
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Designation title cannot be empty",
            },
          ]}
        >
          <Input
            value={props.state.title}
            name="title"
            onChange={props.handleInput("title")}
          />
        </Form.Item>
        <Form.Item
          label="About"
          name="about"
          rules={[
            {
              required: false,
              message: "Designation title cannot be empty",
            },
          ]}
        >
          <Input
            value={props.state.about}
            name="about"
            onChange={props.handleInput("about")}
          />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: false,
              message: "",
            },
          ]}
        >
          <TextArea
            value={props.state.description}
            name="description"
            onChange={props.handleInput("description")}
          />
        </Form.Item>

        <Button
          htmlType="submit"
          className="btn btn-primary"
          onClick={() => props.handleSubmit()}
        >
          Add Department
        </Button>
      </div>
    </Form>
  );
};

export default AddDepartment;
