import React from "react";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <section className='h-12'>
      <nav className='flex justify-between p-3 mb-12'>
        <h1 className='text-xl'>lucasSahota</h1>
        <ul className='flex justify-between'>
          <NavItem message='Contact' />
          <NavItem message='Projects' />
          <NavItem message='Resume' />
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
