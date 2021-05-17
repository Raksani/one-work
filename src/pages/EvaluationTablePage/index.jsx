import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { useCookies } from "react-cookie";
import axios from 'axios'

import Navbar from "./../../components/NavBar";
import './../../index.css'
import { API_URL } from "./../constants";

const EvaluationTablePage = () => {
  const [cookies] = useCookies(["role","token"]);
  const [evaluateScore,setEvaluateScore] = useState()
  const token = cookies.token
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <h4>{text}</h4>
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position'
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score'
    }
  ]

  useEffect(() => {
    axios.get(`${API_URL}/evaluate/score/list`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization" : `Bearer ${token}`
          },
        }
      )
      .then((res) => {
        console.log(res.data)
        setEvaluateScore(res.data)
      })
      .catch((error) => {
          alert('Error')
      });
  }, [token, setEvaluateScore])

  return (
    <div>
      <Navbar />
      <div className="blue-bg">
        <Table style={{padding: '40px'}} columns={columns} dataSource={evaluateScore} />
      </div>
    </div>
  );
};

export default EvaluationTablePage;
