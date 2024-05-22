import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

const languages = [
  "HyperText Markup Language (HTML)",
  "Cascading Style Sheets (CSS)",
  "JavaScript",
  "Bootstrap",
  "Tailwind",
  "ReactJs",
  "NextJs",
  "TypeScript",
  "MaterialUi",
  "Redux",
];
const Skills = () => {
  return (
    <div className='w-full min-h-[570px] h-fit flex md:flex-row flex-col justify-center p-4 font-platypi text-[15px]'>
      <div className='w-full lg:w-1/3 h-full border-none flex p-3 items-center gap-2 uppercase'>
        <MdArrowRightAlt /> <p>Skills, Languages, Frameworks</p>
      </div>
      <div className='w-full lg:w-1/3 h-full border-none flex flex-col'>
        {languages.map((skills: string, i: any) => (
          <p key={i} className='px-2 py-3'>
            {skills}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Skills;
