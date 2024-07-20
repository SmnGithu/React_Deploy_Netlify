import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex flex-col bg-[#000000a7] h-[100dvh] justify-center items-center fixed  right-0 md:ml-[90px] xl:ml-[200px] top-0 bottom-0 z-50 w-full">
      <ClipLoader color="white" size={60} />
      {/* <p className="text-lg text-center px-2">{message}</p> */}
    </div>
  );
};

export default Spinner;
