import React, { Dispatch, SetStateAction } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

interface MyComponentsProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const generateClassNames = (classes: string[]) => {
  return classes.join(" ");
};
const headerIcon = [
  "hover:scale-125",
  "ease-in-out",
  "duration-300",
  "cursor-pointer",
  "list-none",
  "uppercase",
];
const Header: React.FC<MyComponentsProps> = ({ darkMode, setDarkMode }) => {
  const setMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <nav className='font-platypi font-light flex flex-row justify-between text-[13px] md:text-[17px] h-fit w-full px-4 lg:py-6 py-4'>
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
  );
};

export default Header;
