import { Event, EventStatus, EventType } from './event'

export const events: Event[] = [
    {
        id: 1,
        location: 'PARIS 🇫🇷',
        title: 'Salle du Temps ⏳',
        image: "https://images.pexels.com/photos/17026868/pexels-photo-17026868/free-photo-of-people-festival-crowd-dancing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        dates: '5 - 12 July',
        status: EventStatus.UPCOMING,
        link: 'https://paulhenry.notion.site/Starknet-Salle-du-Temps-Paris-Hacker-House-2023-2a2ef8c5f14140009b32061cf376f21e',
        type: EventType.HACKER_HOUSE,
        capacity: 15,
        theme: 'Building',
        ecosystem: 'Starknet'
    },
    {
        id: 2,
        location: 'PARIS 🇫🇷',
        title: 'Community Meetup 🎤',
        image: "https://images.pexels.com/photos/17026868/pexels-photo-17026868/free-photo-of-people-festival-crowd-dancing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        dates: '11 July',
        status: EventStatus.UPCOMING,
        link: 'https://paulhenry.notion.site/Starknet-Salle-du-Temps-Paris-Hacker-House-2023-2a2ef8c5f14140009b32061cf376f21e',
        type: EventType.MEETUP,
        capacity: 300,
        theme: 'Community',
        ecosystem: 'Starknet'
    },
    {
        id: 3,
        location: 'PARIS 🇫🇷',
        title: 'Cairo Class 🧑‍💻',
        image: "https://images.pexels.com/photos/17026868/pexels-photo-17026868/free-photo-of-people-festival-crowd-dancing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        dates: '19 July',
        status: EventStatus.UPCOMING,
        link: 'https://paulhenry.notion.site/Starknet-Salle-du-Temps-Paris-Hacker-House-2023-2a2ef8c5f14140009b32061cf376f21e',
        type: EventType.WORKSHOP,
        capacity: 50,
        theme: 'Learning',
        ecosystem: 'Starknet'
    },
]
