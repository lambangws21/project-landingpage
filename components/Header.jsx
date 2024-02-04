"use client"
import React, {useState, useEffect} from "react";
import {usePathname} from "next/navigation";

import Logo from "./Logo";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll",()=> {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    });

    return () => window.removeEventListener("scroll", scrollYPos);
  })
  return (
    <header className={`${header ? "shadow-lg py-4 bg-white dark:bg-accent" : "py-6 dark:bg-transparent"} sticky top-0 z-30 transition-all ${pathname === "/" ? "" : "bg-white dark:bg-accent"}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-5">
            <Navbar
              containerStyles="hidden lg:flex items-center gap-x-5 "
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute bottom-0 left-0 right-0 h-[5px] rounded-full bg-primary w-full"            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNavbar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
