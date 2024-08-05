import React from "react";
import Navbar from "./Navbar";
import Stories from "./Stories";
import Footer from "./Footer";

const StoriesPage = () => {
  return (
    <div>
      <Navbar isStoriesPage={true} />
      <Stories />
      <Footer />
    </div>
  );
};

export default StoriesPage;
