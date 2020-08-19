import React, { useState } from "react";
import axios from "axios";

import { Input1 } from "./utils/inputs";
import { Button1 } from "./utils/buttons";

const Signin = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    buttonText: "Submit",
  });

  const { email, password, buttonText } = state;

  const handleChange = (name) => (e) => {
    setState({ ...state, [name]: e.target.value });
  };

  const handleSubmit = (name) => (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: process.env.REACT_APP_API_URL,
      data: { email, password },
    });
  };

  return (
    <div className="page signin">
      <form className="form" onSubmit={handleSubmit}>
        <Input1
          type="text"
          placeholder="Enter email..."
          onChange={handleChange("email")}
          value={email}
        />
        <Input1
          type="password"
          placeholder="Enter password..."
          onChange={handleChange("password")}
          value={password}
        />
        <Button1 buttonText={buttonText} />
      </form>
    </div>
  );
};

export default Signin;
