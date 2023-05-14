

import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import {BsSearch} from "react-icons/bs";

const Navbar = () => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // close menu on click
  const closeMenu = () => setClick(false);

  // change nav color when scrolling

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        color
          ? "header bg-[#ff2200]  z-50 spacingYtext rajez spacingYlogo"
          : "header bg-[#fa4529] bg-opacity-30 rajez"

       
      }
    >
      <nav className="navbar ">
   

    
            <div className="flex pt-2">
      
          <div>
        <img src="./images/logo-allegient.png"/>
          </div>
          </div>
       
     

        <ul className={click ? "    nav-menu active md:space-y-0 space-y-4  lg:pl-[1200px]" : "nav-menu  lg:pl-[1200px]"}>
          <li className="group dropdown no-underline text-black drop-shadow-2xl md:flex hidden nav-item text-[16px] uppercase  nav-desk font-bold   font-sans hover:text-primary group relative cursor-pointer">
          <Link to="/" className="text-white no-underline"> Home </Link>  
        
          </li>
     
          <li className="md:hidden block text-white">
            <Link to="/" className="text-white"> <div className="py-2 text-white flex items-center justify-center w-full">
       
            <p >  HOME</p>
            </div>
            </Link>
             
          </li>


          <li className="group dropdown drop-shadow-2xl  md:flex hidden nav-item text-[16px] uppercase  nav-desk font-bold  text-white font-sans hover:text-primary group relative cursor-pointer">
    About us
            <div className="group-hover:block lg:mt-12 dropdown-menu absolute hidden transition-all duration-300 translate-y-2 h-auto top-10 md:-left-10">
           
              <div className="top-0 bg-white shadow-xl  text-white text-xs w-[320px] flex flex-col">
                <Link to="/" className=" hover:bg-primary hover:text-white py-2 pt-4  m-1 text-black font-sans pl-4 text-[13px]">
             About us
                </Link>

                <Link to="/" className=" hover:bg-primary hover:text-white py-2 m-1 text-black font-sans pl-4 text-[13px]">
              Contact us
                </Link>

                <Link to="/" className=" hover:bg-primary hover:text-white py-2 m-1 text-black font-sans pl-4 text-[13px]">
            Get Help
                </Link>

                <Link to="/" className=" pb-4    hover:bg-primary hover:text-white py-2 m-1 text-black font-sans pl-4 text-[13px]">
               Work Chase
                </Link>
             
              </div>
            </div>
          </li>
   
          <li className="md:hidden block">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="py-2 ml-5  text-white flex items-center justify-center w-full   ">
                    PRODUCTS
                    <RiArrowDropDownLine
                      className={open ? "rotate-180 transform w-8 h-8" : "w-8 h-8"}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500 mx-12 font-semibold">
                    <div className="bg-white text-black py-4 space-y-2 divide-y divide-red-400 rounded">
                      <li className="hover:bg-gray-50">
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/"> ABout us</Link>
                      </li>
              
                    </div>
                  </Disclosure.Panel>

                </>
              )}
            </Disclosure>
          </li>
     
          <li className="group dropdown  no-underline drop-shadow-2xl md:flex hidden nav-item text-[16px] uppercase  nav-desk font-bold  text-white font-sans hover:text-primary group relative cursor-pointer">
Support
            <div className="group-hover:block mt-12 dropdown-menu absolute hidden transition-all duration-300 translate-y-2 h-auto top-10 md:-left-10">
         
              <div className="top-0 bg-white shadow-xl  text-white text-xs w-[320px] flex flex-col">
              <Link to="/" className=" hover:bg-primary hover:text-white py-2 pt-4  m-1 text-black font-sans pl-4 text-[13px]">
               Home 
                </Link>

                <Link to="/" className=" hover:bg-primary hover:text-white py-2 m-1 text-black font-sans pl-4 text-[13px]">
           About us
                </Link>

                <Link to="/" className=" hover:bg-primary hover:text-white py-2 m-1 text-black font-sans pl-4 text-[13px]">
            Gallery
                </Link>

                <Link to="/" className=" pb-4    hover:bg-primary hover:text-white py-2 m-1 text-black font-sans pl-4 text-[13px]">
          Get help
                </Link>
              </div>
            </div>
          </li>
          {/* for mobile start */}
          <li className="md:hidden block">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="py-2 ml-3 text-white flex items-center justify-center w-full">
                    PARTNER
                    <RiArrowDropDownLine
                      className={open ? "rotate-180 transform w-8 h-8" : "w-8 h-8"}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500 mx-12 font-semibold">
                    <ul className="bg-white text-black py-4 space-y-2 divide-y divide-red-400 rounded">
                      <li className="hover:bg-gray-50">
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/">About us</Link>
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </li>
          {/* for mobile end */}
          <li className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-[16px] uppercase  nav-desk font-bold  text-black font-sans hover:text-primary group relative cursor-pointer">
            <Link to="/" className="text-white no-underline"> Carrear</Link>
     
          </li>
          {/* for mobile start */}
          <li className="md:hidden block">
            <Link to="/"> <div className="py-2 text-white flex items-center justify-center w-full">
      ABOUT US

            </div> </Link>
          </li>
 
          <li className="md:hidden block">
            <Link to="/"> <div className="py-2 text-white flex items-center justify-center w-full">
          GALLERY

            </div> </Link>
          </li>
          <li className="md:hidden block">
            <Link to="/"> <div className="py-2 text-white flex items-center justify-center w-full">
        CONTACT US

            </div> </Link>
          </li>
          {/* for mobile end */}
        </ul>
        <div className="drop-shadow-2xl md:block  group">
          <div className="hover:animate-pulse ">
            <Link
              to="/"
              onClick={closeMenu}
              className="link-color  text-white group-hover:text-white "
            >
        
            </Link>
          </div>
        </div>

        <div className="hamburger  lg:hidden block" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
      </nav>
      <hr

        className="bg-black p-[2px] w-[100%] mx-auto A"
      />


    </div>
  );
};

export default Navbar;
