import React,{useState} from 'react'
import '@ant-design/compatible/assets/index.css';
// import { Form } from '@ant-design/compatible';
import { Radio, Input, Dropdown, Cascader,Form  } from 'antd';
import {DownOutlined} from  '@ant-design/icons'
const AddTask = (props) => {
  const handleRadio = e => {
    setRadioValue(e.target.value);
  };
  const {menu } = props;


const [radioValue, setRadioValue] = useState(null);
  return (
    <div>
       <Form.Item label="Task" name='task' rules={[
          {
              required: true,
              message: "Please input Task Name!"
            }
       ]}>
        <Input />
      </Form.Item>
      <Form.Item label="Description" name='description' rule={[
        {
          required: false,
          message: "Please input description!"
         }
      ]}>
        <Input.TextArea autoSize={{ minRows: 2, maxRows: 6 }}/>
      </Form.Item>
 

      <Form.Item label="Notify" name="notify" rules={[
        {
          required: false
        }
      ]}>
        <Radio.Group onChange={handleRadio} value={radioValue}>
          <Radio value={"admin"}>Admin</Radio>
          <Radio value={"employee"}>Employee</Radio>
          <Radio value={"email"}>Email</Radio>
        </Radio.Group>
        
      </Form.Item>
        {radioValue === 'employee' 
        && <Form.Item label="Employment Type" name='employment' rules={[
          {
              required: false,
              message: "Please select an Industry"
            }
        ]}>
            <Cascader
            placeholder={`Enter Employee Name`}
          />
        )}
        </Form.Item> }
      {radioValue === 'email'
      && <div> <Form.Item label="Name" name="name" rules={[
        {
          required: true,
          message: "Please input Name!"
        }
      ]}>
       <Input />
      </Form.Item>
      <Form.Item label="E-mail" name="e-mail" rules={[
        {
          required: false,
          message: "Please input Email!"
        },
        {
          type: "email",
          message: "The input is not valid E-mail!"
        }
      ]}>
       <Input />
      </Form.Item>
           
      </div>}
      
      <Form.Item label="When to Alert" name='whenToAlert' rules={[
        {
          required: true,
          message: "Please input when To Alert!"
          }
      ]}>
        <Input type='number' />{" "}days{" "}
          <Dropdown overlay={menu}>
            <a  href="#">
              before Start Date <DownOutlined />
            </a>
            </Dropdown>)}
      </Form.Item>
    </div>
  )
}

export default AddTask
