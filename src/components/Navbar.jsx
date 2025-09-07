import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, SearchIcon, XIcon } from "lucide-react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
      {/* Logo */}
      <Link to={"/"} className="max-md:flex-1">
        <img src={assets.logo} alt="logo" className="w-36 h-auto" />
      </Link>

      {/* Menu Links */}
      <div
        className={`max-md:fixed max-md:top-0 max-md:left-0 max-md:h-screen max-md:w-full max-md:flex-col max-md:justify-center max-md:items-center
        flex md:flex-row gap-8 px-10 py-3 font-medium text-lg
        backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Close Icon */}
        <XIcon
          onClick={() => setIsOpen(false)}
          className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer hover:text-primary"
        />

        {["Home", "Movies", "Theaters", "Releases", "Favorite"].map(
          (item, i) => (
            <Link
              key={i}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="group relative"
              onClick={() => {
                scrollTo(0, 0);
                setIsOpen(false);
              }}
            >
              <span className="transition-colors group-hover:text-primary">
                {item}
              </span>
            </Link>
          )
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-8">
        <SearchIcon className="max-md:hidden w-6 h-6 cursor-pointer" />
        <button className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer">
          Login
        </button>
      </div>

      {/* Hamburger */}
      <MenuIcon
        onClick={() => setIsOpen(!isOpen)}
        className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer"
      />
    </div>
  );
};

export default Navbar;
