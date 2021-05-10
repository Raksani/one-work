import React from "react";
import { Card, Space, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import "./../../index.css";
import "./styled.css";

const SignInPage = () => {
  return (
    <div className="regis-container">
      <Card className="card">
        <Space direction="vertical" style={{ width: "100%" }}>
          <h2>Sign In</h2>
          <Input
            size="large"
            placeholder="Employee ID"
            prefix={<UserOutlined />}
          />
          <Input.Password size="large" placeholder="password" />
          <Link to='/register' className="link-to-sign-up">Register</Link>
          <div className="btn-signin">
            <Button type="primary">
              Sign In
            </Button>
          </div>
        </Space>
      </Card>
    </div>
  );
};

export default SignInPage;
