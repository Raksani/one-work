import React from "react";
import "./styled.css";
import "./../../index.css";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';

const NavBar = () => {
  const [cookies, setCookies, removeCookie] = useCookies(["role","token"]);

  const handleClickSignout = () => {
    removeCookie("role",{ path: '/' });
    removeCookie("token",{ path: '/' });
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
