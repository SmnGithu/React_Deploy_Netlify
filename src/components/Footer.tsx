import React, {  } from "react";
import FooterButton from "./FooterButton.tsx";
import { RiHome5Line, RiHome5Fill } from "react-icons/ri";
import '../index.css'
import { AiFillInfoCircle, AiFillProject, AiOutlineInfoCircle, AiOutlineProject } from "react-icons/ai";
import { HiLightBulb, HiOutlineLightBulb, HiOutlineUser, HiUser } from "react-icons/hi2";

const Footer = () => {
  console.log("Footer render");
  return (
    <>
      <div
        className={`z-10 flex w-full fixed md:hidden right-0 left-0 bottom-0 h-[50px] pt-0 border-t-[1px] border-[#f5f5f5]`}
      >
        <div className="items-center h-full w-full flex flex-row md:hidden relative gap-0 hide-scrollbar  md:border-r-[2px] border-[#f5f5f5] dark:border-[#202020]">
          <div className=" flex md:px-[8px] w-full items-center flex-row   justify-around ">
         
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
                To="/profile"
                ariaLabel="profile button"
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
