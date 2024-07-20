import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { TfiFlagAlt, TfiHelpAlt, TfiLock, TfiSettings } from "react-icons/tfi";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const Sidebar = ({ setToggleSidebar }) => {

 
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(() =>
    JSON.parse(localStorage.getItem("theme"))
  );

  useEffect(() => {
    if (darkMode === null) {
      document.documentElement.classList.add("light");
    } else {
      localStorage.setItem("theme", JSON.stringify(darkMode));
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [darkMode]);

  console.log("sidebar render");



  const Button = ({ Func, Icon, Name }) => {
    return (
      <button
        className="hover:font-semibold hover:bg-[#CECECE] hover:dark:bg-[#202020] w-[90%] text-[#333333] hover:text-black dark:text-[#999] dark:hover:text-white  flex flex-row items-center rounded-lg gap-3 p-5"
        onClick={Func}
      >
        <Icon fontSize={20} />
        {Name}
      </button>
    );
  };

  return (
    <>
      <div
        className="fixed cursor-pointer md:ml-[90px] xl:ml-[200px] right-0 flex flex-col h-[100dvh]  bg-[#000000a7] hide-scrollbar z-40 md:z-10 w-full"
        onClick={() => setToggleSidebar(false)}
      ></div>
      <div className="bg-white dark:bg-black md:ml-[110px] md:rounded-lg left-0 border-[2px] border-[#f5f5f5] dark:border-[#202020] xl:ml-[220px] mb-[70px] overflow-y-hidden flex flex-col justify-center  items-center fixed h-full md:h-[60%] rounded-[2px] md:mt-[10px] hide-scrollbar w-3/5 md:w-[300px] z-40 ">
        {/* <div className="hidden md:flex bg-white dark:bg-[#202020] w-[30px] h-[30px]  absolute left-[30px] transform rotate-45 rounded-[2px]"></div> */}
        <div className=" h-full flex flex-col items-center md:justify-center overflow-y-hidden absolute  z-50 w-full  hide-scrollbar ">
          <Button Icon={TfiHelpAlt} Name="Help" />
          <Button Icon={TfiFlagAlt} Name="Report a problem" />
          <Button Icon={TfiLock} Name="Privacy" />
          <Button Icon={TfiSettings} Name="Settings" />
          <Button
            Icon={darkMode ? FaToggleOn : FaToggleOff}
            Name={darkMode ? "Dark Mode" : "Light Mode"}
            Func={() => setDarkMode(!darkMode)}
          />
        </div>
      </div>
    </>
  );
};
export default Sidebar;
