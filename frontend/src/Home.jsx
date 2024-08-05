import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewUpdate from "./components/NewUpdate";
import BestManga from "./components/BestManga";
import BestTeam from "./components/BestTeam";
import SliderBar from "./components/Slider";
import "./css/Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-absolute-box"></div>
      <Navbar />
      <div className="home-content">
        <SliderBar />
        <NewUpdate />
        <BestManga />
        <BestTeam />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
