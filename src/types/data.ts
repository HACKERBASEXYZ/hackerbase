import { Event, EventStatus, EventType } from './event'

export const events: Event[] = [
    {
        id: 1,
        location: 'PARIS 🇫🇷',
        title: 'Salle du Temps ⏳',
        image: "/paris.png",
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
        image: "https://pbs.twimg.com/media/Fn20U-pacAAJ5N8.jpg:large",
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
        image: "https://uwaterloo.ca/computer-science/sites/ca.computer-science/files/uploads/images/wics-python-programming-workshop-750.jpg",
        dates: '19 July',
        status: EventStatus.UPCOMING,
        link: 'https://paulhenry.notion.site/Starknet-Salle-du-Temps-Paris-Hacker-House-2023-2a2ef8c5f14140009b32061cf376f21e',
        type: EventType.WORKSHOP,
        capacity: 50,
        theme: 'Learning',
        ecosystem: 'Starknet'
    },
]
