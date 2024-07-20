import React from "react";
import { TfiArrowLeft } from "react-icons/tfi";

const Navigation = ({
  header,
  handleBackBtnCLick,
  savebtn,
  cancelbtn,
  searchbar,
}) => {
  const styles =
    " text-gray-900 dark:text-white   flex flex-row top-0 z-20 absolute w-full right-0  border-[#f5f5f5] dark:border-[#202020] h-[50px] md:h-[60px]";

  return (
    <>
      <div className={styles}>
        <div className="w-full h-full relative items-center justify-around flex flex-row ">
          {handleBackBtnCLick || cancelbtn ? (
            <button
              className="flex flex-row cursor-pointer left-1 w-[42px] h-[42px] absolute  items-center  hover:font-semibold hover:bg-[#CECECE] dark:hover:bg-[#202020] justify-center hover:rounded-full"
              onClick={handleBackBtnCLick}>
              {!cancelbtn ? <TfiArrowLeft fontSize={25} /> : cancelbtn}
            </button>
          ) : ""}

          <h2 className="font-medium text-xl">{header}</h2>
          {savebtn}
          {searchbar}
        </div>
      </div>
    </>
  );
};

export default Navigation;
