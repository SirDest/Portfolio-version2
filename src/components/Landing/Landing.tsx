import React, { Dispatch, SetStateAction, useState } from "react";
import Header from "../Header/Header";
import Hero from "./Hero";
import Banner from "../Banner";
import HorizontalLine from "../HorizontalLine";

interface MyComponentsProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}
const Landing: React.FC<MyComponentsProps> = ({ darkMode, setDarkMode }) => {
  const [banner, setBanner] = useState(true);

  return (
    <div className='w-full min-h-[590px] h-screen flex flex-col'>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} banner={banner} />
      {banner && <Banner setBanner={setBanner} banner={banner} />}
      <Hero darkMode={darkMode} />
    </div>
  );
};

export default Landing;
