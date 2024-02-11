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
      <nav className="px-6 flex justify-between text-xs lg:text-sm z-1000 shadow-lg h-8 lg:h-9">
        {/* Navlink's isActive works by matching the url 
        with the to attribute. User shouldn't confuse 
        this with the hover effect. */}
        <NavLink
          to="/"
          className={
            "text-[#A31621] text-xl font-bold flex md:text-2xl lg:text-3xl items-end"
          }
        >
          <img src="skv.png" className="w-8 h-8 lg:w-9 lg:h-9" alt="" />
          SKV
        </NavLink>
        <div className="flex-1"></div>
        <div className="flex-1"></div>
        <div className="flex-1"></div>
        <div className="hidden md:flex flex-grow justify-between items-end text-[#050404]">
          <div className="hover:underline hover:text-[#A31621]">Clients</div>
          <div className="hover:underline hover:text-[#A31621]">
            Protection Tips
          </div>
          <div className="hover:underline hover:text-[#A31621]">
            Fire Extinguishers
          </div>
          <div className="hover:underline hover:text-[#A31621]">About Us</div>
          <div className="hover:underline hover:text-[#A31621]">Contact Us</div>
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
