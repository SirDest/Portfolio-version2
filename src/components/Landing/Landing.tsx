import React, { Dispatch, SetStateAction } from "react";
import Header from "../Header/Header";
import Hero from "./Hero";

interface MyComponentsProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}
const Landing: React.FC<MyComponentsProps> = ({ darkMode, setDarkMode }) => {
  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
      }}
      className='w-full h-screen flex flex-col'
    >
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <Hero />
    </div>
  );
};

export default Landing;
