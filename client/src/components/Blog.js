import React from "react";

import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="page blog">
      <h2 className="page-title">Blog</h2>
      <Link to="/edit-blog">New post</Link>
    </div>
  );
};

export default Blog;
