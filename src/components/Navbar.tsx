import React, { useEffect, useState } from "react";
import FooterButton from "./FooterButton.tsx";
import { RiHome5Line, RiHome5Fill } from "react-icons/ri";
import "../index.css";
import {
  AiFillInfoCircle,
  AiFillProject,
  AiOutlineInfoCircle,
  AiOutlineProject,
} from "react-icons/ai";
import { HiLightBulb, HiOutlineLightBulb, HiOutlineUser, HiUser } from "react-icons/hi2";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [title, setTitle] = useState("");
  const [toggleSidebar,setToggleSidebar] = useState(false);
  const location = useLocation();

  const FooterButtons = () =>{
    return(
      <>
             <FooterButton
              Icon={RiHome5Line}
              Icon2={RiHome5Fill}
              Name="Home"
              To="/"
              ariaLabel="home button"
            />
            <FooterButton
              Icon={AiOutlineInfoCircle}
              Icon2={AiFillInfoCircle}
              Name="About"
              To="/about"
              ariaLabel="notification button"
            />
            <FooterButton
              Icon={HiOutlineLightBulb}
              Icon2={HiLightBulb}
              Name="Experience"
              To="/experience"
              ariaLabel="scripts button"
            />
            <FooterButton
              Icon={AiOutlineProject}
              Icon2={AiFillProject}
              Name="Projects"
              To="/projects"
              ariaLabel="videos button"
            />
            <FooterButton
              Icon={HiOutlineUser}
              Icon2={HiUser}
              Name="Me"
              To="/Profile"
              ariaLabel="profile button"
            />
      </>
    )
  }
  useEffect(() => {
    if (location.pathname !== "/") {
      setTitle(
        location.pathname[1].toUpperCase() + location.pathname.slice(2, 50)
      );
    }
  }, [location]);
  return (
    <>
      <div className="flex flex-row bg-inherit relative h-[50px] md:h-[17vh] w-full  items-center justify-center z-50 border-b-[1px] border-[#f5f5f5]">
        <div className="flex flex-row justify-center relative items-center w-full md:w-[1200px] h-[70px]">
          <h1 className="cursor-default  md:absolute left-4 text-[25px] text-gray-900">
            {(location.pathname === "/") ? "Simon Githu" : title}
          </h1>
          <button
            onClick={() => setToggleSidebar(!toggleSidebar)}
            className="hidden md:flex lg:hidden flex-col absolute right-6 justify-between h-[24px] w-[30px] cursor-pointer"
          >
            <span
              className={`${
                toggleSidebar &&
                "transform rotate-45 translate-x-[5px] translate-y-[7px]"
              } w-[100%] h-[2px] bg-black`}
            ></span>
            <span
              className={`${
                toggleSidebar && "opacity-0"
              } w-[100%] h-[2px] bg-black`}
            ></span>
            <span
              className={`${
                toggleSidebar &&
                "transform rotate-[-45deg] translate-x-[5px] translate-y-[-15px]"
              } w-[100%] h-[2px] bg-black`}
            ></span>
          </button>
          <div className="hidden  lg:flex flex-grow max-w-[600px] items-center  gap-5 justify-around h-full">
            <FooterButtons/>
          </div>
        </div>
      </div>
      {toggleSidebar && (
        <>
          <div
            className="fixed cursor-pointer md:ml-[90px] xl:ml-[200px] right-0 flex flex-col lg:hidden h-[100dvh]  bg-[#000000a7] hide-scrollbar z-40 md:z-10 w-full"
            onClick={() => setToggleSidebar(false)}
          ></div>
          <div className="bg-[#f5f5f5] mt-[10px] z-50 rounded-lg w-[200px] items-center p-10 flex flex-col lg:hidden gap-5 justify-around absolute right-4">
            <FooterButtons/>
          </div>
        </>
      )}
    </>
  );
}
