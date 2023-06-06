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
        ecosystem: 'Starknet',
        description: 'Salle du Temps is a hacker house in Paris, France. It is a place for Starknet builders to come together and work on their projects. The house is open from 5 - 12 July. If you are interested in joining, please fill out the application form.'
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
        ecosystem: 'Starknet',
        description: 'The Starknet community meetup is a chance for builders to meet each other and share their projects. The meetup will be held on 11 July at 6pm. If you are interested in attending, please fill out the application form.'
    },
    {
        id: 3,
        location: 'PARIS 🇫🇷',
        title: 'Cairo Class 🧑‍💻',
        image: "https://uwaterloo.ca/computer-science/sites/ca.computer-science/files/uploads/images/wics-python-programming-workshop-750.jpg",
        dates: '11 July',
        status: EventStatus.UPCOMING,
        link: 'https://paulhenry.notion.site/Starknet-Salle-du-Temps-Paris-Hacker-House-2023-2a2ef8c5f14140009b32061cf376f21e',
        type: EventType.WORKSHOP,
        capacity: 50,
        theme: 'Learning',
        ecosystem: 'Starknet',
        description: 'Cairo Class is a workshop for developers who want to learn how to build on Starknet. The workshop will be held on 11 July at 6pm. If you are interested in attending, please fill out the application form.'
    },
    {
        id: 4,
        location: 'PARIS 🇫🇷',
        title: 'Crypto football match ‍⚽️',
        image: "https://www.racingfoot.fr/wp-content/uploads/2022/10/EN-TETE-DU-SITE-4.png",
        dates: '20 July',
        status: EventStatus.UPCOMING,
        link: 'https://paulhenry.notion.site/Starknet-Salle-du-Temps-Paris-Hacker-House-2023-2a2ef8c5f14140009b32061cf376f21e',
        type: EventType.SPORTS,
        capacity: 50,
        theme: 'Sports',
        ecosystem: 'Crypto',
        description: 'Crypto football match is a football match for crypto enthusiasts. The match will be held on 20 July at 6pm. If you are interested in attending, please fill out the application form.'
    },
]
