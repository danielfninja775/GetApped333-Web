import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import whiteblacklogo from "../Images/whiteblacklogo.png";
import ModalConsultation from "./ConsultationCard";

export default function ModalContactUs() {
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
    <main>
      <button
        onClick={toggleModal}
        className="font-thin text-white absolute border-none  shadow-black shadow-lg"
      >
        Contact us
      </button>

      {/*MODAL*/}
      {modal && (
        <div className="flex justify-evenly items-center absolute  inset-0">
          {/*OVERLAY*/}
          <div
            onClick={toggleModal}
            className=" bg-black/60 z-10 w-full h-full top-0 left-0
           right-0 bottom-0  fixed"
          ></div>

          {/*MODAL OPEN*/}
          <div
            className="bg-black w-[330px] z-10 rounded-xl absolute flex-col justify-center  
                       sm:w-[500px] text-sm sm:h-[650px]"
          >
            <h2 className="p-5 text-2xl items-center text-center pt-10">
              Are you in need of a reliable and professional web and application
              development company ?
            </h2>
            <p className=" p-5 text-lg items-center text-center pt-4">
              Look no further! We are a team of highly skilled and experienced
              developers eager to bring your visions to life.
            </p>
            <div className="flex-cols justify-center">
              <div className="flex justify-center">
                <h1 className="text-lg">Contact us today!</h1>
                </div>
                <div className="flex justify-center">
                  <ModalConsultation />
                </div>
              
            </div>
            <div className="flex flex-row gap-3 justify-center  pt-10">
              <a href="https://www.facebook.com/profile.php?id=100090704393286">
                <FaFacebookF
                  size={30}
                  color="white"
                  className=" hover:h-10 w-10 duration-200"
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
            <div className="flex justify-center pt-1">
              <img src={whiteblacklogo} alt="/" className="w-48" />
            </div>

            <button
              className="text-white text-lg font-bold bottom-1 absolute right-1 border-none pt-5"
              onClick={toggleModal}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
