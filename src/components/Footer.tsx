import Image from "next/image";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="w-full px-4 pt-4 border-t border-primary flex flex-col lg:flex-row justify-between mt-20 pb-2 relative">
      <Logo />
      <p className="text-sm mt-auto"> 2023 Hackerbase. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
