import React, { useEffect } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import VideoPlayer from "./../../components/modules/video/VideoPlayer";
import Navbar from "./../../components/navbar/Index";

const ScoutsLayout = ({ children, api, mediaPlayer }) => {
  return (
    <div className="app">
      <Navbar />
      <div className="player">
        <div className="player__body">
          <Sidebar />
          {children}
        </div>
        <div className="videoPlayer__container">
          <VideoPlayer api={api} mediaPlayer={mediaPlayer} />
        </div>
        <Footer api={api} mediaPlayer={mediaPlayer} />
      </div>
    </div>
  );
};

export default ScoutsLayout;
