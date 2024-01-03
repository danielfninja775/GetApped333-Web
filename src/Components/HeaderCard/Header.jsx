import React from "react";
import Logo from "../../Images/logo.png";


export default function Header() {
  return (
    <div className="flex  h-[200px] bg-[#171747]">
      <div className="mx-auto flex justify-center  text-center  items-center ">
        <div className=" mt-[-120px] absolute ">
          <img
            src={Logo}
            className=" w-32 rounded-full lg:w-32  shadow-md shadow-white sm:w-44 
             hover:w-[140px]  duration-300"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}
