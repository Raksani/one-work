import React, { useState, useCallback } from "react";

import { Card, Select, Button, Input, Space } from "antd";
import "./../../index.css";
import { API_URL } from "./../constants";
import axios from "axios";
import qs from "qs";
import { useCookies } from "react-cookie";
import NavBar from './../../components/NavBar'

const GenerateIdPage = () => {
    const [cookies, setCookies] = useCookies(["role","token"]);
  const [role, setRole] = useState("employee");
  const [adminId, setAdminID] = useState('');
  const [generateID, setGenerateID] = useState('')
  const { Option } = Select;
  const token = cookies.token;

  const handleChange = (value) => {
    setRole(value);
  };

  const handleClick = useCallback(() => {
      const body = {
        admin_password: adminId,
        user_role: role
      }
    axios
      .post(
        `${API_URL}/generate/new/user`,qs.stringify(body),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization" : `Bearer ${token}`
          },
        }
      )
      .then((res) => {
          alert('Generate success!')
          setGenerateID(res.data.identity_id)
      })
      .catch((error) => {
          alert('Incorrect password')
      });
  }, [adminId,role, token]);

  const handleChangePassword = (e) => {
    setAdminID(e.target.value)
  }

  return (
    <div className="blue-container">
        <NavBar/>
      <Card className="card">
        <Space direction="vertical" style={{ width: "100%" }}>
          <h1>Generate ID</h1>
          <Select
            defaultValue="employee"
            style={{ width: "100%" }}
            onChange={handleChange}
          >
            <Option value="employee">Employee</Option>
            <Option value="boss">Boss</Option>
          </Select>
          <Input.Password onChange={handleChangePassword} placeholder="input admin password" />
          <Button onClick={handleClick} type="primary">Generate ID</Button>
        </Space>
        <h2>ID: {generateID}</h2>
      </Card>
    </div>
  );
};

export default GenerateIdPage;
