import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = true;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 shadow-lg">
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4 md:space-x-4">
        <h1 className="text-lg md:text-xl font-extrabold text-teal-600">
          <Link to="/">Blog Market</Link>
        </h1>
        {/* Search bar */}
        <div className="hidden md:flex justify-center items-center space-x-2 bg-white rounded-xl p-1 shadow-md">
          <p className="text-teal-600">
            <FaSearch />
          </p>
          <input
            className="outline-none px-3 rounded-xl text-gray-700"
            placeholder="Search a post"
            type="text"
          />
        </div>
        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-teal-600">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {/* Links */}
        <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
          {user ? (
            <h3 className="text-teal-600 hover:text-teal-800">
              <Link to="/write">Write</Link>
            </h3>
          ) : (
            <h3 className="text-teal-600 hover:text-teal-800">
              <Link to="/login">Login</Link>
            </h3>
          )}
          {user ? (
            <h3 className="text-teal-600 hover:text-teal-800">
              <Link to="/profile">Profile</Link>
            </h3>
          ) : (
            <h3 className="text-teal-600 hover:text-teal-800">
              <Link to="/register">Register</Link>
            </h3>
          )}
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex justify-center items-center space-x-2 bg-white rounded-xl p-2 shadow-md mx-4 my-2">
            <p className="text-teal-600">
              <FaSearch />
            </p>
            <input
              className="outline-none px-3 rounded-xl text-gray-700 w-full"
              placeholder="Search a post"
              type="text"
            />
          </div>
          <div className="flex flex-col items-center space-y-2 py-4">
            {user ? (
              <h3 className="text-teal-600 hover:text-teal-800">
                <Link to="/write" onClick={toggleMenu}>Write</Link>
              </h3>
            ) : (
              <h3 className="text-teal-600 hover:text-teal-800">
                <Link to="/login" onClick={toggleMenu}>Login</Link>
              </h3>
            )}
            {user ? (
              <h3 className="text-teal-600 hover:text-teal-800">
                <Link to="/profile" onClick={toggleMenu}>Profile</Link>
              </h3>
            ) : (
              <h3 className="text-teal-600 hover:text-teal-800">
                <Link to="/register" onClick={toggleMenu}>Register</Link>
              </h3>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
