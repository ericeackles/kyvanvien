// MenuTab.js
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/MenuTab.css";

const MenuTab = ({ isOpen, onClose }) => {
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={menuRef}
      className={`menu-tab absolute right-0 mt-2 w-48 bg-white rounded-md font-normal shadow-lg z-50 ${isOpen ? "block" : "hidden"}`}
    >
      <div
        onClick={() => handleNavigation("/account")}
        className="block px-4 py-2 text-gray-800 flex items-center border-b border-gray-200 cursor-pointer"
      >
        Sign In / Register
      </div>
      <div
        onClick={() => handleNavigation("/about")}
        className="block px-4 py-2 text-gray-800 flex items-center border-b border-gray-200 cursor-pointer"
      >
        About
      </div>
      <div
        onClick={() => handleNavigation("/services")}
        className="block px-4 py-2 text-gray-800 flex items-center border-b border-gray-200 cursor-pointer"
      >
        Services
      </div>
      <div
        onClick={() => handleNavigation("/contact")}
        className="block px-4 py-2 text-gray-800 flex items-center cursor-pointer"
      >
        Contact
      </div>
    </div>
  );
};

export default MenuTab;
