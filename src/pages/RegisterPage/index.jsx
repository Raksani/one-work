import React, { useCallback } from "react";

import { Card, Space, Input, Button, DatePicker, Form } from "antd";
import moment from "moment";
import { PasswordInput } from "antd-password-input-strength";
import axios from "axios";
import { useHistory } from "react-router-dom";
import qs from 'qs'

import FormInput from "./../../components/FormInput";
import ValidatePassword from "./../../components/ValidatePassword";
import { API_URL } from './../constants'

import "./styled.css";
import "./../../index.css";

const RegisterPage = () => {
  const history = useHistory()
  
  const disabledDate = (current) => {
    return current && current > moment().endOf("day");
  };

  const onFinish = useCallback((fieldsValue) => {
    const resultValues = {
      identity_id: fieldsValue.employeeID,
      password: fieldsValue.password,
      full_name: `${fieldsValue["firstName"]} ${fieldsValue["lasttName"]}`,
      birth_date: fieldsValue["date"].format("DD-MM-YYYY"),
    };

    axios.post(`${API_URL}/register`, qs.stringify(resultValues), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        res && alert('Registeration success!')
        history.push('/')
      })
      .catch(error => {
        alert('Incorrect employee ID')
    });
  }, [history]);

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
                <Input autoComplete="off" placeholder="Employee ID" />
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
                <Input autoComplete="off" placeholder="First Name" />
              </FormInput>
              <FormInput
                label="Last Name"
                name="lasttName"
                message="Please input your last name"
              >
                <Input autoComplete="off" placeholder="Last Name" />
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
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Space>
      </Card>
    </div>
  );
};

export default RegisterPage;
