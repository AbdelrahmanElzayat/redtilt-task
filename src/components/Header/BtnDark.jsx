import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../utils/context/ThemeContext";

const BtnDark = () => {
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem("theme") === "dark";
//   });

//   const toggleDarkMode = () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     localStorage.setItem("theme", newMode ? "dark" : "light");
//     document.documentElement.classList.toggle("dark", newMode);
//   };

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, []);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className="border-2 border-primary-dark rounded-md p-1 cursor-pointer"
      onClick={toggleTheme}
    >
      <button className="p-2 bg-primary-light dark:bg-primary-dark text-white rounded-xl w-8 h-8 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M18.6876 13.3542L19.6154 13.7271C19.7648 13.3554 19.6779 12.9304 19.3947 12.6471C19.1114 12.3638 18.6864 12.2769 18.3147 12.4263L18.6876 13.3542ZM6.97919 1.64581L7.90706 2.0187C8.05645 1.64698 7.96957 1.22198 7.68629 0.938705C7.40302 0.65543 6.97802 0.568552 6.6063 0.717936L6.97919 1.64581ZM18.3147 12.4263C17.3946 12.796 16.3891 13 15.3334 13V15C16.6488 15 17.9073 14.7455 19.0604 14.2821L18.3147 12.4263ZM15.3334 13C10.9151 13 7.33337 9.41828 7.33337 5H5.33337C5.33337 10.5228 9.81053 15 15.3334 15V13ZM7.33337 5C7.33337 3.94432 7.53733 2.93873 7.90706 2.0187L6.05131 1.27293C5.5879 2.42606 5.33337 3.68453 5.33337 5H7.33337ZM2.33337 10C2.33337 6.63714 4.40863 3.75657 7.35207 2.57369L6.6063 0.717936C2.93108 2.1949 0.333374 5.79288 0.333374 10H2.33337ZM10.3334 18C5.9151 18 2.33337 14.4183 2.33337 10H0.333374C0.333374 15.5228 4.81053 20 10.3334 20V18ZM17.7597 12.9813C16.5768 15.9247 13.6962 18 10.3334 18V20C14.5405 20 18.1385 17.4023 19.6154 13.7271L17.7597 12.9813Z"
            fill="#F6E7E7"
          />
        </svg>
      </button>
    </div>
  );
};

export default BtnDark;
