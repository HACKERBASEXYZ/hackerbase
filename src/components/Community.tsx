import Link from "next/link";
import { IconType } from "react-icons";
import {
  BsTwitter,
  BsTelegram,
  BsDiscord,
  BsMedium,
  BsArrowUpRight,
} from "react-icons/bs";

type Community = {
  name: string;
  icon: IconType;
  link: string;
  description: string;
};

const communities: Community[] = [
  {
    name: "Twitter",
    icon: BsTwitter,
    link: "https://twitter.com/hackerbasexyz",
    description: "Follow us on Twitter for updates",
  },
  {
    name: "Telegram",
    icon: BsTelegram,
    link: "https://t.me/+XCJJFE0kd_E1ZTVk",
    description: "Join our Telegram group",
  },
  {
    name: "Medium",
    icon: BsMedium,
    link: "/",
    description: "Read our Medium articles",
  },
];

const Community = () => {
  return (
    <div className="my-10">
      <h1 className="text-xl lg:text-3xl font-fugaz mb-4">
        Join the{" "}
        <span className="font-bold underline-offset-4 underline decoration-primary">
          HACKERBASE
        </span>{" "}
        community
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {communities.map((community) => {
          return (
            <Link
              key={community.name}
              href={community.link}
              className="border border-primary hover:bg-primary col-span-1 p-4 rounded cursor-pointer flex flex-row justify-between items-center"
            >
              <div>
                <div className="flex flex-row items-center gap-2">
                  <community.icon className="text-2xl" />
                  <h2 className="font-bold font-fugaz text-2xl">
                    {community.name}
                  </h2>
                </div>
                <h2>{community.description}</h2>
              </div>
              <BsArrowUpRight className="text-2xl" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Community;
