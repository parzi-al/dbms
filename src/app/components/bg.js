"use client";
import { useEffect, useState } from "react";
import Navbutton from "./navbarcomponent";
import Link from "next/link";
import Image from "next/image";
import Menu from '.././assets/menu.png';
import Jaba from '.././assets/jaba.png';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setDrop(false);
  };

  return (
    <div className="bg-black md:z-80">
      <div
        className={`fixed top-0 text-black left-0 w-full h-16 md:h-24 flex items-center justify-between border-black px-6 md:px-12 z-50 transition-all ease-in-out duration-500 ${
          scroll && !drop ? "wBE bg-black/50 border-b-0" : ""
        }`}
      >
        <Image
          src={Jaba}
          alt="Jaba"
          width={100}
          height={100}
          className="w-auto h-auto"
        />

        <Image
          onClick={() => setDrop(!drop)}
          src={Menu }
          alt="NavIcon"
          width={40}
          height={40}
          className="h-10 w-10 cursor-pointer"
        />
      </div>
      <div
        className={`wBE bg-white fixed top-0 left-0 overflow-hidden w-full z-40 transition-all ease-in-out duration-700 flex flex-col items-center ${
          drop ? "h-screen pt-5" : "h-0"
        }`}
      >
        <div className="m-28 mt-[100px] w-[75%] geo flex flex-col gap-5 font-bold">
          <Link href="/" onClick={handleLinkClick}>
            <h1
              className={`
                text-black border-white 
                font-bold text-5xl w-full border-b-2 pb-5 hover:text-primary transition-all ease-in-out duration-500 cursor-pointer`}
            >
              <Navbutton text="Home" />
            </h1>
          </Link>
          
          <Link href="/signup" onClick={handleLinkClick}>
            <h1
              className={`
                text-black border-white 
                font-bold text-5xl w-full border-b-2 pb-5 hover:text-primary transition-all ease-in-out duration-500 cursor-pointer`}
            >
              <Navbutton text="Login" />
            </h1>
          </Link>
          <Link href="/behindus" onClick={handleLinkClick}>
            <h1
              className={`
                text-black border-white 
                font-bold text-5xl w-full border-b-2 pb-5 hover:text-primary transition-all ease-in-out duration-500 cursor-pointer`}
            >
              <Navbutton text="Contact" />
            </h1>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
