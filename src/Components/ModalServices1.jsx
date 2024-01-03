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
const ModalServices = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className=" ">
      <button
        onClick={openModal}
        className=" font-thin text-white absolute border-none shadow-black shadow-lg"
      >Services
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="max-h-[850px] h-[600px] w-[360px] overflow-y-auto  -mt-[80px] sm:w-[700px] sm:h-[900px]  sm:-mt-32 py-20">
          <div className="  ">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="  sm:w-full h-[200px] w-full sm:h-[370px]    object-cover"
              alt="/"
            />
            <div className="   ">
            <p className="text-[#171747]  px-5 pt-2 text-justify sm:pt-10  text-xs sm:text-sm">
             <strong>1. Website Development: </strong> GetApped333 designs and develops
              responsive and user-friendly websites tailored to the specific
              requirements of clients. This includes front-end development,
              back-end development, and content management system integration.</p>

              <p className="text-[#171747] px-5 pt-3 text-justify sm:pt-10  text-xs sm:text-sm  ">
             <strong> 2. Mobile App Development:  </strong> We create mobile applications for
              Android and iOS platforms, ensuring seamless functionality and an
              intuitive user interface. These apps care custom-built or
              developed using React.JS and React-Native frameworks and technologies.
              </p>
              <p className="text-[#171747] px-5 pt-3 text-justify sm:pt-10  text-xs sm:text-sm ">
            <strong>3.E-commerce Solutions: </strong> Our company also
              assists in developing online stores and e-commerce platforms. We
              integrate secure payment gateways, shopping carts, and inventory
              management systems to provide a smooth online shopping experience.</p>
              <p className="text-[#171747]  px-5 pt-3 text-justify sm:pt-10  text-xs sm:text-sm  ">
             <strong>4. UI/UX Design: </strong>  We are focus on creating visually appealing and
              user-friendly interfaces, ensuring a positive user experience.
              Designers work closely with clients to understand their brand
              identity and target audience, resulting in unique and engaging
              designs.</p>
              <p className="text-[#171747] px-5 pt-3 text-justify sm:pt-10  text-xs sm:text-sm ">
             <strong>5. Custom Software Development: </strong>  We offer custom
              software development services, building solutions that address
              specific business needs. This may include developing enterprise
              resource planning systems, customer relationship management
              software, or other customized applications.</p>
              <p className="text-[#171747] px-5 pt-3 text-justify  sm:pt-10  text-xs sm:text-sm  ">
              <strong>6. Web and Mobile </strong> 
              Maintenance: Additionally, we provide ongoing support and
              maintenance for websites and mobile applications, ensuring they
              stay up-to-date and functional with the latest technologies and
              security practices.</p>
              <p className="text-[#171747] px-5 pt-3 text-justify sm:pt-10  text-xs sm:text-sm ">
              <strong>7. Digital Marketing: </strong> We also offer digital marketing services to help
              businesses promote their online presence. This includes search
              engine optimization (SEO), social media marketing, content
              marketing, and pay-per-click advertising campaigns.</p>
              <p className="text-[#171747]  px-5 pt-3 text-justify sm:pt-10  text-xs sm:text-sm">
              <strong>8. Cloud </strong> 
              Services: Providing cloud-based solutions,
              helping clients in hosting, scaling, and securing their
              applications on cloud platforms. This allows for easy
              accessibility, scalability, and enhanced security.</p>
              <p className="text-[#171747]  px-5 pt-3 text-justify sm:pt-10  text-xs sm:text-sm ">
               <strong> 9. Web Hosting
              and Domain Registration: </strong>GetApped333 also provides web hosting
              and domain registration services, making it convenient for clients
              to manage their online presence under one roof.</p>
              <p className="text-[#171747]  px-5 pt-3 text-justify sm:pt-10  text-xs sm:text-sm ">
              <strong>10. IT Consulting </strong> 
              and Support: We offer consultation services to guide clients
              in choosing the right technologies and solutions for their
              projects. Additionally, technical support is provided to resolve
              any issues or challenges faced by clients during the development
              or maintenance phase.</p>
            
        
            </div>
            <div class="flex justify-center text-white mb-1 my-8 sm:mt-10 sm:mb-3 ">
              <button
                className="  bg-[#FAF] border-none   shadow-lg font-medium text-lg"
                onClick={closeModal}
              >
                Close{" "}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalServices;
