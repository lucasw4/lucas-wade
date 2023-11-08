import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Resume = () => {
  return (
    <div className="text-zinc-100 bg-zinc-900 overflow-hidden">
      <NavBar />
      <iframe
        className="w-full h-[975px]"
        src="/LucasWade Resume.pdf"
        frameborder="0"
      ></iframe>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Resume;
