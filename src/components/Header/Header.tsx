import React, { Dispatch, SetStateAction } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import SideBar from "./SideBar";

interface MyComponentsProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  banner: boolean;
}

const generateClassNames = (classes: string[]) => {
  return classes.join(" ");
};
const headerIcon = [
  "cursor-pointer",
  "list-none",
  "font-platypi",
  "font-light",
];
const Header: React.FC<MyComponentsProps> = ({
  darkMode,
  setDarkMode,
  banner,
}) => {
  const setMode = () => {
    setDarkMode((prev) => !prev);
  };

  // #ECE6D5;
  // #050C0F
  return (
    <div>
      <nav
        className={`flex flex-row justify-between items-center text-[12px] lg:text-[14px] h-fit w-full px-4 lg:py-6 py-4 ${
          darkMode ? "text-gray-200" : "text-gray-800"
        }`}
      >
        <li className={generateClassNames(headerIcon)}>About</li>
        <li className={generateClassNames(headerIcon)}>Skills</li>
        <li className={generateClassNames(headerIcon)}>My Resume</li>
        <li className={generateClassNames(headerIcon)}>Get in touch</li>
        <button
          onClick={setMode}
          className={`text-[20px] ${generateClassNames(headerIcon)}`}
        >
          {darkMode ? <IoMdSunny className='text-yellow-500' /> : <IoMdMoon />}
        </button>
      </nav>
      {!banner && <SideBar />}
    </div>
  );
};

export default Header;
