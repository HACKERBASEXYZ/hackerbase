"use client";
import Link from "next/link";
import Logo from "./Logo";
import { slide as Menu, ReactBurgerMenu } from "react-burger-menu";
import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import Image from "next/image";

const Navbar = () => {
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

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
      <div className="md:hidden">
        <BurgerMenu>
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
        </BurgerMenu>
      </div>
    </nav>
  );
};

export default Navbar;
