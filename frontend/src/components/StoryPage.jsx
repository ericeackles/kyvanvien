import React from "react";
import Navbar from "./Navbar";
import Story from "./Story";
import Footer from "./Footer";

const StoryPage = () => {
  return (
    <div>
      <Navbar isStoryPage={true} />
      <Story />
      <Footer />
    </div>
  );
};

export default StoryPage;
