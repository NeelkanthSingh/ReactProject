import React from "react";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

const Home = () => {
  return (
    <div className="bg-[#fff]">
      <Header />
      <div className="flex flex-col h-auto overflow-y-auto mx-12">
        <div className="h-screen w-full flex text-[#000]">
          <div className="flex-row h-full w-full lg:bg-[url('/fireman.svg')] lg:bg-center lg:bg-no-repeat lg:bg-cover"></div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>
            We are a member of Institution of Fire Engineers(IFE)
            <br />
            We offer in ISI Marked Fire Fighting Equipment Systems <br />
            We specialize in installation of Fire Alarm Systems, Fire Hydrant
            Systems, Sprinklers, etc. <br />
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
