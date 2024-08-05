// Navbar.js
import React, { useState, useEffect } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import Search from "./Search";
import MenuTab from "./MenuTab";

const NavLinks = () => (
  <div className="flex-1 items-center gap-3 hidden lg:flex">
    {["Discord", "Hội kín", "Đăng truyện", "Tin tức"].map((item) => (
      <a
        key={item}
        href="#"
        rel="noopener noreferrer"
        className="nav-link nav-link-dark"
      >
        {item}
      </a>
    ))}
  </div>
);

const Logo = ({ onClick }) => (
  <a
    href="/"
    aria-current="page"
    className="font-display font-extrabold uppercase rounded-full flex items-center h-11 router-link-exact-active router-link-active text-white text-opacity-60"
    id="phrase2"
    onClick={onClick}
  >
    Kỳ Vân Truyện
  </a>
);

const SearchButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="button-circle px-3 py-2 mr-2 h-11 w-11 flex justify-center items-center button-transparent-dark bg-gray-600 rounded-full hover:bg-gray-700 hover:bg-gray-300 hover:text-black"
  >
    <FaSearch size={12} aria-label="Magnify icon" />
  </button>
);

const MenuButton = ({ onClick, isOpen, onClose }) => (
  <div className="relative">
    <button
      onClick={onClick}
      className="button-circle px-4 py-2 h-11 w-11 flex justify-center items-center uppercase button-transparent-dark bg-gray-600 rounded-full hover:bg-gray-700 hover:bg-gray-300 hover:text-black"
    >
      <FaBars size={12} aria-label="Menu" />
    </button>
    <MenuTab isOpen={isOpen} onClose={onClose} />
  </div>
);

const Navbar = ({ isAccountPage, isStoriesPage, isStoryPage }) => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleSearchClick = () => setShowSearchBox(!showSearchBox);
  const handleHomeClick = () => setShowSearchBox(false);
  const handleMenuClick = () => setShowMenu(!showMenu);
  const handleCloseMenu = () => setShowMenu(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`px-2 z-40 top-0 left-0 w-full fixed font-roboto font-extrabold select-none ${
          isAccountPage || isStoriesPage || isStoryPage || scrolled
            ? "bg-gray-800 text-white"
            : ""
        }`}
      >
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <div className="flex justify-between items-stretch py-2 gap-4">
            <NavLinks />
            <div className="flex-1 flex lg:justify-center items-center max-w-full">
              <Logo onClick={handleHomeClick} />
            </div>
            <div className="flex-1 flex justify-end max-w-full">
              <SearchButton onClick={handleSearchClick} />
              <MenuButton
                onClick={handleMenuClick}
                isOpen={showMenu}
                onClose={handleCloseMenu}
              />
            </div>
          </div>
        </div>
      </nav>
      <Search
        showSearchBox={showSearchBox}
        setShowSearchBox={setShowSearchBox}
      />
    </>
  );
};

export default Navbar;
