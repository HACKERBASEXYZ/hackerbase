"use client";
import Link from "next/link";
import Logo from "./Logo";
import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  const [ready, setReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <nav className="p-4 w-full flex flex-row justify-between items-center mb-10 relative">
      <Image
        height={500}
        width={10000}
        src="/gradient.png"
        alt="gradient background"
        className="top-0 left-0 absolute -z-10"
      />
      <Logo />
      <GiHamburgerMenu
        className="md:hidden text-3xl cursor-pointer"
        onClick={() => setIsOpen(true)}
      />
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="md:flex-row items-center gap-4  hidden md:flex">
        <Link
          href={"/"}
          className="font-fugaz text-xl hover:underline underline-offset-4 decoration-primary"
        >
          Home
        </Link>
        <Link
          href={"/events"}
          className="font-fugaz text-xl hover:underline underline-offset-4 decoration-primary"
        >
          Events
        </Link>
        {ready && (
          <PopupButton
            className="px-4 py-2 border border-primary hover:bg-primary rounded-full font-fugaz "
            text="CREATE YOUR OWN EVENT"
            rootElement={document.getElementById("root") as HTMLElement}
            url="https://calendly.com/paulhenrykajfasz/hackerbase-event-consulting"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
