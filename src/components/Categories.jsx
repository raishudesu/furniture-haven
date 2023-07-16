import React from "react";
import Beds from "../assets/categories/Beds.png";
import Chairs from "../assets/categories/Chairs.png";
import Sofas from "../assets/categories/Sofas.png";
import Tables from "../assets/categories/Tables.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Categories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
  };
  const categoryImages = [Beds, Chairs, Sofas, Tables];
  return (
    <div className="w-full max-h-fit overflow-hidden py-2">
      <div className="flex flex-col justify-center items-center py-4">
        <div className="text-center lg:text-start w-full 2xl:max-w-[55%]">
          <h1 className="text-2xl font-semibold px-8">Categories</h1>
          <div className="">
            <Slider {...settings} className="py-4">
              {categoryImages.map((image) => {
                return <img src={image} alt="/" className="border-2" />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
