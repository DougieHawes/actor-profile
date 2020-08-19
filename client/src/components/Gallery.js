import React from "react";

import { Link } from "react-router-dom";

import "./style.css";

const Gallery = () => {
  return (
    <div className="page gallery">
      <h2 className="page-title">Gallery</h2>
      <Link to="/edit-gallery">New image</Link>
    </div>
  );
};

export default Gallery;
