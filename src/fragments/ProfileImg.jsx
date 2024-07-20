import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import FooterButton from '../components/FooterButton.jsx'

const ProfileImg = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      {currentUser ? (
        <FooterButton
          Icon={FaUserCircle}
          Icon2={FaUserCircle}
          Name="You"
          To="/Profile"
        />
      ) : (
        <FooterButton
          Icon={FaUserCircle}
          Icon2={FaUserCircle}
          Name="Login"
          To="/signin"
        />
      )}
    </>
  );
};

export default ProfileImg;
