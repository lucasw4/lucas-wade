import React from "react";
import NavItem from "./NavItem";
import Link from "next/link";

const NavBar = () => {
  return (
    <section
      id="nav--bar"
      className="h-12 bg-zinc-800 border-b border-zinc-700"
    >
      <nav className="flex justify-between p-3 mb-12">
        <div className="text-sm md:text-xl flex items-center">
          <h1>
            <Link href="/">
              lucas<strong className="">Wade</strong>
            </Link>
          </h1>
        </div>
        <ul className="flex">
          <NavItem message="About" section="about--section" />
          <NavItem message="Projects" section="portfolio--section" />
          <NavItem message="Resume" section="resume--section" />
          <NavItem message="Contact" section="contact--section" />
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
