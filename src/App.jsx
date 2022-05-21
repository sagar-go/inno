import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { MyContext } from "./Compo/Context";
import Login from "./Compo/Login";
import Main from "./Compo/Main";

const App = () => {
  const { logged } = useContext(MyContext);

  return <>{logged ? <Main /> : <Login />}</>;
};

export default App;
