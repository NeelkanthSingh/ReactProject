import React from "react";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

const Home = () => {
  return (
    <div className="bg-[#F6FBF7]">
      <div className="flex flex-col min-h-screen mx-12">
        <Header />
        <div className="flex-grow bg-black"></div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
