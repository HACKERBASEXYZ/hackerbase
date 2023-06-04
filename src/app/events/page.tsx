"use client";
import EventFilter from "@/components/EventFilter";
import EventList from "@/components/EventList";
import { events as eventsData } from "@/types/data";
import { Event, EventStatus } from "@/types/event";
import { useState } from "react";

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>(eventsData);
  const [filter, setFilter] = useState<EventStatus | null>(null);
  return (
    <div className="md:p-6">
      <EventFilter filter={filter} setFilter={setFilter} />
      <EventList
        events={events.filter((event) => {
          if (filter === null) {
            return events;
          } else {
            return event.status === filter;
          }
        })}
      />
    </div>
  );
};

export default EventsPage;
