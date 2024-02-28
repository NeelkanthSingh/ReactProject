import React from "react";

const Clients = () => {
  return (
    <>
      {/* lg:bg-[url('/fireman.jpg')] lg:bg-center lg:bg-no-repeat lg:bg-contain */}
      <div className="absolute top-8 bottom-[5.5rem] w-full text-[#000]">
        <div className="flex">
          <div className="w-16 h-16 mt-8 mr-8 bg-black" />
          <div className="flex flex-col mr-8 mt-8 ">
            <div className="w-16 h-8 lg:bg-[url('/fireman.jpg')] lg:bg-center lg:bg-no-repeat lg:bg-contain">

            </div>
            <div className="w-16 h-8 bg-black " />
          </div>

          {/* </div> */}
          {/* <div className="flex justify-center">
            <div className="flex flex-col pt-20 justify-center items-left">
              <p className="text-3xl underline pd-6">
                WHO ARE{" "}
                <span className="text-orange-800 font-bold">
                  SKV FIRE ASSOCIATES
                </span>
                ?
              </p>
              <p>
                <span className="text-orange-800 font-bold text-lg">We </span>
                are a member of Institution of Fire Engineers(IFE).
              </p>
              <p>
                <span className="text-orange-800 font-bold text-lg">We </span>
                offer in ISI Marked Fire Fighting Equipment Systems.
              </p>
              <p>
                <span className="text-orange-800 font-bold text-lg">We </span>
                specialize in fire safety system installation services.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Clients;
