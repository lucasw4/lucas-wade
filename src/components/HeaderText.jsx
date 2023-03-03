import React from "react";

const HeaderText = ({ message }) => {
  return (
    <div className='h-12 w-10/12 mb-10 mt-10 flex items-center border-b-2 border-gray-700'>
      <h1 className=' pl-4 text-3xl'>{message}</h1>
    </div>
  );
};

export default HeaderText;
