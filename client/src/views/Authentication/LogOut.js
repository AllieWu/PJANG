import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Header from "./../../components/Header/Header.js";

const LogOut = (props) => {
  useEffect(() => {
    props.onLogOut();
  }, []);

  return <Redirect to="/login" />;
};

export default LogOut;
