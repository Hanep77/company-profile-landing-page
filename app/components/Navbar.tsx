"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [sidebar, setSidebar] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  function handleSidebar() {
    setSidebar(!sidebar)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed ${sidebar && "bg-zinc-200"} ${isScrolled && "bg-zinc-200 shadow"} w-full h-16 z-10`}>
      <div className="max-w-screen-lg px-4 xl:px-0 flex justify-between h-full items-center m-auto">
        <div>
          <h3 className="text-2xl font-bold tracking-widest">IiIiIiI</h3>
        </div>
        <div className={`bg-zinc-200 md:bg-transparent fixed md:static z-30 mt-16 top-0 left-0 bottom-0 right-0 md:mt-0 ${!sidebar && 'translate-x-full'} transition md:translate-x-0 flex`}>
          <ul className="flex flex-col md:flex-row items-center gap-5 md:gap-0 text-lg font-medium px-4 md:px-0 bg-red w-full">
            <li className="w-full md:w-auto text-center md:text-start">
              <a href="#" className="hover:text-white hover:bg-orange-600 rounded-full px-4 py-1" onClick={handleSidebar}>Home</a>
            </li>
            <li className="w-full md:w-auto text-center md:text-start">
              <a href="#about" className="hover:text-white hover:bg-orange-600 rounded-full px-4 py-1" onClick={handleSidebar}>About</a>
            </li>
            <li className="w-full md:w-auto text-center md:text-start">
              <a href="#services" className="hover:text-white hover:bg-orange-600 rounded-full px-4 py-1" onClick={handleSidebar}>Services</a>
            </li>
            <li className="w-full md:w-auto text-center md:text-start">
              <a href="#faq" className="hover:text-white hover:bg-orange-600 rounded-full px-4 py-1" onClick={handleSidebar}>FAQ</a>
            </li>
            <li className="w-full md:w-auto text-center md:text-start">
              <a href="#contact" className="hover:text-white hover:bg-orange-600 rounded-full px-4 py-1" onClick={handleSidebar}>Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex md:hidden gap-4">
          <button className={`flex flex-col gap-[6px] ${sidebar && 'translate-y-1'}`} onClick={handleSidebar}>
            <div className={`w-8 h-[3px] bg-orange-600 rounded ${sidebar && 'translate-y-[6px] -translate-x-[4px] rotate-45'} transition`}></div>
            <div className={`w-8 h-[3px] bg-orange-600 rounded m-auto ${sidebar && 'w-0'} transition-all`}></div>
            <div className={`w-8 h-[3px] bg-orange-600 rounded ${sidebar && '-translate-y-[12px] -translate-x-[4px] -rotate-45'} transition`}></div>
          </button>
        </div>
      </div>
    </nav>
  )
}
