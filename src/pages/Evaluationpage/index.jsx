import React, { Component } from 'react'
import { Card, Col, Row, Space, Button, Rate } from 'antd'
import NavBar from '../../components/NavBar'
import './styled.css'
import './../../index.css'

export default class EvaluationPage extends Component {
  state = {
    score: 0
  }

  handleChange = (newScore) => {
    this.setState({ score: newScore })
  }

  render() {
    const employees = [
      {
        id: 1,
        name: 'Raksani Khunamas',
        position: 'Software Engineer Intern'
      },
      {
        id: 2,
        name: 'Thanakrit Daoruang',
        position: 'Backend Developer'
      },
      {
        id: 3,
        name: 'Narisa Mint',
        position: 'Senior Frontend Developer'
      },
      {
        id: 4,
        name: 'Narisa Mint',
        position: 'Senior Frontend Developer'
      }
    ]
    return (
      <div className="blue-container">
        <NavBar />
        <div className="card-container">
          <Row gutter={[16, 16]}>
            {employees.map((employee) => (
              <Col span={8}>
                <Card className="card">
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <h2>#{employee.id}</h2>
                    <p>Employee Name: {employee.name}</p>
                    <p>Position: {employee.position}</p>
                    <p>Score: {this.state.score}</p>
                    <Rate allowHalf onChange={this.handleChange} />
                    <div className="btn-submit">
                      <Button type="primary" block>
                        Submit
                      </Button>
                    </div>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    )
  }
}
