import React, { useState } from "react";

import { Button1 } from "./utils/buttons";
import { Input1, Input2, Input3 } from "./utils/inputs";

import "./style.css";

const EditBlog = () => {
  const [state, setState] = useState({
    title: "",
    image: [],
    text: "",
    buttonText: "Submit",
  });

  const { title, image, text, buttonText } = state;

  const handleChange = (name) => (e) => {
    setState({ ...state, [name]: e.target.value });
  };

  return (
    <div className="page edit-Blog">
      <h2 className="page-title">New Post</h2>
      <form className="form">
        <Input1
          type="text"
          placeholder="Enter title..."
          onChange={handleChange("title")}
          value={title}
        />
        <Input3 value={image} />
        <Input2
          placeholder="Enter text..."
          onChange={handleChange("text")}
          value={text}
        />
        <Button1 buttonText={buttonText} />
      </form>
    </div>
  );
};

export default EditBlog;
