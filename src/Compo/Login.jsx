import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "./Context";

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
    <div>
      <h1>I am Login form</h1>
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
        <div>
          {" "}
          <h1>Please Check Username and Password</h1>
        </div>
      )}
    </div>
  );
};

export default Login;
