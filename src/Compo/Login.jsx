import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "./Context";
import "../Styles/Login.css";

const Login = () => {
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");
  const [error, seterror] = useState(false);

  const { setlogged } = useContext(MyContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "User123" && pass === "Pass123") {
      setlogged(true);
    } else {
      seterror(true);
      setTimeout(() => {
        seterror(false);
      }, 2000);
    }
  }
  return (
    <div className="login">
      <div className="logpar">
        <h4>Please log in to your account</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your username"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
          />
          <input
            type="password"
            value={pass}
            onChange={(e) => setpass(e.target.value)}
            placeholder="Enter your password"
            minLength={5}
            maxLength={10}
            required
          />
          <button type="submit"> Login </button>
        </form>
        {error && (
          <div className="error">
            <h6>Please Check Username and Password</h6>
            <h6>Username is User123 and Password is Pass123</h6>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
