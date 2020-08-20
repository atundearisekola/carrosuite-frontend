import React, { useState } from "react";
import '@ant-design/compatible/assets/index.css';
import { Form } from '@ant-design/compatible';
import { Input, Button } from "antd";
import TextAreaEditor from "../../../layouts/TextAreaEditor";
const AddDesignation = props => {
  const [value, setValue] = useState(
    <p>
      <p>do this</p>
      <p>do that</p>
      <p>do this</p>
      <p>do this</p>
      <p>do this</p>
    </p>
  );
  const {getFieldsValue } = props.form;
  const onChange = ({ target: { value } }) => {
    setValue({ value });
  };

  const addDesignation = () => {
    const data = getFieldsValue();
    console.log(data);
  };
  return (
    <Form onSubmit={addDesignation}>
      <div style={{}}>
        <Form.Item label="Title" name='title' rules={[
           {
              required: true,
              message: "Designation title cannot be empty"
            }
        ]}>
        <Input />
        </Form.Item>
        <Form.Item label="Description"  name="description" rules={[
           {
              required: false,
              message: ""
            }
        ]}>
          <TextAreaEditor value={value} onChange={onChange} />
        </Form.Item>
        <Button htmlType="submit" className="btn btn-primary">
          Add Designation
        </Button>
      </div>
    </Form>
  );
};

export default AddDesignation;
