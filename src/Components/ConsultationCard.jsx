import React, { useState, useEffect, cloneElement } from "react";
import Modal from "react-modal";
import Logo from "../Images/logo2.png";
import { db } from "../ServicesAPI";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";

// Modal styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 100,
  },
};

// Modal component
const ModalConsultation = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  //FIREBASE CONNECTION
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [about, setAbout] = useState("");

  async function handleAdd() {
    await addDoc(collection(db, "posts"), {
      name: name,
      email: email,
      about: about,
      number: number,
    })
      .then(() => {
        console.log("Information has been saved");
        setName("");
        setEmail("");
        setAbout("");
        setNumber("");
      })
      .catch((error) => {
        console.log("Error saving information" + error);
      });
  }

  return (
    <main>
      <div
        onClick={openModal}
        className=" bg-[#171747] text-sm flex justify-center text-white font-sans items-center
         font-medium  mt-2 w-[215px] sm:text-md  sm:p-2 p-1 sm:mt-2 sm:w-[300px] md:text-lg 
         rounded-tl-xl rounded-br-xl hover:bg-[#A8A4E2] hover:text-white shadow-black shadow-md "
      >
        Free Consultation
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          className="grid grid-row-4 justify-items-center h-[690px] w-[360px]  overflow-y-auto 
                      sm:h-[750px] sm:w-[500px] "
        >
          <div className="">
            <img src={Logo} className="h-[200px] w-[200px] mt-2 shadow-[#FAF] shadow-md rounded-full" alt="/" />
          </div>
          <div>
            <h1 className="text-[#171747] font-sans p-2 rounded-md font-semibold shadow- shadow-md ">
              Let's Build Something Together
            </h1>
          </div>

          <div className="grid grid-row-4 justify-items-center mt-5 sm:mt-7">
            <input
              className=" shadow appearance-none border rounded w-60 py-2 px-3 my-1
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="shadow appearance-none border rounded w-60 py-2 px-3 my-1
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="shadow appearance-none border rounded w-60 py-2 px-3 my-1
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Phone Number"
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
             
            />
             <label className="pt-6">Tell us about your project... </label>
            <textarea
              className="shadow appearance-none border rounded w-[300px] h-[100px] py-2 px-3 my-1.5
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="How can we help you?"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              rows={5}
              cols={50}
            />

            <button
              className=" bg-[#171747]  text-white w-44 border-none shadow-black shadow-md font-medium text-lg "
              type="submit"
              onClick={handleAdd}
            >
              Submit
            </button>
          </div>

          <div class=" text-white mt-2 sm:mt-3 sm:my-3 "></div>

          <div class="text-white  ">
            <button
              className=" bg-[#FAF] border-none shadow-[#171747] shadow-md font-medium text-lg "
              onClick={closeModal}
            >
              Close{" "}
            </button>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default ModalConsultation;
