import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full lg:px-6 px-2 lg:py-4 py-2 flex justify-between items-center bg-white border-b border-gray-200">
      <div className="flex items-center gap-6">
        <Link to={"/"} className="flex items-center">
          <img src={logo} alt="Wiads Logo" className="h-14 w-auto" />
          <h1 className="ml-3 text-2xl font-semibold text-gray-900">
            Wiads.ca
          </h1>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 font-medium">
          <Link to={"/features"} className="">
            Features
          </Link>
          <Link to={"/white-label"} className="">
            White Label
          </Link>
          <Link to={"/landing-pages"} className="">
            Landing Pages
          </Link>
        </nav>
      </div>
      <nav className="hidden lg:flex items-center space-x-4">
        <Link to={"/contact-us"} className="">
          Contact Us
        </Link>
        <Link to={"/blog"} className="">
          Blog
        </Link>
        <Link
          to={"/login"}
          className="bg-gray-200 text-black px-2.5 py-1.5 rounded-lg hover:bg-gray-300"
        >
          Login
        </Link>
        <Link
          to={"/signup"}
          className="bg-blue-600 text-white px-2.5 py-1.5 rounded-lg hover:bg-blue-700"
        >
          Signup
        </Link>
      </nav>
      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-800 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <AiOutlineClose className="h-8 w-8" />
          ) : (
            <AiOutlineMenu className="h-8 w-8" />
          )}
        </button>
      </div>
      <div
        className={
          isMobileMenuOpen
            ? "absolute top-16 left-0 w-full bg-blue-600 border-t transition-all duration-300 border-gray-200 lg:hidden z-40"
            : "absolute top-16 left-[-100%] w-full bg-blue-600 border-t transition-all duration-300 border-gray-200 lg:hidden z-40"
        }
      >
        <nav className="">
          <div className="flex flex-col pl-3 gap-4 py-4 text-white">
            <Link to={"/features"} className="" onClick={toggleMobileMenu}>
              Features
            </Link>
            <Link to={"/white-label"} className="" onClick={toggleMobileMenu}>
              White Label
            </Link>
            <Link to={"/landing-pages"} className="" onClick={toggleMobileMenu}>
              Landing Pages
            </Link>
            <Link to={"/contact-us"} className="" onClick={toggleMobileMenu}>
              Contact Us
            </Link>
            <Link to={"/blog"} className="" onClick={toggleMobileMenu}>
              Blog
            </Link>
            <Link
              to={"/login"}
              className="bg-gray-200 text-black px-2.5 py-1.5 rounded-lg w-48 hover:bg-gray-300"
              onClick={toggleMobileMenu}
            >
              Login
            </Link>
            <Link
              to={"/signup"}
              className=" bg-gray-200 text-black px-2.5 py-1.5 rounded-lg w-48 hover:bg-gray-300"
              onClick={toggleMobileMenu}
            >
              Signup
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
