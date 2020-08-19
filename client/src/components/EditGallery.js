import React, { useState } from "react";

import { Button1 } from "./utils/buttons";
import { Input1, Input3 } from "./utils/inputs";

import "./style.css";

const EditGallery = () => {
  const [state, setState] = useState({
    image: [],
    caption: "",
    buttonText: "Submit",
  });

  const { image, caption, buttonText } = state;

  const handleChange = (name) => (e) => {
    setState({ ...state, [name]: e.target.value });
  };

  return (
    <div className="page edit-gallery">
      <h2>Edit Gallery</h2>
      <form className="form">
        <Input3 value={image} />
        <Input1
          type="text"
          placeholder="Enter caption..."
          onChange={handleChange("caption")}
          value={caption}
        />
        <Button1 buttonText={buttonText} />
      </form>
    </div>
  );
};

export default EditGallery;
