import React from "react";
import Skills from "../Skills";
interface MyComponentsProps {
  darkMode: boolean;
}

const Main: React.FC<MyComponentsProps> = ({ darkMode }) => {
  return (
    <div className='w-full h-screen flex flex-col justify-center p-4'>
      <Skills />
    </div>
  );
};

export default Main;
