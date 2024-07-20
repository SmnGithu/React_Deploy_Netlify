import React from "react";
import Profile from "../assets/profile.jpg"
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate()

  return (
    <>
    <div className="flex flex-col absolute h-full w-full right-0 ">
      <div className="w-full items-center flex flex-col justify-start overflow-y-scroll pt-0 h-full hide-scrollbar">
      <div className="flex flex-col relative items-center h-[83dvh] w-full">
        <div className="flex flex-col md:flex-row items-center w-full md:w-[600px] md:mt-[70px]">
          <img
            src={Profile}
            alt="user profile"
            className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full object-cover"
          />
          <div className="flex flex-col cursor-default items-center mt-10 md:mt-0 md:ml-10">
            <div className="flex flex-col items-center">
              <p className="font-semibold text-lg text-[rgb(53,53,53)] ">
                Hello, I'm{" "}
              </p>
              <h1 className="font-bold text-[30px] mt-[10px]">Simon Githu</h1>
              <p className="text-[25px] text-[rgb(53,53,53)] font-semibold">
                Fronted Developer
              </p>
            </div>

            <div className="flex mt-[10px] justify-center gap-3">
              <button className="font-semibold transition-all duration-300 ease-in-out p-3 w-32 rounded-full border-2 border-[rgb(53,53,53)]  hover:bg-[rgb(53,53,53)] hover:text-white">
                Download cv
              </button>
              <button onClick={()=>navigate('/contacts')} className="font-semibold transition-all duration-300 ease-in-out p-3 w-32 rounded-full border-2 border-[rgb(53,53,53)] bg-[rgb(0,0,0)] hover:bg-[rgb(53,53,53)] text-white">
                Contact Info
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
     </>
  );
};


export default Feed;
