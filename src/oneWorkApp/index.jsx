import React from "react";
import { Route, Switch } from "react-router-dom";

import SignInPage from "../pages/SignInPage";
import RegisterPage from "../pages/RegisterPage";
import EvaluationPage from "../pages/EvaluationPage";
import EvaluationTablePage from "../pages/EvaluationTablePage";

import { useCookies } from "react-cookie";

const OneWorkApp = () => {
  const [cookies, setCookies] = useCookies(["role"]);
  console.log(
    "🚀 ~ file: index.jsx ~ line 12 ~ OneWorkApp ~ cookies",
    cookies.role
  );

  return (
    <Switch>
      {cookies.role === undefined && (
        <Route path="/register">
          <RegisterPage />
        </Route>
      )}
      {cookies.role === undefined && (
        <Route path="/">
          <SignInPage setCookies={setCookies} />
        </Route>
      )}
      {cookies.role === "employee" && (
        <Route path="/evaluation">
          <EvaluationPage />
        </Route>
      )}
      {cookies.role === "boss" && (
        <Route path="/evaluation-table">
          <EvaluationTablePage />
        </Route>
      )}
    </Switch>
  );
};

export default OneWorkApp;
