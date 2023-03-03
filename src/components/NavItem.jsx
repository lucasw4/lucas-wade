import Link from "next/link";
import React from "react";

const NavItem = (props) => {
  return (
    <li className='transition-all hover:scale-110'>
      <Link
        href={`#${props.section}`}
        className='hover:text-purple-500 px-2 py-2 '
      >
        {props.message}
      </Link>
    </li>
  );
};

export default NavItem;
