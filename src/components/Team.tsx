import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  twitter?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Paul-Henry Kajfasz",
    role: "Co-founder",
    image: "/phk.jpg",
    linkedin: "https://www.linkedin.com/in/paul-henrykajfasz/",
    twitter: "https://twitter.com/phklive",
  },
  {
    name: "Sun Bao",
    role: "Co-founder",
    image: "/sun.jpg",
    twitter: "https://twitter.com/sunbh_eth",
  },
  {
    name: "Samuel Oh",
    role: "CTO",
    image: "/samuel.jpeg",
    linkedin: "https://www.linkedin.com/in/samueloh99/",
    twitter: "https://twitter.com/samueloh99",
  },
  {
    name: "Danilo Kim",
    role: "Advisor",
    image: "/danilo.jpg",
    twitter: "https://twitter.com/danilowhk2",
  },
];

const Team = () => {
  return (
    <div className="my-10">
      <h1 className="font-fugaz text-xl lg:text-3xl mb-4">
        Meet our{" "}
        <span className="font-bold underline-offset-4 underline decoration-primary">
          HACKERBASE
        </span>{" "}
        team
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {teamMembers.map((member) => {
          return (
            <div
              key={member.name}
              className="rounded border border-primary text-center font-fugaz"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={500}
                height={500}
                className="rounded-t border-b border-primary"
              />
              <h1 className="text-xl mt-2">{member.name}</h1>
              <h1>{member.role}</h1>
              <div className="my-4 flex flex-row items-center justify-center gap-4">
                {member.linkedin && (
                  <Link href={member.linkedin}>
                    <BsLinkedin className="self-center text-2xl hover:text-blue-600" />
                  </Link>
                )}
                {member.twitter && (
                  <Link href={member.twitter}>
                    <BsTwitter className="self-center text-2xl hover:text-blue-200" />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
