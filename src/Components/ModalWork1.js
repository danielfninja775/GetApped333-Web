import React, { useState } from "react";
import Modal from "react-modal";

// Modal styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    bottomBorderRadius: "7px",
    padding: "0",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 100,
  },
};

// Modal component
const ModalWork1 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <main>
      <button
        onClick={openModal}
        className=" text-white  font-thin  absolute border-none shadow-black shadow-lg "
      >
        Work
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="max-h-[850px] h-[600px] w-[360px] -mt-[80px] overflow-y-auto sm:w-[700px] sm:h-[900px] sm:-mt-32 py-20">
          <div className="  ">
            <img
              src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="  sm:w-full h-[200px] w-full sm:h-[370px]   object-cover"
              alt="/"
            />
            <div className="mt-5 sm:mt-7">
              <p className="text-[#171747] pt-4 px-7 text-justify text-xs sm:text-sm">
                GetApped333 Company is responsible for designing, creating, and
                maintaining websites and applications for clients. Our primary
                goal is to help businesses establish a strong online presence
                and provide effective digital solutions.
              </p>
              <p className="text-[#171747] pt-4 px-7 text-justify text-xs sm:text-sm ">
                We starts from understanding the client's requirements and
                objectives. Wr analyze your target audience, industry, and
                competition to develop a strategy that aligns with their goals.
                We work closely with the client to determine the features,
                functionality, and design of the website or application.
              </p>
              <p className="text-[#171747] pt-4  px-7 text-justify text-xs sm:text-sm ">
                Once the strategy is in place, the developers begin the process
                of coding and programming. We use various programming languages,
                such as HTML,Tailwind CSS, JavaScript, and PHP, to build the
                desired functionalities and interfaces. They ensure that the
                website or application is user-friendly, scalable, and
                compatible with different devices and browsers.
              </p>
              <p className="text-[#171747] pt-4  px-7 text-justify text-xs sm:text-sm ">
                Once the development phase is complete, Our Team conducts
                rigorous testing to identify and fix any bugs or issues. We
                ensure that the website or application is responsive,
                fast-loading, and delivers a seamless user experience.
              </p>
              <p className="text-[#171747] pt-4  px-7 text-justify text-xs sm:text-sm ">
                After the testing phase, Our Team assists in deploying the
                website or application on a hosting server, making it accessible
                to users. We also provide support and maintenance services,
                ensuring that the website or application remains up-to-date,
                secure, and properly functioning.
              </p>
            </div>
            <div class="flex justify-center text-white  mt-10 sm:mt-10 sm:mb-3 ">
              <button
                className="bg-[#FAF] border-none shadow-lg font-medium text-lg"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default ModalWork1;
