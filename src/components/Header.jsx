import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  return (
    <div>
      <header className="bg-black">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img
              src="https://cdn.pixabay.com/photo/2020/09/16/18/39/icon-5577198_640.png"
              className="w-9"
              alt="logo img"
            />
            <span className="ml-3 text-3xl text-white">CRUD</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base text-white justify-center">
            <Link to="/login">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                {currentUrl === "/dashboard" ? "Logout" : "Login"}
              </button>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
