import React from "react";

interface MyComponentsProps {
  darkMode: boolean;
}
const HorizontalLine: React.FC<MyComponentsProps> = ({ darkMode }) => {
  return (
    <div className='flex justify-center items-center my-4 font-platypi'>
      {/* <hr
        style={{ borderColor: darkMode ? "white" : "black" }}
        className='w-1/2'
      /> */}
      <div
        style={{ borderColor: darkMode ? "white" : "black" }}
        className='w-1/3 border-t'
      ></div>
      <a
        style={{ color: darkMode ? "white" : "black" }}
        className='mx-4 cursor-pointer'
        href='/'
      >
        A. D.
      </a>
      <div
        style={{ borderColor: darkMode ? "white" : "black" }}
        className='w-1/3 border-t'
      ></div>
    </div>
  );
};

export default HorizontalLine;
