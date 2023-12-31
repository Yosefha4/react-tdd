import React from "react";

const LoginForm = () => {
  return (
    <form>
      <h2>LoginForm</h2>

      <div className="inputItem">
        <label htmlFor="username">Username:</label>
        <input id="username" />
      </div>
      <div className="inputItem">

      <label htmlFor="password">Password:</label>
      <input id="password" />
      </div>

      <button className="btn" type="submit">submit</button>
    </form>
  );
};

export default LoginForm;
