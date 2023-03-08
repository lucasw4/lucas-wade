import React from "react";
import { AiOutlineConsoleSql } from "react-icons/ai";
import {
  DiCss3Full,
  DiHtml5,
  DiJavascript1,
  DiJqueryLogo,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { SiRubyonrails, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Pill = ({ text }) => {
  const icons = {
    NextJS: <TbBrandNextjs />,
    React: <DiReact />,
    JavaScript: <DiJavascript1 />,
    NodeJS: <DiNodejsSmall />,
    jQuery: <DiJqueryLogo />,
    SQL: <AiOutlineConsoleSql />,
    Tailwind: <SiTailwindcss />,
    HTML: <DiHtml5 />,
    CSS: <DiCss3Full />,
    Ruby: <SiRubyonrails />,
  };

  return (
    <div className=' w-40 p-2 border-zinc-700 border-2 rounded-full flex justify-center items-center shadow-md shadow-black'>
      <div className='pr-2 text-3xl'>{icons[text]}</div>
      {text}
    </div>
  );
};

export default Pill;
