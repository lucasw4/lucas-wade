import Image from "next//image";
import React from "react";

const Card = ({ title, summary, image, link, stack }) => {
  return (
    <div className='bg-zinc-800 rounded-lg w-96 xl:w-[35rem] h-72 mb-16 mx-auto p-4 relative overflow-visible transition-all hover:scale-105 hover:shadow-xl hover:shadow-black'>
      <div className='absolute -top-20 w-96 h-40 z-10 '>
        <Image
          src={image}
          alt={title}
          fill
          className='border-zinc-700 border-4'
        />
      </div>
      <div className='absolute top-[-4.5rem] left-2 opacity-75 w-96 h-40 bg-neutral-900 '></div>
      <div className='p-4 flex-col pt-24'>
        <h2 className='text-lg font-extrabold mb-2'>{title}</h2>
        <p className='text-zinc-200 text-sm mb-4'>{summary}</p>
        <small className='px-3 text-zinc-300 font-semibold'>{stack}</small>
        <div className='transition-all hover:scale-110 absolute'>
          <a
            href={link}
            target='_blank'
            className='text-white font-bold py-2 px-4 hover:text-purple-500 border-b transition-all border-purple-500 hover:border-none'
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
