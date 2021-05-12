import React, { Component } from 'react'
import { Card, Space, Button, Rate } from 'antd'
import NavBar from '../../components/NavBar'
import './styled.css'
import './../../index.css'

export default class EvaluationPage extends Component {
  state = {
    id: 1,
    name: 'Raksani Khunamas',
    position: 'Software Engineering Intern',
    score: 0
  }

  handleChange = (newScore) => {
    this.setState({ score: newScore })
  }

  render() {
    return (
      <div className="blue-container">
        <NavBar />
        <Card className="card">
          <Space direction="vertical" style={{ width: '100%' }}>
            <h2>#{this.state.id}</h2>
            <p>Employee Name: {this.state.name}</p>
            <p>Position: {this.state.position}</p>
            <p>Score: {this.state.score}</p>
            <Rate allowHalf onChange={this.handleChange} />
            <div className="btn-submit">
              <Button type="primary" block>
                Submit
              </Button>
            </div>
          </Space>
        </Card>
      </div>
    )
  }
}
