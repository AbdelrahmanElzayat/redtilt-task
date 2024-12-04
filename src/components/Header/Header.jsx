import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import BtnDark from "./BtnDark";
import NavMobile from "./NavMobile";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const ismount = useRef(false);

  useEffect(() => {
    if (!ismount.current) {
      if (window.scrollY > 60) {
        setScrolled(true);
      }
      window.addEventListener("scroll", () => {
        if (window.scrollY > 60) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      });
      ismount.current = true;
    }
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" py-5 sticky top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-lg bg-black/80 dark:bg-transparent">
      <div
        className={`absolute inset-0 bg-black/80  border-b border-white/10 ${
          scrolled ? "opacity-1" : "opacity-0"
        } transition-opacity duration-300`}
        id="navbar-bg"
      ></div>
      <div className="container">
        <nav className="navbar flex justify-between items-center z-50">
          <div className="logo z-50">
            <Link to={"/"} className="w-fit block">
              <svg
                className="h-8"
                viewBox="0 0 1970 529"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
              >
                <g transform="matrix(1,0,0,1,-15.6926,-646.708)">
                  <g transform="matrix(2.00794,0,0,2.00794,-1007.69,-1097.19)">
                    <g transform="matrix(0.707061,0.707152,0.707152,-0.707061,690.766,1056.47)">
                      <path
                        d="M-12.829,-31.105L74.996,-31.105L75.11,-30.992L-12.766,-30.998C-12.787,-31.033 -12.807,-31.07 -12.829,-31.105"
                        fill="#fff"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(2.00794,0,0,2.00794,-1007.69,-1097.19)">
                    <g transform="matrix(-0.707102,-0.707111,-0.707111,0.707102,603.363,957.438)">
                      <path
                        d="M-95.12,39.219L16.232,39.219L16.329,39.316L-95.183,39.324C-95.162,39.289 -95.141,39.254 -95.12,39.219"
                        fill="#fff"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(2.00794,0,0,2.00794,-1007.69,-1097.19)">
                    <g transform="matrix(0,-1,-1,0,690.409,928.264)">
                      <path
                        d="M-22.705,-0.005L-22.693,-0.005C-10.173,-0.005 -0.005,10.163 -0.005,22.682L-0.005,22.705C-0.005,10.167 -10.167,0.001 -22.705,-0.005"
                        fill="#fff"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(2.00794,0,0,2.00794,-1007.69,-1097.19)">
                    <g transform="matrix(1,0,0,1,750.714,1116)">
                      <path
                        d="M0,-247.501L-219.123,-247.501C-228.301,-247.501 -236.152,-241.855 -239.417,-233.851L-82.987,-233.851C-45.058,-233.851 -14.185,-202.977 -14.185,-165.048C-14.185,-129.585 -41.162,-100.303 -75.657,-96.637L20.96,0C21.583,-2.034 21.923,-4.193 21.923,-6.432L21.923,-225.578C21.923,-237.686 12.107,-247.501 0,-247.501"
                        fill="#fff"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(2.00794,0,0,2.00794,-1007.69,-1097.19)">
                    <g transform="matrix(0.707053,0.707161,0.707161,-0.707053,705.685,1044.98)">
                      <path
                        d="M-14.846,-35.839L86.513,-35.839L86.514,-35.838L-4.043,-35.838L-14.846,-35.839Z"
                        fill="#fff"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(2.00794,0,0,2.00794,-1007.69,-1097.19)">
                    <g transform="matrix(1,0,0,1,544.416,1131.5)">
                      <path
                        d="M0,-157.804L-34.748,-157.804L-34.748,-21.923C-34.748,-9.815 -24.932,0 -12.825,0L157.816,0L90.964,-66.853L0,-157.804Z"
                        fill="#fff"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(2.00794,0,0,2.00794,-1007.69,-1097.19)">
                    <g transform="matrix(1,0,0,1,656.451,996.032)">
                      <path
                        d="M0,67.701C-0.984,67.701 -1.917,67.499 -2.787,67.171C-2.858,67.144 -2.935,67.132 -3.006,67.103C-3.01,67.101 -3.017,67.1 -3.021,67.098C-4.972,66.294 -6.528,64.738 -7.332,62.787C-7.334,62.782 -7.335,62.776 -7.337,62.771C-7.365,62.701 -7.377,62.624 -7.405,62.553C-7.732,61.683 -7.935,60.751 -7.935,59.767C-7.935,55.385 -4.382,51.832 0,51.832C0.548,51.832 1.082,51.888 1.599,51.993C1.6,51.994 1.601,51.994 1.601,51.994C1.602,51.994 1.602,51.994 1.602,51.995C4.699,52.63 7.138,55.069 7.772,58.165L7.772,58.168C7.878,58.684 7.935,59.219 7.935,59.767C7.935,64.149 4.382,67.701 0,67.701M13.393,63.787L13.393,63.786C13.775,62.513 13.985,61.165 13.985,59.767C13.985,52.043 7.724,45.781 0,45.781C-1.397,45.781 -2.745,45.992 -4.018,46.373L-4.018,46.374L-4.021,46.374L-72.734,-22.34L-86.359,-35.965L-63.534,-35.965L-49.909,-22.34L11.253,-22.34C17.524,-22.34 23.196,-24.877 27.324,-29.004C31.428,-33.108 33.963,-38.78 33.963,-45.052L33.963,-45.063C33.957,-57.601 23.791,-67.763 11.253,-67.763L-137.86,-67.763L-92.436,-22.34L-92.298,-22.34L-13.561,56.398C-13.57,56.437 -13.581,56.477 -13.59,56.517C-13.591,56.519 -13.592,56.522 -13.593,56.525C-13.841,57.567 -13.986,58.649 -13.986,59.767C-13.986,67.491 -7.724,73.752 0,73.752C1.118,73.752 2.198,73.608 3.24,73.36C3.242,73.359 3.245,73.359 3.248,73.358C3.289,73.348 3.328,73.337 3.369,73.326L65.506,135.464L85.059,135.464L13.393,63.787Z"
                        fill="rgb(244,63,94)"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(2.00794,0,0,2.00794,-1007.69,-1097.19)">
                    <g transform="matrix(1,0,0,1,702.233,1064.64)">
                      <path
                        d="M0,66.853L0.01,66.853L-66.852,0L0,66.853Z"
                        fill="rgb(244,63,94)"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(2.00794,0,0,2.00794,-1007.69,-1097.19)">
                    <g transform="matrix(1,0,0,1,856.773,1011.53)">
                      <path
                        d="M0,-7.744L19.887,-7.744C30.976,-7.744 37.487,-14.431 37.487,-24.464C37.487,-34.144 30.976,-41.007 19.887,-41.007L0,-41.007L0,-7.744ZM47.519,54.207L17.423,13.2L0,13.2L0,54.207L-23.76,54.207L-23.76,-61.951L19.887,-61.951C44.351,-61.951 61.775,-47.167 61.775,-24.464C61.775,-9.504 53.855,2.464 41.359,8.624L74.27,54.207L47.519,54.207Z"
                        fill="#fff"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(2.00794,0,0,2.00794,-1007.69,-1097.19)">
                    <g transform="matrix(1,0,0,1,974.509,1031.06)">
                      <path
                        d="M0,-17.598L39.599,-17.598C39.424,-28.686 30.799,-35.198 20.768,-35.198C10.737,-35.198 2.641,-28.51 0,-17.598M61.071,-0.878L0,-0.878C2.815,10.21 11.792,16.369 24.464,16.369C33.968,16.369 41.711,13.025 48.751,7.569L58.607,23.761C48.751,32.033 37.136,36.784 23.76,36.784C-3.871,36.784 -23.935,16.897 -23.935,-8.799C-23.935,-34.494 -4.048,-54.382 21.648,-54.382C46.111,-54.382 62.656,-36.431 62.656,-13.903C62.656,-8.975 61.775,-3.871 61.071,-0.878"
                        fill="#fff"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(2.00794,0,0,2.00794,-1007.69,-1097.19)">
                    <g transform="matrix(1,0,0,1,1133.43,979.321)">
                      <path
                        d="M0,42.943C0,26.399 -11.087,18.832 -21.999,18.832C-34.318,18.832 -44.526,27.984 -44.526,42.767C-44.526,57.551 -34.495,66.879 -21.999,66.879C-11.087,66.879 0,59.663 0,42.943M23.408,-45.583L23.408,86.414L1.585,86.414L1.585,75.678C-4.4,83.951 -14.431,88.526 -26.399,88.526C-51.038,88.526 -68.638,69.167 -68.638,42.943C-68.638,16.72 -51.038,-2.64 -26.399,-2.64C-15.487,-2.64 -6.512,1.056 -0.352,7.744L-0.352,-45.583L23.408,-45.583Z"
                        fill="#fff"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(2.00794,0,0,2.00794,-1007.69,-1097.19)">
                    <g transform="matrix(1,0,0,1,1222.3,1044.26)">
                      <path
                        d="M0,-73.214L-37.135,-73.214L-37.135,-94.686L61.071,-94.686L61.071,-73.214L23.76,-73.214L23.76,21.472L0,21.472L0,-73.214Z"
                        fill="#fff"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(2.00794,0,0,2.00794,-1007.69,-1097.19)">
                    <g transform="matrix(0,1,1,0,1323.31,931.626)">
                      <path
                        d="M15.311,-15.136C6.864,-15.136 0.527,-8.449 0.527,-0.001C0.527,8.447 6.864,15.311 15.311,15.311C23.582,15.311 29.92,8.447 29.92,-0.001C29.92,-8.449 23.582,-15.136 15.311,-15.136"
                        fill="rgb(244,63,94)"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(2.00794,0,0,2.00794,-1007.69,-1097.19)">
                    <g transform="matrix(1,0,0,1,0,44.352)">
                      <rect
                        x="1311.52"
                        y="934.265"
                        width="23.759"
                        height="87.118"
                        fill="#fff"
                      ></rect>
                    </g>
                  </g>
                  <g transform="matrix(2.00794,0,0,2.00794,-1007.69,-1097.19)">
                    <g transform="matrix(1,0,0,1,0,-0.527)">
                      <rect
                        x="1372.94"
                        y="934.265"
                        width="23.758"
                        height="131.997"
                        fill="#fff"
                      ></rect>
                    </g>
                  </g>
                  <g transform="matrix(2.00794,0,0,2.00794,-1007.69,-1097.19)">
                    <g transform="matrix(1,0,0,1,1490.33,978.618)">
                      <path
                        d="M0,67.229L0,87.117C-4.929,88.349 -10.208,89.229 -16.368,89.229C-37.84,89.229 -51.217,78.845 -51.217,56.494L-51.217,20.062L-64.944,20.062L-64.944,-0.001L-51.217,-0.001L-51.217,-22L-27.457,-22L-27.457,-0.001L-2.817,-0.001L-2.817,20.062L-27.457,20.062L-27.457,54.381C-27.457,64.413 -22.176,67.934 -11.264,67.934C-8.448,67.934 -4.577,67.582 0,67.229"
                        fill="#fff"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </Link>
          </div>
          <ul className="hidden z-50 md:flex justify-center items-center gap-5 text-text-dark">
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
          </ul>
          <div className="btnGroup z-50 flex justify-center items-center gap-4">
            <BtnDark />
            <Link
              to={"/"}
              className="p-2 hidden md:flex bg-primary-light dark:bg-primary-dark text-white rounded-md items-center justify-center hover:bg-primary-light/90 dark:hover:bg-primary-dark/90"
            >
              Start a project
            </Link>
            <div onClick={toggleMenu} className="z-50 cursor-pointer md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="menu"
                className="lucide lucide-menu h-6 w-6 z-50"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </div>
          </div>
          {isMenuOpen && <NavMobile />}
        </nav>
      </div>
    </header>
  );
};

export default Header;
