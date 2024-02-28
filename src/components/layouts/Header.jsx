import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const dropDownRollIn = () => {
    var dropdown = document.getElementById("dropDownLists");
    dropdown.classList.remove("hidden");
  };

  const onClickInverse = () => {
    var dropdown = document.getElementById("dropDownLists");
    dropdown.classList.toggle("hidden");
  };

  return (
    <>
      <nav className="absolute top-0 left-12 right-12 px-6 text-[#A31621] flex justify-between font-semibold text-xs lg:text-sm z-10 shadow-lg h-8 lg:h-9">
        {/* Navlink's isActive works by matching the url 
        with the to attribute. User shouldn't confuse 
        this with the hover effect. */}
        <NavLink
          to="/"
          className={"text-xl font-bold flex md:text-2xl lg:text-3xl items-end"}
        >
          <img src="skv.png" className="w-8 h-8 lg:w-9 lg:h-9" alt="" />
          SKV
        </NavLink>
        <div className="hidden md:flex justify-between items-end hover:cursor-pointer">
          <div className="hover:underline lg:mx-4 md:mx-3">Home</div>
          <div className="hover:underline lg:mx-4 md:mx-3">Clients</div>
          <div className="hover:underline lg:mx-4 md:mx-3">Protection Tips</div>
          <div className="hover:underline lg:mx-4 md:mx-3">
            Fire Extinguishers
          </div>
          <div className="hover:underline lg:mx-4 md:mx-3">About Us</div>
          <div className="hover:underline lg:mx-4 md:mx-3">Contact Us</div>
        </div>

        <div className="flex items-end md:hidden">
          <button
            className=""
            onMouseOver={dropDownRollIn}
            onClick={onClickInverse}
          >
            <img src="ham_icon.svg" alt="Navigation Menu" srcset="" />
          </button>
          <div
            id="dropDownLists"
            className="absolute hidden right-12 top-8 py-1 mt-1 rounded-md shadow-xl w-44"
          >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-[#050404] hover:text-[#A31621]"
            >
              Home
            </a>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-[#050404] hover:text-[#A31621]"
            >
              Clients
            </a>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-[#050404] hover:text-[#A31621]"
            >
              Protection Tips
            </a>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-[#050404] hover:text-[#A31621]"
            >
              Fire Extinguishers
            </a>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-[#050404] hover:text-[#A31621]"
            >
              About Us
            </a>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-[#050404] hover:text-[#A31621]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
