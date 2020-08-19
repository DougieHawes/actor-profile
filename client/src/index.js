import React from "react";

import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Headshots from "./components/Headshots";
import Links from "./components/Links";

import Signin from "./components/Signin";

import Profile from "./components/Profile";
import Showreel from "./components/Showreel";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

import EditProfile from "./components/EditProfile";
import EditGallery from "./components/EditGallery";
import EditBlog from "./components/EditBlog";

import "./style.css";

const App = () => (
  <div className="app">
    <div className="jumbotron"></div>
    <Headshots />
    <div className="body">
      <div className="title-box">
        <h1 className="name">Joshua Broadstone</h1>
      </div>
      <div className="route-box">
        <Route exact path="/" component={Profile} />

        <Route exact path="/showreel" component={Showreel} />
        <Route exact path="/secret-entrance" component={Signin} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/edit-profile" component={EditProfile} />
        <Route exact path="/edit-gallery" component={EditGallery} />
        <Route exact path="/edit-Blog" component={EditBlog} />
      </div>
      <Links />
    </div>
  </div>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
