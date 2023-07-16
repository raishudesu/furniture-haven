import React from "react";
import MainImage from "../assets/HeroMain.jpg";
import MainImage1 from "../assets/HeroMain1.jpg";
import HeroImage from "../assets/HeroImage1.jpg";
import HeroSlider from "./HeroSlider";
import { Link } from "react-scroll";

const Hero = () => {
  const bgImage = {
    backgroundImage: `url(${MainImage1})`,
  };
  return (
    <div className="w-full max-h-fit overflow-hidden">
      <div
        className="flex flex-col lg:flex-row bg-cover justify-center items-center text-center lg:text-start p-4 gap-10 max-h-fit lg:h-screen"
        style={bgImage}
      >
        <div className="lg:mb-16 flex flex-col justify-center items-center lg:items-start lg:w-[50%] gap-6">
          <h1 className="text-6xl font-bold">
            A Showcase of Our Finest Furniture
          </h1>
          <p className="w-[80%]">
            Welcome to Furniture Haven, your one-stop shop for the finest
            furniture in town. We have a wide selection of furniture to choose
            from, including sofas, chairs, beds, tables, and more. We also offer
            a variety of styles to suit your taste, from modern to traditional.
          </p>
          <div className="">
            <Link
              to="productspage"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="px-4 py-3 bg-[#242424] rounded-full text-white font-semibold cursor-pointer"
            >
              Check it Out
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[70%] lg:w-[35%] lg:mb-16 p-6">
          <HeroSlider />
        </div>
      </div>
    </div>
  );
};

export default Hero;
