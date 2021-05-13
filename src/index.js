import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SignInPage from "./pages/SignInPage";
import RegisterPage from './pages/RegisterPage';
import EvaluationPage from './pages/EvaluationPage';
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
    <Route path="/evaluation">
        <EvaluationPage/>
      </Route>
      <Route path="/register">
        <RegisterPage/>
      </Route>
      <Route path="/">
        <SignInPage />
      </Route>
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
