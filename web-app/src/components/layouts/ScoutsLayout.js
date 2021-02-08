import React, { useEffect } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import VideoPlayer from "./../../components/modules/video/VideoPlayer";
import Navbar from "./../../components/navbar/Index";
import "./Layout.css";

const ScoutsLayout = ({ children, api, mediaPlayer }) => {
  // useEffect()

  return (
    // <div className="app">
    <>
      <Navbar />
      <div className="view">
        <div className="view__body">
          <Sidebar />
          {children}
        </div>
        <div className="videoPlayer__container">
          {/* <VideoPlayer api={api} mediaPlayer={mediaPlayer} /> */}
        </div>
        <Footer api={api} mediaPlayer={mediaPlayer} />
      </div>
    </>
  );
};

export default ScoutsLayout;
