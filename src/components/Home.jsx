import React from "react";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

const Home = () => {
  const divStyle = {
    backgroundImage: `url("/cool-background.png?url")`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat, repeat`,
    backgroundSize: `cover`,
  };
  return (
    <div style={divStyle} className="bg-[#F6FBF7] h-screen">
      <div className="flex flex-col h-full mx-12">
        <Header />
        <div className="flex-1 flex justify-center items-center text-[#050404]">
          <div>
            <h1 className="text-3xl underline ">Our Expertise:</h1>
            <p className="text-xl">
              We are proud members of the Institution of Fire Engineers (India),
              dedicated to:
            </p>
            <ul className="text-base">
              <li>
                Manufacturing High-Quality Fire Fighting Equipment &
                Accessories.<br /> Our commitment lies in crafting top-tier fire
                fighting gear and accessories tailored to meet your safety
                needs.
              </li>
              <li>
                Specializing in Fire Alarm System and Fire Hydrant System
                Installation: <br />Our expertise extends to the meticulous
                installation of advanced fire alarm systems and efficient fire
                hydrant systems, <br />ensuring comprehensive safety measures for your
                premises.
              </li>
              <li>
                Offering ISI Marked Fire Fighting Equipment Systems: <br />Trust in
                our products, which proudly bear the prestigious ISI mark,<br />
                symbolizing adherence to stringent quality standards and
                unparalleled reliability.
              </li>
            </ul>
          </div>
          <div>
            <img className="w-30 h-30" src="pngegg.png" alt="Fire Photo" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
