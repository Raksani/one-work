import React from 'react'
import { Table } from 'antd'
import Navbar from "./../../components/NavBar";
import './../../index.css'

const EvaluationTablePage = () => {
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

  const data = [
    {
      key: '1',
      name: 'John Brown',
      position: 'Software Developer',
      score: 4.5
    },
    {
      key: '2',
      name: 'Jim Green',
      position: 'Junior Software Developer',
      score: 5.0
    },
    {
      key: '3',
      name: 'Joe Black',
      position: 'Senior Software Developer',
      score: 3.25
    }
  ]

  return (
    <div>
      <Navbar />
      <div className="blue-container">
        <Table style={{paddingTop: '40px'}} columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default EvaluationTablePage;
