import Link from "next/link";
import Logo from "./Logo";
import { BsTwitter } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="p-4 w-full flex flex-row justify-between items-center mb-10">
      <Logo />
      <div className="flex flex-row items-center gap-4">
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
        <Link href={"https://twitter.com/hackerbasexyz"}>
          <BsTwitter className="text-xl hover:text-blue-200" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
