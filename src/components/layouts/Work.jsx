import React from "react";

const Work = () => {
  return (
    <>
      <div className="h-screen first-letter:w-full lg:bg-[url('/fireman.svg')] lg:bg-center lg:bg-no-repeat lg:bg-auto text-[#000]">
        <div>
          <div className="flex justify-center">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
