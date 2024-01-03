import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaNodeJs,
  FaReact,
  FaAndroid,
  FaApple,
  FaAngular,
} from "react-icons/fa";

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: 0,
    arrows: false,
  };

  return (
    <main className="w-full bg-[#171747] flex justify-center relative mx-auto pt-10">
      <div className="sm:max-w-[700px] w-full absolute justify-center bg-[#171747] ">
        <div className="h-40 items-center pl-10 sm:pl-28 bg-red">
          <Slider {...settings}>
            <div>
              <FaReact size={75} color="white" className="ml-2" />
              <span className="text-white pt-2  pr-2">React-Native</span>
            </div>
            <div>
              <FaNodeJs size={75} color="white" />
              <span className="text-white pl-2 pt-2">Node. JS</span>
            </div>
            <div>
              <FaAngular size={75} color="white" />
              <span className="text-white pl-2 pt-2">Angular</span>
            </div>
            <div>
              <FaApple size={75} color="white" />
              <span className="text-white pl-4 pt-2">Apple</span>
            </div>
            <div>
              <FaAndroid size={75} color="white" />
              <span className="text-white pl-2 pt-2">Android</span>
            </div>
            <div>
              <FaReact size={75} color="white" />
              <span className="text-white pl-2 pt-2">React. JS</span>
            </div>
          </Slider>
        </div>
      </div>
    </main>
  );
}
