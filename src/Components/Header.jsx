import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCog,FaSignOutAlt,FaUser } from 'react-icons/fa';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAccount = () => setIsAccountOpen(!isAccountOpen);

  return (
    <nav className="theme-color p-4">
      <div className="max-w-8xl mx-auto flex justify-between items-center px-2">
        <Link to="/" className="text-white text-2xl font-semibold">
          Truflect
        </Link>

        {/* Hamburger Icon for Mobile Screens */}
        <div className="lg:hidden flex items-center space-x-2">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links and Account Dropdown */}
        <div className="hidden lg:flex items-center space-x-12">
          <Link to="/" className="text-white text-lg hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white text-lg hover:text-gray-300">
            About
          </Link>          
          <Link to="/contact" className="text-white text-lg hover:text-gray-300">
            Contact
          </Link>
          </div>
          {/* Account Dropdown */}
          <div className="hidden lg:block relative">
            <div className="flex items-center space-x-1">
            <button
              onClick={toggleAccount}
              className="text-white hover:text-gray-200 text-lg focus:outline-none"
            >
              Account
            </button>
            <svg
                className={`w-5 h-5 transition-transform duration-300 ${isAccountOpen ? 'transform rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {isAccountOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white opacity-80 z-10 text-black shadow-md rounded-md">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-lg hover:bg-gray-200 flex items-center rounded-md"
                >
                  <FaUser className="mr-2" />
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-lg hover:bg-gray-200 flex items-center"
                >
                  <FaCog className="mr-2"/>
                  Settings
                </Link>
                <Link
                  to="/logout"
                  className="block px-4 py-2 text-lg hover:bg-gray-200 flex items-center"
                >
                  <FaSignOutAlt className="mr-2"/>
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      

      {/* Mobile Menu (Hamburger + Account Dropdown) */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col p-4 space-y-4">
          <Link to="/" className="text-white text-lg">
            Home
          </Link>
          <Link to="/about" className="text-white text-lg">
            About
          </Link>          
          <Link to="/contact" className="text-white text-lg">
            Contact
          </Link>

          {/* Account Dropdown for Mobile */}
          <div>
          <div className="flex items-center space-x-1">
            <button
              onClick={toggleAccount}
              className="text-white hover:text-gray-200 text-lg focus:outline-none"
            >
              Account
            </button>
            <svg
                className={`w-5 h-5 transition-transform duration-300 ${isAccountOpen ? 'transform rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {isAccountOpen && (
              <div className="space-y-2 bg-white text-black p-2 rounded-md">
                <Link
                  to="/profile"
                  className="block text-lg hover:bg-gray-200 px-4 py-2 rounded-md"
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block text-lg hover:bg-gray-200 px-4 py-2"
                >
                  Settings
                </Link>
                <Link
                  to="/logout"
                  className="block text-lg hover:bg-gray-200 px-4 py-2"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;



