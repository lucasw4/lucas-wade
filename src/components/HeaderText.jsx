import React from "react";

const HeaderText = ({ message }) => {
  return (
    <div className='h-12 w-full mb-10 mt-10 flex-col items-center text-center justify-center'>
      <h1 className='pl-4 mb-6 pb-4 text-5xl font-bold border-b-2 border-gray-700'>
        {message}
      </h1>
    </div>
  );
};

export default HeaderText;
