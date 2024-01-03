import React from "react";
import triocell from "../Images/triocell.png";

export default function CellTrioCard() {
  return (
    <div className="flex-cols  justify-center bg-[#171747] pt-36 ">
      <div className="flex justify-center">
        <p
          className="flex justify-center bg-[#FAF] text-[#171747]  shadow-lg shadow-black
           font-medium text-sm mt-6 rounded-tl-xl p-1  rounded-br-xl w-[350px] 
              sm:text-[15px] sm:w-[400px]  md:text-[20px] md:w-[500px] "
        >
          Choose a Layout that fits better for your Business
        </p>
      </div>

      <div className="flex justify-center">
        <img src={triocell} alt="/" className="rounded-[50px] p-5 shadow-black shadow-lg " />
      </div>
    </div>
  );
}
