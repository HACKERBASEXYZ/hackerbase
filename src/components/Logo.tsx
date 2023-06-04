import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="font-fugaz text-3xl lg:text-4xl">HACKERBASE</h1>
      <div className="bg-primary h-2 lg:h-3 w-32" />
    </Link>
  );
};

export default Logo;
