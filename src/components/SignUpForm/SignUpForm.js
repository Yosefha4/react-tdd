import React, { useState } from "react";

const SignUpForm = ({ submitFn }) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleCahnge = (event) => {
    setValues({
      ...values,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    submitFn(values);
  }
  return <form onSubmit={handleSubmit}>
    <h2>SignUp</h2>
    <div className="inputItem">
        <label htmlFor="username">Username:</label>
        <input id="username" onChange={handleCahnge} value={values.username} />
    </div>
    <div className="inputItem">
        <label htmlFor="email">Email:</label>
        <input id="email" onChange={handleCahnge} value={values.email} />
    </div>
    <div className="inputItem">
        <label htmlFor="password">Password:</label>
        <input id="password" onChange={handleCahnge} value={values.password} />
    </div>

    <button className="btn" type="submit">
        submit
      </button>

  </form>;
};

export default SignUpForm;
