import React, { useRef, useEffect } from "react";
import { FaGithub, FaInstagram, FaTh, FaWhatsapp } from "react-icons/fa";
import ProfilePic from "../assets/profile.jpg";
import { FcGoogle } from "react-icons/fc";
import { RxVideo } from "react-icons/rx";
import { TfiTwitter } from "react-icons/tfi";
import { BsTiktok } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";

const Profile = () => {
  console.log("profile render");

  const Button = ({ Icon, Name }) => {
    return (
      <button className="bg-[#f5f5f5] relative border-2 boder-[#f5f5f5] w-[94%] h-[50px] flex items-center justify-center p-[8px] rounded-lg">
        <Icon fontSize={40} className="absolute left-8" />
        <h1>{Name}</h1>
      </button>
    );
  };


  return (
    <div className="flex flex-col relative overflow-y-scroll items-center h-full md:h-[83dvh] w-full">
      <div className="absolute md:relative  flex flex-col md:flex-row items-center w-full md:w-[1200px] ">
        <div className="flex flex-col cursor-default reltive md:absolute top-0 w-full h-[180px] md:max-w-[350px] md:min-h-[400px] items-center">
          <img
            src={ProfilePic}
            alt="user profile"
            className="w-[100px] h-[100px] lg:w-[300px] lg:h-[300px] mt-[10px]  rounded-full object-cover"
          />
          <h1 className="text-[20px]">Simon Githu</h1>
          <p className="text-lg text-[rgb(53,53,53)] ">A fullstack web developer</p>
        </div>
        <div className="relative md:absolute md:top-0 right-0 w-full md:w-[840px] flex flex-wrap cursor-default items-center mt-0 md:mt-0 md:ml-10">
          <div className="flex flex-col items-center w-full">
            <h1 className="text-[20px] md:mt-[10px]">Contacts Details</h1>
            <div className="flex flex-wrap w-full">
              <div className="w-full flex flex-col items-center mt-[0px] gap-[15px]">
                <Button Icon={RxVideo} Name="YouTube" />
                <Button Icon={FaInstagram} Name="Instagram" />
                <Button Icon={TfiTwitter} Name="Twitter" />
                <Button Icon={FaWhatsapp} Name="WhatsApp" />
                <Button Icon={BsTiktok} Name="TikTok" />
                <Button Icon={AiOutlineLinkedin} Name="LinkedIn" />
                <Button Icon={FaGithub} Name="Github" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
