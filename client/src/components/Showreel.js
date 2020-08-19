import React, { useState } from "react";

import { Element } from "react-scroll";

import "./style.css";

const Showreel = () => {
  const [state, setState] = useState({
    time: "00:00",
  });
  const [sidebar, showSidebar] = useState(false);
  const [playing, togglePlaying] = useState(false);

  const { time } = state;

  return (
    <div className="page showreel" id="showreel">
      <Element name="showreel" />
      <h2 className="page-title">Showreel</h2>
      <div className="showreel-container">
        <h4 className="current-title">*current title*</h4>
        <div className="video-container"></div>
        <div className="playbar">
          <div className="controls">
            <div className="prev">
              <i className="fas fa-fast-backward"></i>
            </div>
            <div className="play">
              {playing ? (
                <i
                  className="fas fa-pause"
                  onClick={() => togglePlaying(false)}
                ></i>
              ) : (
                <i
                  className="fas fa-play"
                  onClick={() => togglePlaying(true)}
                ></i>
              )}
            </div>
            <div className="next">
              <i className="fas fa-fast-forward"></i>
            </div>
          </div>
          <div className="duration">
            <div className="line"></div>
            <div className="played" style={{ width: "60px" }}></div>
            <div className="thumb" style={{ left: "60px" }}></div>
          </div>
          <div className="time">{time}</div>
        </div>
        <div
          className="sidebar"
          style={{ right: `${sidebar ? "0" : "-140px"}` }}
        ></div>
        <div className="sidebar-icon" onClick={() => showSidebar(!sidebar)}>
          <div className="sidebar-icon-bars">
            <div className="sidebar-icon-bar sidebar-icon-bar1"></div>
            <div className="sidebar-icon-bar sidebar-icon-bar2"></div>
            <div className="sidebar-icon-bar sidebar-icon-bar3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showreel;
