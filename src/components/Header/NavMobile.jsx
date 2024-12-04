import React from "react";
import { Link } from "react-router-dom";

const NavMobile = () => {
  return (
    <div className="absolute md:hidden left-0 top-16 px-2 pt-2 pb-3 bg-black border-b border-white/10 w-full">
      <ul className="flex md:hidden justify-center items-center flex-col gap-5 text-text-dark">
        <li>
          <Link to={"/"}>Services</Link>
        </li>
        <li>
          <Link to={"/"}>Reviews</Link>
        </li>
        <li>
          <Link to={"/"}>Blog</Link>
        </li>
        <li>
          <Link to={"/"}>Jobs</Link>
        </li>
        <li>
          <Link to={"/"} className=" text-primary-light">
            Start a project
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
