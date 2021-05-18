import React, { Component } from "react";
import { Card, Col, Row, Space, Button, Rate } from "antd";
import axios from "axios";
import { CheckCircleTwoTone } from "@ant-design/icons";

import NavBar from "../../components/NavBar";
import { API_URL } from "./../constants";
import "./styled.css";

export default class EvaluationPage extends Component {
  state = {
    rates: [],
    myScore: 0,
    profile: {
      fullName: "",
      evaluateTime: null,
    },
  };

  componentDidMount() {
    const headers = {
      headers: { Authorization: `Bearer ${this.props.cookiesToken}` },
    };

    let nameArray = [];
    let resultWithId = [];

    axios
      .get(`${API_URL}/evaluate/score/list`, headers)
      .then((res) => {
        this.setState({ myScore: res.data[0].score });
      })
      .catch((error) => {
        alert("Error");
      });

    axios
      .get(`${API_URL}/users/me`, headers)
      .then((res) => {
        this.setState({
          profile: {
            fullName: res.data.full_name,
            evaluateTime: res.data.evaluate_datetime,
          },
        });
      })
      .catch((error) => {
        alert("Error");
      });

    axios
      .get(`${API_URL}/evaluate/list`, headers)
      .then((res) => {
        nameArray = res.data;
        nameArray.map((name) => {
          return resultWithId.push({
            name: name.name,
            position: "Employee",
            identity_id: name.identity_id,
            score: 0,
          });
        });
        this.setState({ rates: resultWithId });
      })
      .catch((error) => {
        alert("Error");
      });
  }

  handleChange = (id, newScore) => {
    const index = this.state.rates.findIndex((x) => x.identity_id === id);
    this.setState({
      rates: [
        ...this.state.rates.slice(0, index),
        Object.assign({}, this.state.rates[index], {
          score: newScore,
          identity_id: id,
        }),
        ...this.state.rates.slice(index + 1),
      ],
    });
  };

  onClickSubmit = () => {
    const evaluated = this.state.rates.map((scoreValue) => {
      return {
        identity_id: scoreValue.identity_id,
        score: scoreValue.score,
      };
    });
    const evaluatedList = { evaluate_list: evaluated };

    axios
      .post(`${API_URL}/send/evaluate/score`, evaluatedList, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.props.cookiesToken}`,
        },
      })
      .then((res) => {
        res && alert("Evaluation success!");
        this.setState(state => (state.profile.evaluateTime = 'hasUpdated', state))
      })
      .catch((error) => {
        alert("Error");
      });
  };

  render() {
    return (
      <div className="container">
        <NavBar />
        <Space direction="vertical" style={{ marginLeft: "43%" }}>
          <h2>Name: {this.state.profile.fullName}</h2>
          <h2>Your Current Score: {this.state.myScore}</h2>
        </Space>
        {this.state.profile.evaluateTime === null ? (
          <div>
            <div className="card-container">
              <Row gutter={[16, 16]}>
                {this.state.rates.map((employee, index) => (
                  <Col span={8}>
                    <Card className="card">
                      <Space direction="vertical" style={{ width: "100%" }}>
                        <h2>#{index + 1}</h2>
                        <p>Employee Name: {employee.name}</p>
                        <p>Position: {employee.position}</p>
                        <p>Score: {employee.score}</p>
                        <Rate
                          allowHalf
                          onChange={this.handleChange.bind(
                            this,
                            employee.identity_id
                          )}
                        />
                      </Space>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
            <div className="btn-submit">
              <Button
                onClick={this.onClickSubmit}
                style={{ margin: "0px 40px 60px 40px" }}
                type="primary"
                block
              >
                Submit
              </Button>
            </div>
          </div>
        ) : (
          <Space direction="vertical" style={{ alignItems: 'center', width: '100%', margin: '130px 0' }}>
            <CheckCircleTwoTone style={{ fontSize: '200px' }}/>
            <h1>Already submit the evaluation</h1>
          </Space>
        )}
      </div>
    );
  }
}
