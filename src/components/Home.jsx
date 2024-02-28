import React from "react";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-mono bg-[#fff] h-screen">
      <Header />
      <div className="mx-12">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
