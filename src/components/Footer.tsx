import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="w-full border-t border-primary px-4 pt-4 flex flex-col lg:flex-row justify-between mt-20 pb-2">
      <Logo />
      <p className="text-sm mt-auto"> 2023 Hackerbase. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
