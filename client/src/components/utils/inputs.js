import React from "react";

import "./style.css";

export const Input1 = ({ type, placeholder, onChange, value }) => (
  <input
    className="input input1"
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  />
);

export const Input2 = ({ placeholder, onChange }) => (
  <textarea
    className="input input2"
    placeholder={placeholder}
    onChange={onChange}
  />
);

export const Input3 = ({ value }) => (
  <input className="input input3" type="file" value={value} />
);
