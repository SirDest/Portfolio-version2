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
    <div
      className='absolute flex justify-between bg-[#86a184] gap-12 bottom-4 text-[15px] px-10 py-2 w-fit
      h-fit  left-1/2 transform -translate-x-1/2 font-light'
    >
      <a href='/'>
        <FaLinkedin className='text-blue-600 text-[25px]' />
      </a>
      <a href='/'>
        <FaGithub className='text-black text-[25px]' />
      </a>
      <a href='/'>
        <FaUserCircle className='text-green-600 text-[25px]' />
      </a>
      <a href='/'>
        <SiGmail className='text-red-600 text-[25px]' />
      </a>
      <button onClick={removeBanner} className='text-[22px] text-black'>
        <IoCloseOutline />
      </button>
    </div>
  );
};

export default Banner;
