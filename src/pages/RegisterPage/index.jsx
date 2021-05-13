import React, { useState } from "react";

import { Card, Space, Input, Button, DatePicker, Form } from "antd";
import moment from "moment";
import { PasswordInput } from "antd-password-input-strength";

import FormInput from "./../../components/FormInput";
import ValidatePassword from "./../../components/ValidatePassword";

import "./styled.css";
import "./../../index.css";

const RegisterPage = () => {
  const [result, setResult] = useState({});

  const disabledDate = (current) => {
    return current && current > moment().endOf("day");
  };

  const onFinish = (fieldsValue) => {
    const resultValues = {
      ...fieldsValue,
      date: fieldsValue["date"].format("DD-MM-YYYY"),
    };
    setResult(resultValues);
    console.log(resultValues);
  };

  return (
    <div className="blue-container">
      <Card className="card">
        <Space direction="vertical" style={{ width: "100%" }}>
          <Form onFinish={onFinish}>
            <h2>Register</h2>
            <div>
              <FormInput
                label="Employee ID"
                name="employeeID"
                message="Please input your Employee ID"
              >
                <Input autocomplete="off" placeholder="Employee ID" />
              </FormInput>
              <ValidatePassword
                label="Password"
                name="password"
                message="Please input your password"
              >
                <PasswordInput />
              </ValidatePassword>
              <FormInput
                label="First Name"
                name="firstName"
                message="Please input your first name"
              >
                <Input autocomplete="off" placeholder="First Name" />
              </FormInput>
              <FormInput
                label="Last Name"
                name="lasttName"
                message="Please input your last name"
              >
                <Input autocomplete="off" placeholder="Last Name" />
              </FormInput>
              <Form.Item
                label="Birth date:"
                name="date"
                rules={[
                  { required: true, message: "Please input your birth date" },
                ]}
              >
                <DatePicker format="DD-MM-YYYY" disabledDate={disabledDate} />
              </Form.Item>
            </div>
            <div className="btn-regis">
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </div>
          </Form>
        </Space>
      </Card>
    </div>
  );
};

export default RegisterPage;
