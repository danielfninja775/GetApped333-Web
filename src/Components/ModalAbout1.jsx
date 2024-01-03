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
const ModalAbout1 = () => {
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
        className="font-thin text-white absolute border-none shadow-black shadow-lg"
      >
        About
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="max-h-[850px] h-[600px] w-[360px] -mt-[80px] overflow-y-auto py-20
                       sm:h-[900px] sm:w-[700px] sm:-mt-28">
          <div className="  ">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-[200px] w-full object-cover
                          sm:h-[370px] sm:w-full"
              alt="/"
            />
            <div className=" mt-5 sm:mt-7">
              <p className="text-[#171747]  pt-4 px-7 text-justify text-xs sm:text-sm">
                Their primary goal is to create functional, visually appealing,
                and user-friendly websites and applications that meet the
                specific needs and requirements of their clients. This can range
                from simple websites or mobile applications to complex
                e-commerce platforms or enterprise-level software solutions.
              </p>
              <p className="text-[#171747] pt-4 px-7 text-justify text-xs sm:text-sm ">
                The process typically starts with understanding the client's
                business objectives and target audience. Then, the development
                company works closely with the client to define the project
                scope, including its features, functionalities, and design
                elements.
              </p>
              <p className="text-[#171747] pt-4  px-7 text-justify text-xs sm:text-sm ">
                Throughout the development process, the company will often
                provide opportunities for the client to review and provide
                feedback on the progress. This ensures that the final product
                aligns with the client's vision and meets their business
                objectives.
              </p>
            </div>
            <div class="flex justify-center text-white mt-10 sm:mt-10 sm:mb-3 ">
              <button
                className=" bg-[#FAF] border-none shadow-lg font-medium text-lg"
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

export default ModalAbout1;
