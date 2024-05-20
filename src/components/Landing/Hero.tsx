import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

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

const Hero = () => {
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
    <div className='h-full flex flex-col justify-between w-full p-4'>
      <div className='flex flex-col flex-grow m-auto w-full lg:w-[1000px] lg:h-[400px]'>
        <p className='text-[18px] lg:text-[20px] font-platypi'>
          Akinro Destined
        </p>
        <h1 className='text-[60px] lg:text-[80px] font-arges uppercase font-extrabold tracking-wide'>
          {catchyPhrases[phraseIndex]}
        </h1>
      </div>
      <div className='align-bottom lg:px-[300px] md:px-[150px] md:text-right w-full h-fit m-auto text-[12px] font-platypi px-10'>
        <p>
          Frontend Developer specializing in ReactJs. Thriving in a dynamic team
          environment with a focus on creating seamless user experiences.
          Passionate about building responsive and accessible web applications,
          optimizing performance, and continuous learning to enhance development
          skills.
        </p>
      </div>
    </div>
  );
};

export default Hero;
