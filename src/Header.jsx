import React from "react";
import hdrlgo from "../public/image/hdr-logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex justify-between px-16 items-center bg-gray-400 h-20">
        <div className="hdr-lft">
          <img src={hdrlgo} alt="" />
        </div>
        <div className="hdr-right">
          <ul className="flex flex-row gap-10 text-xl font-medium text-white">
            <NavLink to="/">
              <li className="hover:text-2xl border-b-2 border-b-red-500">
                Home
              </li>
            </NavLink>
            <NavLink to="contact">
              <li className="hover:border-b border-b-red-400">Contact</li>
            </NavLink>
            <NavLink to="about">
              <li className="hover:border-b border-b-red-400">About</li>
            </NavLink>
            <NavLink to="service">
              <li className="hover:border-b border-b-red-400">Services</li>
            </NavLink>
          </ul>
        </div>
      </header>
    </>
  );
}
export default Header;
