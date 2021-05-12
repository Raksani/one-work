import React from "react";

import { Card, Space, Input, Button, DatePicker } from "antd";
import moment from "moment";

import InputWithHeader from "./../../components/InputWithHeader";

import "./styled.css";
import "./../../index.css";

const RegisterPage = () => {
  const onChangeDate = (dateString) => {
    const birth = moment(dateString, "YYYY-MM-DD").fromNow().split(" ");
    console.log(birth[0] + birth[1]);
  };

  const disabledDate = (current) => {
    return current && current > moment().endOf("day");
  };

  return (
    <div className="regis-container">
      <Card className="card">
        <Space direction="vertical" style={{ width: "100%" }}>
          <h2>Register</h2>
          <div>
            <InputWithHeader
              header="Employee ID:"
              placeholder="Employee ID"
              icon
            />
            <h3>Password: </h3>
            <Input.Password
              className="margin-btm"
              placeholder="input password"
            />
            <InputWithHeader
              header="First Name:"
              placeholder="First Name"
              icon
            />
            <InputWithHeader header="Last Name:" placeholder="Last Name" icon />
            <h3>Birth date: </h3>
            <DatePicker disabledDate={disabledDate} onChange={onChangeDate} />
          </div>
          <div className="btn-regis">
            <Button type="primary">Register</Button>
          </div>
        </Space>
      </Card>
    </div>
  );
};

export default RegisterPage;
