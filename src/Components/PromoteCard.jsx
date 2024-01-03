import React from "react";
import Logo from '../Images/logo.png'
import ModalConsultation from "./ConsultationCard";

export default function PromoteCard() {
  return (
    <div className="bg-[#171747] w-full flex justify-center">
      <div
        className=" max-w-[1200px] w-[500px] min-w-[300px] flex justify-evenly text-center  mx-2 font-sans
               mt-8  h-[420px] p-3 rounded-[30px]
                  sm:w-[670px]   md:w-[740px] lg:w-[800px] shadow-black shadow-lg
                  bg-gradient-to-l from-[#FAF] to-[#171747]
     "
      >
        <div
          className="flex justify-center max-w-[1200px]  w-[190px] h-24  mt-[140px]  -ml-2  
               sm:w-[150px] sm:h-[150px] sm:mt-[90px] 
               md:w-[200px] md:h-[200px]  lg:w-[280px] lg:h-60 lg:mt-[80px] lg:flex lg:ml-4"
        >
          <img
            src={Logo}
            alt="/"
            className="  shadow-lg shadow-white rounded-full"
          />
        
        </div>

        <div
          className=" mt-2 p-2  mx-2 bg-slate-200   shadow-black shadow-lg
          w-[450px]  sm:p-3 h-[380px] sm:h-[380px] sm:max-w-[400px] sm:mt-2 sm:flex -mr-1 sm:items-center  lg:mt-2"
        >
          <div className="sm:-mt-15">
            <h1 className=" font-semibold sm:text-3xl  text-md  text-[#171747] p-1">
              Business Boost
            </h1>
            <h2 className="text-[#171747] text-sm ">
              Unlock new opportunities and increase operational efficiency with
              custom apps.
            </h2>

            <h1 className=" font-semibold sm:text-lg  text-md text-[#171747]">
              Cross-App Platform
            </h1>
            <h2 className="text-[#171747] text-sm">
              We use cross-platform development with React Native{" "}
            </h2>

            <h1 className=" font-semibold sm:text-lg  text-md text-[#171747]">
              Web App Development
            </h1>
            <h2 className="text-[#171747]">Fast and sophisticated</h2>

            <h1 className=" font-semibold sm:text-lg  text-md text-[#171747]">
              Get Your Best Strategy
            </h1>
            <h2 className="text-[#171747] text-sm">
              Get a customized mobile app or web app development strategy
              <br /> fine-tuned with your business requirements
            </h2>

            <h1 className=" font-semibold sm:text-2xl  text-md text-[#171747] sm:mt-1">
              Contact us today !
            </h1>
            <div className="flex justify-center "> 
          <ModalConsultation/>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
