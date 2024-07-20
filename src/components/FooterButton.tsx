import React from "react";
import { NavLink } from "react-router-dom";

const FooterButton = ({
  ariaLabel,
  Icon,
  Icon2,
  Name,
  To
}) => {

  // let styles;
  // if (Hide === true) {
  //   styles = "hidden md:flex";
  // } else {
  //   styles = "flex flex-col md:flex-row ";
  // }
  const isActiveStyles = `flex flex-col md:flex-row  md:w-full text-[#00acee] font-bold md:font-semibold `;
  const notActiveStyles = `flex flex-col md:flex-row  md:w-full text-gray-900  md:hover:text-white  md:hover:font-semibold`;


  const Button = ({ ariaLabel, Icon3 }) => {
    return (
      <button
        aria-label={ariaLabel}
        className={`flex flex-col md:flex-row md:bg-[#cecece] rounded-full md:w-[130px] transition-all duration-150 ease-in  h-[50px] w-full items-center justify-center cursor-pointer z-0 md:justify-end text-[12px] md:text-[15px] md:hover:bg-[rgb(53,53,53)]`}
      >
        <div
          className={`md:justify-start lg:justify-center flex flex-col gap-0 md:gap-[5px] lg:gap-[10px] md:flex-row w-full items-center`}
        >
          <div className="relative md:ml-[5px] lg:ml-0 sm:ml-0">
            <Icon3 className="cursor-pointer text-[32px]" />
          </div>
          <p>{Name}</p>
        </div>
      </button>
    );
  };
  return (
    <NavLink
      aria-label={Name + "page"}
      to={To}
      preventScrollReset={true}
      className={({ isActive }) =>
        isActive ? isActiveStyles : notActiveStyles
      }
    >
      {({ isActive }) =>
        isActive ? (
          <Button Icon3={Icon2} ariaLabel={ariaLabel} />
        ) : (
          <Button Icon3={Icon} ariaLabel={ariaLabel} />
        )
      }
    </NavLink>
  );
};

export default FooterButton;
