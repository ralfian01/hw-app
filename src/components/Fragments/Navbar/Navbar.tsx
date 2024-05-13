import React from "react";
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {
  const navLink = ["home", "about", "portofolio", "package"];
  return (
    <div className="bg-secondary text-base-content fixed top-0 z-30 flex h-16 w-full justify-center bg-opacity-75 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-sm">
      <div className="navbar shadow-md w-full">
        <div className="navbar-start md:px-5">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 capitalize">
              {navLink.map((item, index) => (
              <li key={index}>
                <Link to={item === "home" ? "/" : `#${item}`}>{item}</Link>
              </li>
            ))}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-2xl font-alex-brush text-dark">
            TulleCapture
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-dark font-semibold font-montserrat text-md uppercase">
            {navLink.map((item, index) => (
              <li key={index}>
                <Link to={item === "home" ? "/" : `#${item}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end md:px-5">
          <button className="btn btn-primary uppercase text-light text-sm font-montserrat font-normal tracking-wide">
            <img
              src="/assets/icons/user-outline.svg"
              alt="user"
            />
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
