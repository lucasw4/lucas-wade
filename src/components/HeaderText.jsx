import React from "react";

const HeaderText = ({ message }) => {
  return (
    <div className='h-12 w-full mb-10 mt-10 flex flex-col items-center text-center justify-center relative'>
      <div className='relative'>
        <h1 className='mb-6 pb-4 text-5xl font-bold  z-10 w-fit relative'>
          {message}
        </h1>
        <div className='w-2/3 bg-purple-500 h-5 absolute bg-opacity-75 bottom-8 -left-4 z-0'></div>
      </div>
    </div>
  );
};

export default HeaderText;
