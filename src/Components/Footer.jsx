import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

export default function Footer() {
  const emailAddress = "get.apped333@gmail.com";
  const phoneNumber = "+4915730801104";

  return (
    <div className="flex bg-[#171747] w-full h-[10 items-center 0px] pt-[180px] sm:pt-[150px] md:pt-[100px]">
      <div className="flex flex-row sm:gap-10 p-5 absolute  justify-center w-full bg-[#141447]">
        <a href="https://www.facebook.com/profile.php?id=100090704393286">
          <FaFacebookF
            size={30}
            color="white"
            className=" hover:h-10 w-10 duration-200 "
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
    </div>
  );
}
