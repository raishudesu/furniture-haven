import React from "react";
import ToProductsImage from "../assets/ToProductsImage.jpg";
import { Link as RouterLink } from "react-router-dom";

const ToProducts = () => {
  return (
    <div className="w-full max-h-fit p-4 overflow-hidden">
      <div className="flex justify-center items-center text-center lg:text-start">
        <div className="overflow-hidden grid grid-cols-1 md:grid-cols-2 w-full lg:max-w-[1080px] bg-gray-200 rounded-md">
          <div className="flex flex-col justify-center items-center lg:items-start p-4 gap-3">
            <h1 className="text-2xl font-bold">
              Live Comfortably with our Products.
            </h1>
            <p className="text-md">
              Elevate your living spaces with our exquisite furniture
              collection. Experience ultimate comfort and well-being with our
              meticulously crafted pieces at Furniture Haven.
            </p>
            <RouterLink
              to="/shoppage"
              className="px-4 py-3 rounded-full text-white font-semibold bg-[#242424]"
            >
              Shop Now
            </RouterLink>
          </div>
          <div className="overflow-hidden">
            <img src={ToProductsImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToProducts;
