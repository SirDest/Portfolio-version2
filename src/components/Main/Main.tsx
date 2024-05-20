import React from "react";
import HorizontalLine from "../HorizontalLine";
interface MyComponentsProps {
  darkMode: boolean;
}

const Main: React.FC<MyComponentsProps> = ({ darkMode }) => {
  return (
    <div
      // style={{
      //   backgroundColor: darkMode ? "black" : "white",
      //   color: darkMode ? "white" : "black",
      // }}
      className='w-full h-screen bg-red-700'
    >
      {/* <HorizontalLine darkMode={darkMode} /> */}
      <p>Main</p>
    </div>
  );
};

export default Main;
