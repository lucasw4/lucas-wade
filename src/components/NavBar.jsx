import React from "react";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <section
      id='nav--bar'
      className='h-12 bg-gray-900 border-b border-gray-700'
    >
      <nav className='flex justify-between p-3 mb-12'>
        <h1 className='text-xl'>lucasSahota</h1>
        <ul className='flex'>
          <NavItem message='Projects' section='portfolio--section' />
          <NavItem message='Resume' section='resume--section' />
          <NavItem message='Contact' section='contact--section' />
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
