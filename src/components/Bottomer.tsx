import Link from "next/link";

const Bottomer = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-fugaz text-3xl text-center mt-16">
        LET&apos;S HACK THE FUTURE
        <br />
        OF WEB3 TOGETHER 🚀
      </h1>
      <Link
        className="px-4 py-2 border border-primary hover:bg-primary rounded-full font-fugaz text-xl mt-8"
        href="/events"
      >
        <h1>JOIN OUR EVENTS</h1>
      </Link>
    </div>
  );
};

export default Bottomer;
