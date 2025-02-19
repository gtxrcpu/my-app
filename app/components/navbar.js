"use client"; // Ensure this is included

import Link from "next/link";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("bg-gray-900", !darkMode);
    document.body.classList.toggle("bg-white", darkMode);
    document.body.classList.toggle("text-white", !darkMode);
    document.body.classList.toggle("text-gray-900", darkMode);
  };

  return (
    <nav
      className={`flex items-center justify-between p-4 fixed top-0 left-0 right-0 transition-all ${
        darkMode ? "bg-gray-800 bg-opacity-80" : "bg-transparent"
      } z-10`}
    >
      <div className="ml-4">
        <img src="/path_to_your_image.jpg" alt="Logo" className="h-10" />
      </div>
      <div className="flex items-center space-x-8">
        {" "}
        {/* Adjust the space-x value for more or less spacing */}
        <Link href="/" className="hover:underline text-xl">
          Home
        </Link>
        <Link href="/about" className="hover:underline text-xl">
          About
        </Link>
        <Link href="/skills" className="hover:underline text-xl">
          Skills
        </Link>
        <Link href="/services" className="hover:underline text-xl">
          Services
        </Link>
        <Link href="/portofolio" className="hover:underline text-xl">
          Portfolios
        </Link>
        <Link href="/contact" className="hover:underline text-xl">
          Contact
        </Link>
      </div>
      <button
        onClick={toggleDarkMode}
        className="mr-4 p-2 rounded bg-gray-100 flex items-center justify-center"
        style={{ width: "40px", height: "40px" }} // Adjust dimensions as needed
      >
        {darkMode ? (
          <FaSun className="text-yellow-500 text-2xl" />
        ) : (
          <FaMoon className="text-gray-900 text-2xl" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
