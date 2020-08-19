import React from "react";

import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Links = () => (
  <div className="links">
    <ul className="local-links">
      <li>
        <Link className="local-link" to="/">
          Profile
        </Link>
      </li>
      <li>
        <ScrollLink to="showreel" smooth={true} duration={700}>
          <Link className="local-link" to="/showreel">
            Showreel
          </Link>
        </ScrollLink>
      </li>
      <li>
        <Link className="local-link" to="/gallery">
          Gallery
        </Link>
      </li>
      <li>
        <Link className="local-link" to="/blog">
          Blog
        </Link>
      </li>
      <li>
        <Link className="local-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
    <p className="dougie-link">
      Actor Profile designed and hosted by{" "}
      <a className="link" href="http://www.dougiehawes.com" target="blank">
        Dougie Hawes Web Development
      </a>
    </p>
  </div>
);

export default Links;
