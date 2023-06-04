import { EventStatus } from "@/types/event";
import { Dispatch, SetStateAction } from "react";

interface EventFilterProps {
  filter: EventStatus | null;
  setFilter: Dispatch<SetStateAction<EventStatus | null>>;
}

const EventFilter: React.FC<EventFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="flex flex-row items-center gap-8 font-fugaz text-xl lg:text-2xl mb-4 text-gray-500">
      <button
        onClick={() => setFilter(null)}
        className={`${
          filter === null &&
          "underline underline-offset-4 decoration-primary text-white"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter(EventStatus.UPCOMING)}
        className={`${
          filter === EventStatus.UPCOMING &&
          "underline underline-offset-4 decoration-primary text-white"
        }`}
      >
        UPCOMING
      </button>
      <button
        onClick={() => setFilter(EventStatus.ONGOING)}
        className={`${
          filter === EventStatus.ONGOING &&
          "underline underline-offset-4 decoration-primary text-white"
        }`}
      >
        ONGOING
      </button>
      <button
        onClick={() => setFilter(EventStatus.PAST)}
        className={`${
          filter === EventStatus.PAST &&
          "underline underline-offset-4 decoration-primary text-white"
        }`}
      >
        PAST
      </button>
    </div>
  );
};

export default EventFilter;
