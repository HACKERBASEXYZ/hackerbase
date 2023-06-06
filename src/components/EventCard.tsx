import { BsFillPersonFill } from "react-icons/bs";
import { Event, EventStatus } from "@/types/event";
import Link from "next/link";
import Image from "next/image";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const {
    title,
    location,
    dates,
    type,
    capacity,
    image,
    link,
    status,
    theme,
    ecosystem,
    description,
  } = event;
  return (
    <Link href={link}>
      <div className="flex flex-col font-fugaz mb-4">
        <div className="border border-primary hover:bg-slate-900 cursor-pointer">
          <div className="flex flex-row items-center justify-between p-2">
            <h1 className="text-xl text-center">{location}</h1>
            <h2 className="text-xl">{dates}</h2>
          </div>
          <div className="border-y border-primary relative">
            <Image
              width={500}
              height={300}
              src={image}
              alt="Event image"
              className="h-72 w-full"
            />
            <div className="absolute bg-primary py-2 px-4 top-4 right-4 rounded-full">
              <h1>
                <span className="font-sans">#</span>
                {theme}
              </h1>
            </div>
            <div className="absolute bg-primary bottom-0 w-full">
              <h1 className="text-center">{"learn more ->"}</h1>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center px-2 pt-2">
            <h1>{type}</h1>
            <div className="flex flex-row">
              <h1>{capacity}</h1>
              <BsFillPersonFill className="text-xl" />
            </div>
          </div>

          <div className="flex flex-row justify-between items-center border-b border-primary px-2 pb-2">
            <h1>{ecosystem}</h1>
            {status == EventStatus.UPCOMING ? (
              <h1 className="text-green-500">OPEN</h1>
            ) : (
              <h1 className="text-red-500">CLOSED</h1>
            )}
          </div>
          <div className="p-4 h-52">
            <h1 className="text-2xl text-center my-1">{title}</h1>
            <p className="font-sans">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
