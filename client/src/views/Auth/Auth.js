import { Button } from "@mui/material";
import React, { useState } from "react";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      <h1>{isLogin ? <Login /> : <Register />}</h1>
      <Button
        onClick={() => {
          setIsLogin(!isLogin);
        }}
      >
        {isLogin ? "Move to regiester" : "Move to login"}
      </Button>
    </div>
  );
};

export default Auth;
