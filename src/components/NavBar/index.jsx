import React from "react";
import "./styled.css";
import "./../../index.css";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const NavBar = () => {
  const [cookies, setCookies, removeCookie] = useCookies(["role"]);

  const handleClickSignout = () => {
    removeCookie("role");
  };

  return (
    <div className="header">
      <div className="text">Evaluation</div>
      <Link to="/" className="signout" onClick={handleClickSignout}>
        Sign out
      </Link>
    </div>
  );
};

export default NavBar;
