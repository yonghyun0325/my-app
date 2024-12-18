import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "./Banner.css";
import ReactPlayer from "react-player";

const Banner = ({ title, description, videoUrl }) => {
  return (
    <div className="banner">
      <ReactPlayer
        url={videoUrl}
        playing
        muted
        loop
        width="100%"
        height="100%"
        className="banner-video"
      />
      <div className="banner-content">
        <h1 className="banner-title">{title}</h1>
        <p className="banner-description">{description}</p>
        <div className="banner-buttons">
          <button className="banner-button play">
            <FontAwesomeIcon icon={faPlay} />
            재생
          </button>
          <button className="banner-button info">
          <FontAwesomeIcon icon={faInfoCircle} />
            상세 정보
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
