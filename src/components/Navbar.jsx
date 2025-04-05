import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation(); 
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-10 py-8 flex justify-between items-center md:px-16">
      <h1 className="font-semibold font-mono pl-41 text-4xl md:text-5xl text-white">
        Nikhil<span className="font-bold text-green-500 text-6xl">.</span>
      </h1>

      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={40} /> : <Menu size={40} />}
      </button>

      <ul
        className={`absolute left-0 top-24 w-full bg-black md:static md:flex md:items-center md:gap-5 md:p-0 md:w-auto transition-all duration-300 ease-in-out ${
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
              className={`block py-5 md:py-3 md:px-4 text-4xl md:text-xl font-semibold ${
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