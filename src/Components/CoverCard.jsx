import React from "react";
import background from '../Images/background2.png'
export default function CoverCard() {
  return (
    <main className=" mx-auto bg-[#171747] flex justify-center">
      <div className="max-h-[500px] max-w-[1200px]  relative flex justify-center ">
        {/*Overlay*/}
        <div
          className="absolute flex h-full text-gray-200 max-h-[500px] w-[370px] flex-col justify-center rounded-tl-[100px] rounded-br-[100px] 
                     sm:w-[600px] md:w-[700px] lg:w-[800px] bg-black/40"
        >
          <div className="flex justify-center">
            <h1
              className="px-4 text-[18px] sm:text-2xl md:text-3xl lg:text-5x1 font-bold">
              Custom Software Development Services
            </h1>
          </div>
        </div>
        <img
          alt="/"
          src={background}
          className=" rounded-tl-[100px]  rounded-br-[100px] object-cover shadow-xl w-[370px]
                       sm:w-[600px] md:w-[700px]  lg:w-[800px] "
        />
      </div>
    </main>
  );
}
