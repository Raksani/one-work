import React, { useState } from "react";
import { Card, Space, Input, Button, Form } from "antd";
import { Link, useHistory } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

import FormInput from "./../../components/FormInput";

import "./../../index.css";
import "./styled.css";

const SignInPage = ({setCookies}) => {
  const history = useHistory()
  const [loginValue, setLoginValue] = useState({})

  const onFinish = (values) => {
    setLoginValue(values)
    console.log("Success:", values);
  };

  const onSubmit = () => {
    setCookies('role', 'employee', { path: '/' })
    history.push('/evaluation')
  }

  return (
    <div className="blue-container">
      <Card className="card">
        <Space direction="vertical" style={{ width: "100%" }}>
          <Form onFinish={onFinish}>
            <h2>Sign In</h2>
            <FormInput
              label="Employee ID"
              name="employeeID"
              message="Please input your Employee ID"
            >
              <Input
                autocomplete="off"
                size="large"
                placeholder="Employee ID"
                prefix={<UserOutlined />}
              />
            </FormInput>
            <FormInput
              label="Password"
              name="password"
              message="Please input your password"
            >
              <Input.Password size="large" placeholder="password" />
            </FormInput>
            <Link to="/register" className="link-to-sign-up">
              Register
            </Link>
            <Form.Item>
              <div className="btn-signin">
                <Button onClick={onSubmit} type="primary" htmlType="submit">
                  Sign In
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Space>
      </Card>
    </div>
  );
};

export default SignInPage;
