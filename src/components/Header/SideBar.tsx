import React from "react";
import { FaGithub, FaLinkedin, FaUserCircle } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const generateClassNames = (classes: string[]) => {
  return classes.join(" ");
};

const liClassNames = [
  "w-[160px]",
  " h-[60px]",
  "flex",
  "justify-between",
  "items-center",
  "ml-[-100px]",
  "hover:ml-[-10px]",
  "duration-300",
  "px-4",
  "cursor-pointer",
];
const pClassNames = [
  "flex",
  "justify-between",
  "items-center",
  "text-white",
  "w-full",
];
const SideBar = () => {
  return (
    <ul className='hidden lg:flex flex-col fixed top-[35%] left-0'>
      <li className={`bg-blue-600 ${generateClassNames(liClassNames)}`}>
        <p className={generateClassNames(pClassNames)}>
          LinkedIn <FaLinkedin size={30} />
        </p>
      </li>

      <li className={`bg-gray-800 ${generateClassNames(liClassNames)}`}>
        <p className={generateClassNames(pClassNames)}>
          GitHub <FaGithub size={30} />
        </p>
      </li>

      <li className={`bg-red-600 ${generateClassNames(liClassNames)}`}>
        <p className={generateClassNames(pClassNames)}>
          Email <SiGmail size={30} />
        </p>
      </li>
      <li className={`bg-[#565f69] ${generateClassNames(liClassNames)}`}>
        <p className={generateClassNames(pClassNames)}>
          Resume <FaUserCircle size={30} />
        </p>
      </li>
    </ul>
  );
};

export default SideBar;
