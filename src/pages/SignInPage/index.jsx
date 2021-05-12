import React from "react";
import { Card, Space, Input, Button, Form } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

import FormInput from "./../../components/FormInput";

import "./../../index.css";
import "./styled.css";

const SignInPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className="regis-container">
      <Card className="card">
        <Space direction="vertical" style={{ width: "100%" }}>
          <Form onFinish={onFinish}>
            <h2>Sign In</h2>
            <FormInput
              label="Username"
              name="username"
              message="Please input your username"
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
                <Button type="primary" htmlType="submit">
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
