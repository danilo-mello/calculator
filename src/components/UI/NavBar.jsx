import React, { useState } from "react";
import { auth } from "../../firebase";

const NavBar = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 border">
      <nav className="relative flex flex-wrap items-center justify-between py-4 border">
        <div className="container mx-auto flex flex-wrap items-center justify-between border">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a className="font-medium inline-block py-2 border" href="/">
              Calc Log
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row lg:ml-auto">

              <li className="nav-item">
                <a
                  className="p-2 flex items-center font-medium hover:opacity-75 border"
                  href="/mylogs"
                >
                  My Logs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="p-2 flex items-center font-medium hover:opacity-75 border"
                  onClick={() => {
                    auth.signOut();
                  }}
                  href="/"
                >
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
