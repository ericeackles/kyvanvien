import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Account from "./components/Account";
import StoriesPage from "./components/StoriesPage";
import StoryPage from "./components/StoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/account" element={<Account />} />
      <Route path="/stories" element={<StoriesPage />} />
      <Route path="/stories/:id" element={<StoryPage />} />
    </Routes>
  );
}

export default App;
