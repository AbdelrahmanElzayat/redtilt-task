import React, { useContext } from "react";
import { ThemeContext } from "../../../utils/context/ThemeContext";
import peoplegroup from "../../../assets/icons/peoplegroup.svg";
import PeopleGroupLight from "../../../assets/icons/PeopleGroupLight.svg";
import topArrow from "../../../assets/icons/topArrow.svg";
import topArrowLight from "../../../assets/icons/topArrowLight.svg";
import Dashed from "../../../assets/icons/Dashed.svg";
import Eye from "../../../assets/icons/Eye.svg";
import DashedLight from "../../../assets/icons/DashedLight.svg";
const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const scrollToNextSection = () => {
    window.scrollBy({
      top: 350, // التمرير لأسفل بمقدار 50px
      behavior: "smooth", // التمرير يكون سلسًا
    });
  };

  return (
    <div className="w-full">
      <div className="container h-full">
        <div className="hero-container flex justify-center lg:justify-between items-center pt-20">
          <div className="left-hero hidden lg:block">
            <div className="icon-left relative">
              {theme === "light" ? (
                <img
                  src={DashedLight}
                  alt="dashedCircle"
                  style={{ transform: "scale(-1)" }}
                  className="animate-slowSpin"
                />
              ) : (
                <img
                  src={Dashed}
                  alt="dashedCircle"
                  className="animate-slowSpin"
                />
              )}

              <div className="icon-group absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                {theme === "dark" ? (
                  <img src={peoplegroup} alt="peoplegroup" />
                ) : (
                  <img src={PeopleGroupLight} alt="peoplegroup" />
                )}
              </div>
            </div>
          </div>
          <div className="content-hero flex flex-col justify-center items-center gap-1 sm:gap-2 md:gap-4">
            <h1 className="font-bold text-xl sm:text-3xl md:text-5xl text-center">
              From Concept to Code
            </h1>
            <h2 className="font-bold text-xl sm:text-3xl md:text-5xl text-center text-red">
              We Make IT Happen
            </h2>
            <p className="text-center text-xs font-normal">
              We help brands and B2B enterprises build amazing <br />
              websites that convert their visitors to paying customers.
            </p>
            <button className="letsCall rounded-full bg-gradient-to-r from-red/80 to-red/20 flex items-center justify-center gap-2 px-3 py-2 mt-3 md:px-5 md:py-4 text-sm md:text-lg font-semibold drop-shadow-[0_15px_15px_#F92828A1] hover:drop-shadow-[0_25px_25px_#F92828B1] transition-all">
              <img src={Eye} alt="phone" />
              Lets have a call
            </button>
            <div
              className="mouse flex flex-col justify-center items-center gap-2 animate-pulse cursor-pointer"
              onClick={scrollToNextSection}
            >
              <svg
                width="20px"
                height="23px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill={theme === "dark" ? "#D1C1C1" : "#000"}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M11.141 4c-1.582 0-2.387.169-3.128.565a3.453 3.453 0 0 0-1.448 1.448C6.169 6.753 6 7.559 6 9.14v5.718c0 1.582.169 2.387.565 3.128.337.63.818 1.111 1.448 1.448.74.396 1.546.565 3.128.565h1.718c1.582 0 2.387-.169 3.128-.565a3.453 3.453 0 0 0 1.448-1.448c.396-.74.565-1.546.565-3.128V9.14c0-1.582-.169-2.387-.565-3.128a3.453 3.453 0 0 0-1.448-1.448C15.247 4.169 14.441 4 12.86 4H11.14zm0-2h1.718c2.014 0 3.094.278 4.072.801a5.452 5.452 0 0 1 2.268 2.268c.523.978.801 2.058.801 4.072v5.718c0 2.014-.278 3.094-.801 4.072a5.452 5.452 0 0 1-2.268 2.268c-.978.523-2.058.801-4.072.801H11.14c-2.014 0-3.094-.278-4.072-.801a5.452 5.452 0 0 1-2.268-2.268C4.278 17.953 4 16.873 4 14.859V9.14c0-2.014.278-3.094.801-4.072A5.452 5.452 0 0 1 7.07 2.801C8.047 2.278 9.127 2 11.141 2zM11 6h2v5h-2V6z"></path>
                  </g>
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="168"
                viewBox="0 0 11 168"
                fill="none"
              >
                <path
                  d="M4.88228 166.952C5.13113 167.201 5.53458 167.201 5.78343 166.952L9.83857 162.897C10.0874 162.648 10.0874 162.245 9.83857 161.996C9.58973 161.747 9.18627 161.747 8.93743 161.996L5.33285 165.6L1.72828 161.996C1.47944 161.747 1.07598 161.747 0.827135 161.996C0.578292 162.245 0.578292 162.648 0.827135 162.897L4.88228 166.952ZM4.69565 0.501465V166.501H5.97006V0.501465H4.69565Z"
                  fill={theme === "dark" ? "#D1C1C1" : "#000"}
                  fillOpacity="0.2"
                />
              </svg>
            </div>
          </div>
          <div className="right-hero hidden lg:block">
            <div className="icon-right relative">
              {theme === "light" ? (
                <img
                  src={DashedLight}
                  alt="dashedCircle"
                  className="animate-slowSpin"
                />
              ) : (
                <img
                  src={Dashed}
                  alt="dashedCircle"
                  style={{ transform: "scale(-1)" }}
                  className="animate-slowSpin"
                />
              )}

              <div className="icon-group absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                {theme === "dark" ? (
                  <img src={topArrow} alt="arrow" />
                ) : (
                  <img src={topArrowLight} alt="arrow" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
