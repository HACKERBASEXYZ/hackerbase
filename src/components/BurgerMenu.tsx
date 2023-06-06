"use client";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PopupButton } from "react-calendly";
import { RxCross1 } from "react-icons/rx";

interface BurgerMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, setIsOpen }) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  return (
    <div
      className={`${
        isOpen ? "flex flex-col" : "hidden"
      } h-screen w-screen bg-black absolute top-0 left-0 z-10 gap-4 items-center justify-center`}
    >
      <RxCross1
        className="text-3xl cursor-pointer top-4 right-4 absolute"
        onClick={() => setIsOpen(false)}
      />
      <Link
        href={"/"}
        className="font-fugaz text-xl hover:underline underline-offset-4 decoration-primary"
        onClick={() => setIsOpen(false)}
      >
        Home
      </Link>
      <Link
        href={"/events"}
        className="font-fugaz text-xl hover:underline underline-offset-4 decoration-primary"
        onClick={() => setIsOpen(false)}
      >
        Events
      </Link>
      {ready && (
        <div onClick={() => setIsOpen(false)}>
          <PopupButton
            className="px-4 py-2 border border-primary hover:bg-primary rounded-full font-fugaz "
            text="CREATE YOUR OWN EVENT"
            rootElement={document.getElementById("root") as HTMLElement}
            url="https://calendly.com/paulhenrykajfasz/hackerbase-event-consulting"
          />
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
