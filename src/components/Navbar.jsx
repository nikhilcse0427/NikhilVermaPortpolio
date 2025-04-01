import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation(); // Get the current route
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center md:px-8">
      <h1 className="font-semibold font-mono text-3xl md:text-4xl text-white">
        Nikhil<span className="font-bold text-green-500 text-4xl">.</span>
      </h1>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Nav Links */}
      <ul
        className={`absolute left-0 top-16 w-full bg-black md:static md:flex md:items-center md:gap-6 md:p-0 md:w-auto transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        } md:flex`}
      >
        {[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/profile", label: "Profile" },
          { path: "/project", label: "Project" },
          { path: "/contact", label: "Contact" },
        ].map((item) => (
          <li key={item.path} className="text-center md:text-left">
            <Link
              to={item.path}
              className={`block py-3 md:py-0 md:px-3 text-lg md:text-base ${
                location.pathname === item.path ? "text-green-400" : "text-white"
              } hover:text-green-400 transition duration-200`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;