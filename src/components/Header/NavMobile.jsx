import React from "react";
import { Link } from "react-router-dom";

const NavMobile = ({ toggle }) => {
  return (
    <div className="absolute md:hidden left-0 top-16 px-2 pt-2 pb-3 bg-black border-b border-white/10 w-full">
      <ul className="flex md:hidden justify-center items-center flex-col gap-5 text-text-dark">
        <li>
          <Link
            to={"/"}
            onClick={() => {
              toggle();
              window.scrollTo(0, 0);
            }}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to={"/"}
            onClick={() => {
              toggle();
              window.scrollTo(0, 0);
            }}
          >
            Reviews
          </Link>
        </li>
        <li>
          <Link
            to={"/"}
            onClick={() => {
              toggle();
              window.scrollTo(0, 0);
            }}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to={"/"}
            onClick={() => {
              toggle();
              window.scrollTo(0, 0);
            }}
          >
            Jobs
          </Link>
        </li>
        <li>
          <Link
            to={"/"}
            className=" text-primary-light"
            onClick={() => {
              toggle();
              window.scrollTo(0, 0);
            }}
          >
            Start a project
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
