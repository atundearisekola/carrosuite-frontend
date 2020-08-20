import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Form } from "@ant-design/compatible";
import "@ant-design/compatible/assets/index.css";

import { Button, Input, message } from "antd";
import { LOGIN } from "../../../actions/types";
import { Link, withRouter } from "react-router-dom";
import UserForm from "../../layouts/AuthForm";

const Login = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) {
    props.history.push("/app/logistics/");
  }
  const { getFieldDecorator, getFieldsError } = props.form;

  const dispatch = useDispatch();

  const hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some((field) => fieldsError[field]);
  };

  const login = (e) => {
    e.preventDefault();

    // Validate Form
    props.form.validateFields(async (err, values) => {
      console.log("working");
      if (!err) {
        console.log(values);
        const data = {
          email: values.email,
          password: values.password,
        };
        // message.loading("Please Wait!")
        // DISPATCH LOGIN
        dispatch({ type: LOGIN, payload: data });
      }
    });
  };

  return (
    <UserForm
      body={
        <div className="form">
          <h1 className="large">Login</h1>
          <Form layout="horizontal" onSubmit={login}>
            {/*Form Items  */}
            <Form.Item>
              {getFieldDecorator("email", {
                rules: [
                  {
                    required: true,
                    message: "Please input your Email",
                  },
                ],
              })(
                <Input
                  placeholder="Email"
                  label="Email"
                  prefix={<MailOutlined className="icon" />}
                  name="email"
                />
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "Please input your Password",
                  },
                ],
              })(
                <Input.Password
                  prefix={<LockOutlined className="icon" />}
                  type="password"
                  placeholder="Password"
                  label="Password"
                  name="password"
                />
              )}
            </Form.Item>
            <p>
              <Link className="text-primary m1" to="/welcome/forgot">
                Forgot Password?
              </Link>
            </p>
            <Button
              htmlType="submit"
              id="submit"
              className="btn btn-primary "
              disabled={hasErrors(getFieldsError())}
              block
              //   loading
            >
              Login
            </Button>

            {/* End Of Form*/}
          </Form>
          <p className="my-1 lead text-greydark text-sm">
            Don't have an account?{" "}
            <Link className="text-primary" to="/register">
              Register
            </Link>
          </p>
        </div>
      }
    />
  );
};

const LoginForm = Form.create({ name: "loginform" })(Login);

export default withRouter(LoginForm);
