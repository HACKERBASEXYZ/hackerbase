import Image from "next/image";

const EventsHeader = () => {
  return (
    <div className="mb-20">
      <h1 className="font-playfair text-5xl lg:text-6xl text-center mb-4 leading-normal">
        Incredible.{" "}
        <span className="decoration-primary underline underline-offset-4">
          Opportunities.
        </span>{" "}
        Await.
      </h1>
      <p className="text-center font-playfair text-xl md:text-2xl">
        Join some of the most exclusive Web3 events around the world 🌏
      </p>
    </div>
    // <div className="flex flex-col md:flex-row mb-10">
    //   <div className="flex-1 order-2 md:order-1">
    //     <Image
    //       src={"/hackers.jpeg"}
    //       alt="hackers"
    //       width={600}
    //       height={300}
    //       className="rounded-xl"
    //     />
    //   </div>
    //   <div className="flex-1 order-1 mb-8 md:order-2 md:mb-0">
    //     <h1 className="text-3xl font-playfair text-center underline underline-offset-4 decoration-primary">
    //       Join our events
    //     </h1>
    //     <p className="font-playfair text-2xl mt-4">
    //       Our goal at Hackerbase is to create thriving communities through human
    //       interactions, we enable that by creating the best web3 events around
    //       the world and we want you to be part of it. Join us! 🚀
    //     </p>
    //   </div>
    // </div>
  );
};

export default EventsHeader;
