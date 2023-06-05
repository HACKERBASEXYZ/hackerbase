"use client";
import Bottomer from "@/components/Bottomer";
import EventFilter from "@/components/EventFilter";
import EventList from "@/components/EventList";
import EventsHeader from "@/components/EventsHeader";
import { events as eventsData } from "@/types/data";
import { Event, EventStatus } from "@/types/event";
import { useState } from "react";

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>(eventsData);
  const [filter, setFilter] = useState<EventStatus | null>(null);
  return (
    <div className="md:p-6">
      <EventsHeader />
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
      <Bottomer />
    </div>
  );
};

export default EventsPage;
