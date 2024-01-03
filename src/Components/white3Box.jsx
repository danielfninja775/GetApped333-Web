import React from "react";
import { FiCheck } from "react-icons/fi";

export default function White3BoxCard() {
  return (
    <main
      className="w-full flex flex-col justify-center items-center gap-14 bg-[#171747] text-[#171747] py-10
                     sm:flex sm:flex-row  sm:px-5 md:gap-6 lg:gap-10"
    >
      <div
        className=" bg-slate-300 rounded-lg hover:bg-[#FAF] hover:text-white w-72 h-48 p-5 shadow-lg shadow-black
                     md:h-60 sm:h-72 lg:h-52 "
      >
        <span className="font-bold py-2 text-lg flex flex-row ">
          <FiCheck size={30} color="red" className="pr-2" />
          Tailored AI Solutions:
        </span>
        <br />
        Customized AI solution for mobile apps, web apps, or desktop computers
        that aligns with your specific business needs.
      </div>

      <div
        className="bg-slate-300 rounded-lg w-72 p-5 h-48 shadow-black shadow-lg hover:bg-[#FAF] hover:text-white 
                    md:h-60 sm:h-72 lg:h-52"
      >
        <span className="font-bold py-2 text-lg flex flex-row">
          <FiCheck size={30} color="red" className="pr-2" />
          Expert Development:
        </span>
        <br /> Our team of AI professionals has the expertise to bring your
        vision to life.
      </div>

      <div
        className="bg-slate-300 rounded-lg hover:bg-[#FAF] hover:text-white w-72 p-5 h-48 shadow-black shadow-lg
                    md:h-60 sm:h-72 lg:h-52"
      >
        <span className="font-bold py-2 text-lg flex flex-row">
          <FiCheck size={30} color="red" className="pr-2" />
          Ongoing Support:
        </span>
        <br />
         Developing your software; we ensure it continues to evolve with your
        business.
      </div>
    </main>
  );
}
