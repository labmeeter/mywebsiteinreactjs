import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./VideoSection.css";
import Myvideo from "../videos/video-2.mp4";
function VideoSection() {
  return (
    <div className="video-container">
      <video src={Myvideo} autoPlay loop muted />
      <h1>MARCO'S VAPESHOP</h1>
      <p>Keep calm vape on.</p>
      <div className="video-btn">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large "
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default VideoSection;
