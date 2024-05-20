import React, { Dispatch, SetStateAction } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaLinkedin, FaGithub, FaUserCircle } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

interface MyComponentsProps {
  setBanner: Dispatch<SetStateAction<boolean>>;
  banner: boolean;
}

const Banner: React.FC<MyComponentsProps> = ({ setBanner, banner }) => {
  const removeBanner = () => {
    setBanner(false);
  };
  return (
    <div className='absolute flex justify-between bg-[#86a184] gap-6 bottom-10 px-10 py-2 w-fit max-w-screen-sm h-fit  left-1/2 transform -translate-x-1/2 font-light'>
      <a href='/'>
        <FaLinkedin size={30} className='text-blue-600 text-[25px]' />
      </a>
      <a href='/'>
        <FaGithub size={30} className='text-black text-[25px]' />
      </a>
      <a href='/'>
        <FaUserCircle size={30} className='text-gray-300 text-[25px]' />
      </a>
      <a href='/'>
        <SiGmail size={30} className='text-red-600 text-[25px]' />
      </a>
      <button onClick={removeBanner} className='text-black'>
        <IoCloseOutline size={30} />
      </button>
    </div>
  );
};

export default Banner;
