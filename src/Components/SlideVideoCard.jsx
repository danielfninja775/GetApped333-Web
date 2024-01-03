import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlideVideoCard() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: 0,
    arrows: false,
  };

  return (
    <main className="bg-[#171747] flex justify-center w-full pt-10">
      <div className="sm:max-w-[700px] w-full  sm:w-[500px] sm:h-[450px] justify-center rounded-md p-2 bg-[#171747] text-[#171747]">
        <div className="h-48 items-center justify-center bg-[#A8A4E2] rounded-tl-full sm:w-[550px]">
          <div className="flex justify-center">
            <h1 className="text-white  font-medium text-sm pl-[150px] sm:text-lg  p-3 sm:pl-44  ">
              Mobile Development Process
            </h1>
          </div>
          <Slider {...settings}>
            <div className="flex justify-row justify-center bg-[#171747] shadow-black shadow-lg border-none  ">
              <div className="flex justify-center">
                <h2 className="font-medium  p-2 text-white">
                  1 - Requirements gathering and analysis
                </h2>
              </div>

              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="/"
                className="rounded-md shadow-inner"
              />
            </div>
            <div className="flex justify-row justify-center bg-[#171747] shadow-black shadow-lg ">
              <div className="flex justify-center">
                <h1 className="font-medium p-2 text-white">2 - Prototyping</h1>
              </div>
              <img
                src="https://images.unsplash.com/photo-1662634935804-f1f5904c892d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="/"
                className=" rounded-md shadow-inner "
              />
            </div>
            <div className="flex justify-row justify-center bg-[#171747] shadow-black shadow-lg ">
              <div className="flex justify-center">
                <h1 className="font-medium p-2 text-white ">3 - Design</h1>
              </div>
              <img
                src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="/"
                className=" rounded-md shadow-inner"
              />
            </div>
            <div className="flex justify-row justify-center bg-[#171747] shadow-black shadow-lg ">
              <div className="flex justify-center">
                <h1 className="font-medium  p-2 text-white ">
                  4 - Back-End Connection
                </h1>
              </div>
              <img
                src="https://images.unsplash.com/photo-1613068687893-5e85b4638b56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="/"
                className="rounded-md shadow-inner"
              />
            </div>
            <div className="flex justify-row justify-center bg-[#171747] shadow-black shadow-lg ">
              <div className="flex justify-center">
                <h1 className="font-medium  p-2 text-white ">5 - Creating</h1>
              </div>
              <img
                src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="/"
                className="rounded-md shadow-inner "
              />
            </div>
            <div className="flex justify-row justify-center bg-[#171747] shadow-black shadow-lg ">
              <div className="flex justify-center">
                <h1 className="font-medium p-2 text-white">6 - Testing</h1>
              </div>
              <img
                src="https://images.unsplash.com/photo-1519336367661-eba9c1dfa5e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="/"
                className="rounded-md shadow-inner"
              />
            </div>
            <div className="flex justify-row justify-center bg-[#171747] shadow-black shadow-lg ">
              <div className="flex justify-center">
                <h1 className="font-medium  p-2 text-white">7 - Support</h1>
              </div>
              <img
                src="https://images.unsplash.com/photo-1702046988296-40db18f155ad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="/"
                className="rounded-md shadow-inner"
              />
            </div>
            <div className="flex justify-row justify-center bg-[#171747] shadow-black shadow-lg ">
              <div className="flex justify-center">
                <h1 className="font-medium p-2 text-white">8 - Launch</h1>
              </div>
              <img
                src="https://images.unsplash.com/photo-1671418285905-acc08f6c4b59?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="/"
                className="rounded-md shadow-inner"
              />
            </div>
          </Slider>
        </div>
      </div>
    </main>
  );
}
