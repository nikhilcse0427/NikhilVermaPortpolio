import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/profile", label: "Profile" },
    { path: "/project", label: "Project" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-black text-white shadow-md w-full">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-4 md:px-10 lg:px-20 xl:px-28">
        {/* Logo */}
        <h1 className="font-semibold font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Nikhil
          <span className="font-bold text-green-500 text-3xl sm:text-4xl lg:text-5xl">.</span>
        </h1>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Menu */}
        <ul
          className={`fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8 text-2xl sm:text-3xl font-semibold transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          {navLinks.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`${
                  location.pathname === item.path ? "text-green-400" : "text-white"
                } hover:text-green-400 transition duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`text-lg lg:text-xl xl:text-2xl font-medium ${
                  location.pathname === item.path ? "text-green-400" : "text-white"
                } hover:text-green-400 transition duration-200`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
