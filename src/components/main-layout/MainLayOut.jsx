import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const MainLayOut = () => {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayOut;
