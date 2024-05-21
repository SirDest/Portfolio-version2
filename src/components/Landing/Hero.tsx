import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosLaptop } from "react-icons/io";

const catchyPhrases = [
  "Crafting Digital Experiences, One Line at a Time",
  "Where Pixels Meet Purpose: Your Frontend Solution",
  "Turning Ideas into Interactive Realities",
  "Bringing Designs to Life, Byte by Byte",
  "Frontend Magic: Where Innovation Takes Shape",
  "Code Whisperer: Transforming Vision into Functionality",
  "Elevate Your Web Presence with Elegant Code",
  "Designing Tomorrow's Web, Today",
  "Frontend Wizardry: Shaping the Digital Landscape",
  "Empowering Your Online Journey with Seamless Design",
];
interface MyComponentsProps {
  darkMode: boolean;
}
const Hero: React.FC<MyComponentsProps> = ({ darkMode }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let newIndex = phraseIndex;
      while (newIndex === phraseIndex) {
        newIndex = Math.floor(Math.random() * catchyPhrases.length);
      }
      setPhraseIndex(newIndex);
    }, 10000);

    return () => clearInterval(interval);
  }, [phraseIndex]);
  return (
    <div
      className={`h-full flex flex-col justify-between w-full gap-6 p-4 ${
        darkMode ? "text-gray-300" : "text-gray-800"
      }`}
    >
      <div className='w-full h-fit m-auto font-platypi px-10 flex lg:flex-row text-[12px] flex-col justify-between'>
        <div className='lg:w-2/3 w-full flex'>
          <div className='w-1/2 h-full p-2 md:p-6 text-center items-center flex gap-1'>
            <IoIosLaptop />
            <p>Front-End</p>
          </div>
          <div className='w-1/2 h-full p-2 md:p-6 text-center items-center flex gap-1'>
            <CiLocationOn />
            <p>Nigeria</p>
          </div>
        </div>
        <div className='lg:w-1/3 w-full p-1 md:px-44 lg:p-1 py-2 h-fit'>
          <p>
            Frontend Developer specializing in ReactJs. Thriving in a dynamic
            team environment with a focus on creating seamless user experiences.
            Passionate about building responsive and accessible web
            applications, optimizing performance, and continuous learning to
            enhance development skills.
          </p>
        </div>
      </div>
      <div className='flex flex-col flex-grow m-auto w-full lg:w-[1000px] lg:h-[400px]'>
        <p className='text-[18px] lg:text-[20px] font-platypi'>
          Akinro Destined
        </p>
        <h1 className='text-[70px] lg:text-[80px] font-arges uppercase font-extrabold tracking-wide'>
          {catchyPhrases[phraseIndex]}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
