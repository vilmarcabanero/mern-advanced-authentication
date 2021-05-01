import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LoginScreen.css";

const LoginScreen = ({ history }) => {

  return (
    <div className="home-screen">
      <h1>Home screen</h1>
      <Link to='/login'>Click here to log in</Link>
    </div>
  );
};

export default LoginScreen;
