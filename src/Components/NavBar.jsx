import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsClipboardCheck } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { BiAlignLeft } from "react-icons/bi";
import { FiBookOpen } from "react-icons/fi";

import ModalServices from "./ModalServices1";
import ModalAbout1 from "./ModalAbout1";
import ModalContactUs from "./ModalContactUs";
import ModalWork1 from "./ModalWork1";
import ModalConsultation from "./ConsultationCard";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [modal, setModal] = useState(false);
  const emailAddress = "get.apped333@gmail.com";
  const phoneNumber = "+4915730801104";
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <main className="bg-[#171747]">

      {/*TOP MENU*/}
      <div
        className="hidden bg-[#171747] gap-32 p-5 text-white items-center font-sans font-medium pb-16 pr-28 
                   sm:justify-center sm:flex sm:flex-row"
      >
        <div>
          <ModalWork1/>
        </div>

        <div>
          <ModalServices/>
        </div>

        <div>
          <ModalAbout1/>
        </div>

        <div>
          <ModalContactUs/>
        </div>
      </div>

      <div className=" mx-auto flex justify-end items-center p-4 bg-[#171747]">

        {/* LEFT SIDE */}
        <div className="flex items-center  sm:hidden">
          <div className="cursor-pointer" onClick={() => setNav(!nav)}>
            <AiOutlineMenu
              size={30}
              color="white"
              onClick={() => setNav(false)}
            />
          </div>
        </div>

        {/* MOBILE MENU*/}

        {/*OVERLAY*/}
        {nav ? (
          <div className="bg-black/60 fixed w-full h-full z-10 top-0 left-0  "></div>
        ) : (
          ""
        )}

        {/*SIDE DRAWER MENU*/}

        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[260px] h-[400px] rounded-md bg-black z-10  duration-300"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-black z-10 duration-300"
          }
        >
          <AiOutlineClose
            size={30}
            color="white"
            onClick={() => setNav(!nav)}
            className="absolute right-4 top-4 cursor-pointer"
          />

          <nav>
            <div className="flex flex-col p-4 text-white ">
              <div className="text-xl py-4 flex flex-row ">
                <BsClipboardCheck size={25} className="mt-1" />
                <ModalWork1/>
              </div>
              <div className="text-xl py-4 flex flex-row ">
                <FiBookOpen size={25} className="mt-2"/>
                <ModalServices/>
              </div>
              <li className="text-xl py-4 flex flex-row">
                <BiAlignLeft size={25} className="mt-2"/>
                <ModalAbout1/>
              </li>
            
            </div>
            <div className="flex-cols justify-center">
            <h1 className="text-white text-lg justify-center flex ">Contact us today ! </h1>
            <h2  className="text-white text-md flex justify-center"> <ModalConsultation/> </h2>
            </div>
            
            <div className="flex flex-row gap-3 justify-center  pt-16">
              <a href="https://www.facebook.com/profile.php?id=100090704393286">
                <FaFacebookF
                  size={30}
                  color="white"
                  className="hover:h-10 w-10 duration-200"
                  link
                  to="https://www.facebook.com/profile.php?id=100090704393286"
                />
              </a>
              <a href="https://www.instagram.com/get_apped333/">
                <FaInstagram
                  size={30}
                  color="white"
                  className="hover:h-10 w-10 duration-200"
                />
              </a>
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp
                  size={30}
                  color="white"
                  className="hover:h-10 w-10 duration-200"
                />
              </a>
              <a
                href={`mailto:${emailAddress}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillMail
                  size={30}
                  color="white"
                  className="hover:h-10 w-10 duration-200"
                />
              </a>
            </div>
          </nav>
        </div>
      </div>

      <div>
        {modal && (
          <div className="w-[500px] h-[500px] rounded-lg absolute">

            <div
              onClick={toggleModal}
              className=" bg-black/60 z-10 w-full h-full top-0 left- right-0 bottom-0 fixed"></div>

            <div className=" flex justify-center absolute bg-white w-[500px] h-[500px] z-10 rounded-lg ml-60 ">
              <h2>Hello Modal</h2>

              <button className="absolute bottom-0 " onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default NavBar;
