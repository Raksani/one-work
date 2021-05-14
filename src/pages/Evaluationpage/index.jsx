import React, { Component } from "react";
import { Card, Col, Row, Space, Button, Rate } from "antd";
import NavBar from "../../components/NavBar";
import "./styled.css";
import "./../../index.css";

export default class EvaluationPage extends Component {
  state = {
    rates: [],
  };

  handleChange = (id, newScore) => {
    console.log(
      "🚀 ~ file: index.jsx ~ line 13 ~ EvaluationPage ~ id",
      id,
      newScore
    );

    const index = this.state.rates.findIndex((x) => x.id === id);
    if (index === -1) {
      this.setState((prevState) => ({
        rates: [...prevState.rates, { score: newScore, id: id }],
      }));
    } else {
      this.setState({
        rates: [
          ...this.state.rates.slice(0, index),
          Object.assign({}, this.state.rates[index], {
            score: newScore,
            id: id,
          }),
          ...this.state.rates.slice(index + 1),
        ],
      });
    }
  };

  render() {
    const employees = [
      {
        id: 1,
        name: "Raksani Khunamas",
        position: "Software Engineer Intern",
      },
      {
        id: 2,
        name: "Thanakrit Daoruang",
        position: "Backend Developer",
      },
      {
        id: 3,
        name: "Narisa Mint",
        position: "Senior Frontend Developer",
      },
      {
        id: 4,
        name: "Narisa Mint",
        position: "Senior Frontend Developer",
      },
    ];

    console.log(this.state);
    return (
      <div className="blue-container">
        <NavBar />
        <div className="card-container">
          <Row gutter={[16, 16]}>
            {employees.map((employee, index) => (
              <Col span={8}>
                <Card className="card">
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <h2>#{employee.id}</h2>
                    <p>Employee Name: {employee.name}</p>
                    <p>Position: {employee.position}</p>
                    {
                     this.state.rates[0] && this.state.rates.map(rate => rate.id === employee.id ? <p>Score: {rate.score}</p>:<></>)
                    }

                    <Rate
                      allowHalf
                      onChange={this.handleChange.bind(this, employee.id)}
                    />
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
    );
  }
}
