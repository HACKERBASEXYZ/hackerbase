import { Event } from "@/types/event";
import EventCard from "./EventCard";

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
      {events.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}
    </div>
  );
};

export default EventList;
