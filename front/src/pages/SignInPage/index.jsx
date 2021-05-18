import React from "react";
import { Card, Space, Input, Button, Form } from "antd";
import { Link, useHistory } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";
import qs from 'qs'

import FormInput from "./../../components/FormInput";
import {API_URL} from './../constants'

import "./../../index.css";
import "./styled.css";

const SignInPage = ({ setCookies }) => {
  const history = useHistory();

  const onFinish = (values) => {
    axios
      .post(`${API_URL}/token`, qs.stringify(values), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        alert('Sign in success!')
        setCookies("token", res.data.access_token, { path: "/" });
        if (values.username[0] === "B") {
          setCookies("role", "boss", { path: "/" });
          history.push("/evaluation-table");
        } else if (values.username[0] === "E") {
          setCookies("role", "employee", { path: "/" });
          history.push("/evaluation");
        } else if(values.username[0] === "A"){
          setCookies("role", "admin", { path: "/" });
          history.push("/admin");
        }
      })
      .catch((error) => {
        alert("Incorrect employee ID");
      });
  };

  return (
    <div className="blue-container">
      <Card className="card">
        <Space direction="vertical" style={{ width: "100%" }}>
          <Form onFinish={onFinish}>
            <h2>Sign In</h2>
            <FormInput
              label="Employee ID"
              name="username"
              message="Please input your Employee ID"
            >
              <Input
                autoComplete="off"
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
