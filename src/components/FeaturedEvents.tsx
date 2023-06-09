import { events } from "@/types/data";
import EventList from "./EventList";
import { EventStatus } from "@/types/event";

const FeaturedEvents = () => {
  return (
    <div className="mt-10 lg:mt-20 flex flex-col">
      <h1 className="text-2xl font-title text-center font-fugaz">
        UPCOMING EVENTS
      </h1>
      <div className="mt-2 bg-primary h-2 lg:h-3 w-32 self-center mb-8" />
      <EventList
        events={events
          .filter((event) => event.status === EventStatus.UPCOMING)
          .slice(0, 3)}
      />
    </div>
  );
};

export default FeaturedEvents;
