import React, { useState } from "react";

import { Fade } from "react-reveal";

import Headshot1 from "../media/headshots/headshot1.jpg";
import Headshot2 from "../media/headshots/headshot2.jpg";
import Headshot3 from "../media/headshots/headshot3.jpg";

const Headshots = () => {
  const [showHeadshots, toggleHeadshots] = useState(false);
  const [headshotIndex, setIndex] = useState(0);

  const headshotArray = [Headshot1, Headshot2, Headshot3];

  const getPrev = () => {
    if (headshotIndex === 0) {
      setIndex(headshotArray.length - 1);
    } else {
      setIndex(headshotIndex - 1);
    }
  };

  const getNext = () => {
    if (headshotIndex === headshotArray.length - 1) {
      setIndex(0);
    } else {
      setIndex(headshotIndex + 1);
    }
  };

  return (
    <div className="headshots">
      <div
        className="headshot"
        onClick={() => {
          toggleHeadshots(true);
        }}
      >
        <img className="primary" src={Headshot1}></img>
      </div>
      {showHeadshots && (
        <Fade duration={700}>
          <div className="headshot-gallery">
            <i
              className="fas fa-chevron-left prev-headshot"
              onClick={getPrev}
            ></i>
            <img
              className="gallery-headshot"
              src={headshotArray[headshotIndex]}
              alt=""
            />
            <i
              className="fas fa-chevron-right next-headshot"
              onClick={getNext}
            ></i>
            <div
              className="close-gallery"
              onClick={() => toggleHeadshots(false)}
            >
              CLOSE GALLERY
            </div>
          </div>
        </Fade>
      )}
    </div>
  );
};

export default Headshots;
