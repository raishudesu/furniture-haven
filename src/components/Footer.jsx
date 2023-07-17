import React from "react";
import { BiCopyright } from "react-icons/bi";
import Logo from "../assets/F.png";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="w-full max-h-fit text-white text-sm overflow-hidden">
      <div className="bg-[#242424] flex flex-col items-center justify-center p-6 gap-2">
        <Newsletter />
        <img src={Logo} alt="/" className="w-[30px]" />
        <div className="flex justify-center items-center gap-1">
          <BiCopyright />
          <h1>Furniture Haven</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 mt-2">
          <h1>All rights reserved.</h1>
          <h1>2023</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
