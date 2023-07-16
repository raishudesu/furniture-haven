import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../assets/slider.json";
import Image1 from "../assets/heroslider1.jpg";
import Image2 from "../assets/heroslider2.jpg";
import Image3 from "../assets/heroslider3.jpg";
import Image4 from "../assets/heroslider4.jpg";
import Image5 from "../assets/heroslider5.jpg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
  };
  const imageSlider = [Image1, Image2, Image3, Image4, Image5];
  return (
    <div className="overflow-hidden">
      <Slider {...settings} className="">
        {imageSlider.map((image, index) => {
          return image ? (
            <div key={index} className="border-2 rounded-md overflow-hidden">
              <img src={image} alt="/" />
            </div>
          ) : (
            <Skeleton className="h-[100%]" />
          );
        })}
      </Slider>
    </div>
  );
};

export default HeroSlider;
