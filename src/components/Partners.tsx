import Image from "next/image";
import Link from "next/link";

type Partner = {
  name: string;
  logo: string;
  link: string;
};

const partners: Partner[] = [
  {
    name: "Starkware",
    logo: "https://starkware.co/wp-content/uploads/2021/04/logotype.svg",
    link: "https://starkware.co/",
  },
  {
    name: "Starknet foundation",
    logo: "https://images.squarespace-cdn.com/content/v1/5f9bcc27c14fc6134658484b/5d88f4db-268a-48ef-ad24-469ef32e96d4/StarkNet_logo.png",
    link: "https://starknet.io/",
  },
];

const Partners = () => {
  return (
    <div className="my-10 flex flex-col">
      <h1 className="text-2xl font-title text-center font-fugaz">
        OUR PARTNERS
      </h1>
      <div className="mt-2 bg-primary h-2 lg:h-3 w-32 self-center mb-8" />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {partners.map((partner) => {
          return (
            <Link key={partner.name} href={partner.link}>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={300}
                height={300}
                className="border-l border-primary p-2 rounded-full"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
