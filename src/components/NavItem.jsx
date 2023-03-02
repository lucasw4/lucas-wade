import React from "react";

const NavItem = (props) => {
  return (
    <li className='px-2 transition-all hover:scale-110'>
      <a href='#' className='hover:text-purple-500 px-2 py-2 '>
        {props.message}
      </a>
    </li>
  );
};

export default NavItem;
