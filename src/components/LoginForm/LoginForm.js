import React, { useState } from "react";

const LoginForm = ({ submitFn }) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleCahnge = (event) => {
    setValues({
      ...values,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitFn(values);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>LoginForm</h2>

      <div className="inputItem">
        <label htmlFor="username">Username:</label>
        <input id="username" onChange={handleCahnge}  value={values.username}/>
      </div>
      <div className="inputItem">
        <label htmlFor="password">Password:</label>
        <input id="password" onChange={handleCahnge} value={values.password} />
      </div>

      <button className="btn" type="submit">
        submit
      </button>
    </form>
  );
};

export default LoginForm;
