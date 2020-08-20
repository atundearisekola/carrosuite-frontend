import React, { useState } from "react";
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import {
Input,
Select, 
Button, 
Radio, 
DatePicker, 
Cascader,
Steps
} from "antd";
const { Option } = Select;
const Employment = props => {
  const { getFieldDecorator } = props;

  const employmentType = [
    {
      label: "Full-Time",
      value: "Full-Time"
    },
    {
      label: "Part-Time",
      value: "Part-Time"
    },
    {
      label: "Casual Worker",
      value: "Casual Worker"
    },
    {
      label: "Contract",
      value: "Contract"
    },
    {
      label: "Commission",
      value: "Commission"
    }
  ];
  return (
    <div>
      <Form.Item label="Department" hasFeedback>
        {getFieldDecorator("department", {
          rules: [
            {
              required: false,
              message: "Please input Department!"
            }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Division" hasFeedback>
        {getFieldDecorator("division", {
          rules: [
            {
              required: false,
              message: "Please input Division!"
            }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Role" hasFeedback>
        {getFieldDecorator("role", {
          rules: [
            {
              required: true,
              message: "Input Role For New Staff"
            }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Reports To">
        {getFieldDecorator("reportsto", {
          rules: [
            {
              required: false
            }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Employment Type">
        {getFieldDecorator("employmentType", {
          rules: [
            {
              required: false,
              message: "Please select an Industry"
            }
          ]
        })(
          <Cascader
            className="form-item"
            options={employmentType}
            placeholder={`Select Employment Type`}
          />
        )}
      </Form.Item>
      <Form.Item label="Start Date" hasFeedback>
        {getFieldDecorator("startDate", {
          rules: [
            { required: false, message: "Please input Employee Start Date!" }
          ]
        })(<DatePicker />)}
      </Form.Item>
      <Form.Item label="NIN">
        {getFieldDecorator("nin", {
          rules: [
            {
              required: false
            }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Location">
        {getFieldDecorator("location", {
          rules: [
            {
              required: false,
              message: "Please input Location"
            }
          ]
        })(<Input />)}
      </Form.Item>
    </div>
  );
};

const EffectiveDate = props => {
  const { getFieldDecorator} = props;
  const handleRadio = e => {
    setRadioValue(e.target.value);
  };

  const [radioValue, setRadioValue] = useState(null);

  return (
    <div>
      {/* <span className="lead"> What Kind Of Change Are You Making ?</span> */}
      <Form.Item label="What Kind Of Change Are You Making ?">
        {getFieldDecorator("title", {
          rules: [
            {
              required: false,
              message: ""
            }
          ]
        })(
          <Radio.Group
            onChange={handleRadio}
            value={radioValue}
            syle={{ display: "flex", flexFlow: "column" }}
          >
            <Radio value={"employee"}>An Immediate Change</Radio>
            <Radio value={"hasHappened"}>
              <span>A change that already happened</span>
            </Radio>
            {radioValue === "hasHappened" && (
              <Form.Item>
                {getFieldDecorator("dateEffective", {
                  rules: [
                    {
                      required: false,
                      message: ""
                    }
                  ]
                })(<DatePicker className="" placeholder="Set Date" />)}
              </Form.Item>
            )}
            <Radio value={"schduledChange"}>A scheduled Change</Radio>
            {radioValue === "schduledChange" && (
              <Form.Item>
                {getFieldDecorator("dateEffective", {
                  rules: [
                    {
                      required: false,
                      message: ""
                    }
                  ]
                })(<DatePicker className="" placeholder="Set Date" />)}
              </Form.Item>
            )}
          </Radio.Group>
        )}
      </Form.Item>
    </div>
  );
};

const WhoToNotify = props => {
  const { getFieldDecorator } = props;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const children = [
    "Isaiah Osei",
    "Wale Samuel",
    "Isaiah Osei Mensah",
    "IsaiahMensah"
  ];
  return (
    <div>
      <Form.Item label="Notify" hasFeedBack>
        {getFieldDecorator("notify", {
          rules: [
            {
              required: true,
              message: "Please input who to notify"
            }
          ]
        })(
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select staff to notify"
            onChange={handleChange}
          >
            {children.map((child, index) => (
              <Option key={index}> {child}</Option>
            ))}
          </Select>
        )}
      </Form.Item>
      <Form.Item label="Message" hasFeedBack>
        {getFieldDecorator("message", {
          rules: [
            {
              required: false,
              message: ""
            }
          ]
        })(
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select staff to notify"
            onChange={handleChange}
          >
            {[
              "Isaiah Osei",
              "Wale Samuel",
              "Isaiah Osei Mensah",
              "IsaiahMensah"
            ]}
          </Select>
        )}
      </Form.Item>
    </div>
  );
};
const SaveChanges = props => {
  const [current, setCurrent] = useState(0);
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
  const { Step } = Steps;
  const steps = [
    {
      title: "Details",
      content: <EffectiveDate {...props.form} />
    },
    // {
    //   title: "Main Changes",
    //   content: <Employment {...props.form} />
    // },
    {
      title: "Who To Notify",
      content: <WhoToNotify {...props.form} />
    }
  ];
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
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   props.form.validateFieldsAndScroll((err, values) => {
  //     if (!err) {
  //       // dispatch({
  //       //   type: SAVE_STAFF,
  //       //   payload: values
  //       // });
  //       next();
  //     }
  //   });
  // };
  return (
    <div className="steps-content">
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <Form
        onSubmit={() => {
          console.log("submitted");
        }}
        {...formItemLayout}
      >
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
                onClick={() => {
                  next();
                }}
                style={{ marginLeft: 8 }}
              >
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button style={{ marginLeft: 8 }} className="btn btn-primary">
                Done
              </Button>
            )}
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

// const ChangesForm = Form.create({ name: "changesform" })(SaveChanges);

export default SaveChanges;
