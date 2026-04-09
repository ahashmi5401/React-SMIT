import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-evenly px-5 py-4 items-center border-b border-gray-100">
      <Link to='/' className="text-gray-900 font-medium">Muhammad Ayan Hashmi</Link>
      <div className="flex w-[40%] justify-evenly">
        <Link to="/work" className="text-gray-500 hover:text-gray-900 transition-colors">
          Work
        </Link>
        <Link to="/about" className="text-gray-500 hover:text-gray-900 transition-colors">
          About
        </Link>
        <Link to="/resume" className="text-gray-500 hover:text-gray-900 transition-colors">
          Resume
        </Link>
      </div>
      <button
      onClick={() => navigate('/contact')}
       className="border border-gray-300 px-4 py-2 rounded cursor-pointer hover:bg-gray-50 transition-colors">
        Let's talk →
      </button>
    </div>
  );
};

export default Navbar;
