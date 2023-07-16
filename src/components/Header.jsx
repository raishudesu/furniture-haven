import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;
      if (innerWidth >= 768) {
        setNav(nav);
        return;
      }
    };
    // Attach event listener on component mount
    window.addEventListener("resize", handleResize);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="overflow-hidden bg-white transition ease-in-out shadow-md sticky top-0 flex justify-between md:justify-between lg:justify-evenly items-center h-20 w-full mx-auto px-4 text-black z-30">
      <ScrollLink
        to="top"
        spy={true}
        smooth={true}
        duration={500}
        className="group text-2xl font-bold cursor-pointer"
      >
        Furniture Haven
      </ScrollLink>
      <ul className="hidden md:flex justify-end md:w-[70%] lg:w-[60%]">
        <RouterLink
          to="/"
          className="p-3 hover:text-red-500 transition ease-in-out rounded-xl font-semibold cursor-pointer"
        >
          Home
        </RouterLink>

        <RouterLink
          to="/shoppage"
          className="p-3 hover:text-red-500 transition ease-in-out rounded-xl font-semibold cursor-pointer"
        >
          Products
        </RouterLink>
        <RouterLink
          to="contact"
          className="p-3 hover:text-red-500 transition ease-in-out rounded-xl font-semibold cursor-pointer"
        >
          Contact Us
        </RouterLink>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} className="cursor-pointer" />
        ) : (
          <AiOutlineMenu size={20} className="cursor-pointer" />
        )}
      </div>
      <div
        className={
          nav
            ? "flex flex-col items-center py-6 fixed left-0 top-0 h-full w-[50%] border-r bg-white ease-in-out duration-500 "
            : "fixed left-[-100%]"
        }
      >
        <ScrollLink
          to="top"
          className="group text-2xl font-bold cursor-pointer text-center flex-wrap p-2"
        >
          Furniture Haven
        </ScrollLink>
        <ul className="uppercase p-4 flex flex-col text-center">
          <RouterLink
            to="/"
            className="p-3 hover:text-red-500 transition ease-in-out rounded-xl font-semibold cursor-pointer"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/shoppage"
            className="p-3 hover:text-red-500 transition ease-in-out rounded-xl font-semibold cursor-pointer"
          >
            Products
          </RouterLink>
          <RouterLink
            to="contact"
            className="p-3 hover:text-red-500 transition ease-in-out rounded-xl font-semibold cursor-pointer"
          >
            Contact Us
          </RouterLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
