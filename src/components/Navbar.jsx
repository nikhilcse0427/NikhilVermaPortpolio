import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get the current route

  return (
    <div>
      <nav className="text-white bg-black flex justify-between px-8 pr-22 pl-45">
        <h1 className="font-semibold font-mono text-4xl pt-3 text-white">
          Nikhil<span className="font-bold text-green-500 text-5xl">.</span>
        </h1>
        <ul className="font-medium text-lg flex gap-6 p-5">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/profile", label: "Profile" },
            { path: "/project", label: "Project" },
            { path: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${
                location.pathname === item.path ? "text-green-400" : "text-white"
              } hover:text-green-400 transition duration-200`}
            >
              {item.label}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
