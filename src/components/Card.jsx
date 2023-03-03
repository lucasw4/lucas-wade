import Image from "next//image";
import React from "react";

const Card = ({ title, summary, image, link, stack }) => {
  return (
    <div className='bg-gray-800 rounded-lg shadow-md w-96 xl:w-[35rem] h-72 mb-16 mx-auto p-4 relative overflow-visible'>
      <div className='absolute -top-20 w-96 h-40 z-10 '>
        <Image
          src={image}
          alt={title}
          fill
          className='rounded-md  shadow-2xl'
        />
      </div>
      <div className='absolute -top-16 left-1 opacity-75 w-96 h-40 bg-gray-600 rounded-md '></div>
      <div className='p-4 flex-col pt-24'>
        <h2 className='text-lg font-extrabold mb-2'>{title}</h2>
        <p className='text-gray-200 text-sm mb-4'>{summary}</p>
        <small className='px-3 text-gray-300 font-semibold'>{stack}</small>
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
