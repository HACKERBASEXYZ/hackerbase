import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center font-playfair font-bold">
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="mt-0 text-4xl lg:text-6xl text-center font-title2">
          WE MAKE MAGIC <br /> HAPPEN 🪄
        </h1>
        <p className="text-center my-8 text-lg lg:text-2xl">
          By creating the most incredible Web3
          <br />
          <span className="underline-offset-4 underline decoration-primary">
            Events
          </span>
          <span>{" & "}</span>
          <span className="underline-offset-4 underline decoration-primary">
            Communities
          </span>
          <br />
          around the world 🌎
        </p>
        <Link
          className="px-4 py-2 border border-primary hover:bg-primary rounded-full font-fugaz text-xl"
          href="/events"
        >
          <h1>JOIN OUR EVENTS</h1>
        </Link>
      </div>
      <div className="flex-1 mt-10 lg:mt-0">
        <Image
          width={600}
          height={300}
          src="/hackers.jpeg"
          alt="developers hacking"
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Header;
