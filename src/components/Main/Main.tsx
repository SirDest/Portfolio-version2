import React from "react";
import HorizontalLine from "../HorizontalLine";
interface MyComponentsProps {
  darkMode: boolean;
}

const Main: React.FC<MyComponentsProps> = ({ darkMode }) => {
  return (
    <div className='w-full h-screen flex flex-col justify-center p-4'>
      <div className='w-full min-h-[570px] h-screen flex justify-center p-4'>
        <div className='bg-blue-700 w-1/3 h-full border border-gray-600'></div>
        <div className='bg-green-700 w-1/3 h-full border border-gray-600'></div>
        <div className='bg-gray-700 w-1/3 h-full border border-gray-600'></div>
      </div>
      <HorizontalLine darkMode={darkMode} />
    </div>
  );
};

export default Main;
