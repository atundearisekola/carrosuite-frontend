import React, { useState, useEffect } from "react";
// import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, Select, Radio, DatePicker,Form  } from "antd";
import { useSelector } from "react-redux";

const { Option } = Select;

const StaffPersonalForm = props => {
  // const values = useSelector(state => state.staffs.newStaff);
  // const setValues = () => {
  //   props.setFieldsValue({ ...values }, () => {
  //     console.log(values);
  //   });
  // };

  // useEffect(() => {
  //   setValues();

  //   // eslint-disable-nextline
  // }, [values]);

  // // Set form Values If Exists

  const [radioValue, setRadioValue] = useState(null);



  const handleRadio = e => {
    setRadioValue(e.target.value);
  };

  const n = [...Array(300).keys()];

  const prefixSelector = (
  
    <Select style={{ width: 70 }} name="prefix" rules={[{initialValue: "234"}]}>
      {n.map(y => {
        return (
          <Option key={y + 1} value={`${y + 1}`}>
            +{y + 1}
          </Option>
        );
      })}
    </Select>
  );

  return (
    <div>
      <Form.Item label="First Name" name="first_name" rules={[
         {
           required: true,
          message: "Please input First Name!"
          }
      ]}>
        <Input />
      </Form.Item>
      <Form.Item label="Last Name" name='last_name' rules={[
         {
              required: true,
              message: "Please input Last Name!"
            }
      ]}>
        <Input />
      </Form.Item>
      <Form.Item label="E-mail" name="email" rules={[
         {
              required: true,
              message: "Please input Email!"
            },
            {
              type: "email",
              message: "The input is not valid E-mail!"
            }
      ]}>
        <Input />
      </Form.Item>

      <Form.Item label="Gender" hasFeedback name="sex" rules={[
         {
              required: true,
              message: "Please select a gender"
            }
      ]}>
          <Radio.Group onChange={handleRadio} value={radioValue}>
            <Radio value={"male"}>Male</Radio>
            <Radio value={"female"}>Female</Radio>
          </Radio.Group>
      </Form.Item>

      <Form.Item label="DOB" name='dob' rules={[
        { required: false, message: "Please input Data Of Birth!" }
      ]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Phone Number" name="phone_number" rules={[
        { required: true, message: 'Please input your phone number!' }
      ]}>
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>
      <Form.Item label="Nationality" name="nationality" rules={[
        {
              required: false,
              message: "Please input nationality"
            }
      ]}>
        <Input />
      </Form.Item>
      <Form.Item label="State Of Origin" name="state_of_origin" rules={[
        {
              required: false,
              message: "Please input state of origin"
            }
      ]}>
        <Input />
      </Form.Item>
      <Form.Item label="City" name="city" rules={[
        {
              required: false,
              message: "Please input city"
            }
      ]}>
        <Input />
      </Form.Item>
      <Form.Item label="Marital Status" name="marital_status" rules={[
         {
              required: false,
              message: "Please input marital status"
            }
      ]}>
        <Input />
      </Form.Item>

      <Form.Item label="Religion" name="religion" rules={[
         {
              required: false,
              message: "Please input Religion"
            }
      ]}>
       <Input />
      </Form.Item>
    </div>
  );
};

export default StaffPersonalForm;
