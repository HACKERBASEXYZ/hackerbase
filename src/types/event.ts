export enum EventStatus {
    'UPCOMING' = 'UPCOMING',
    'ONGOING' = 'ONGOING',
    'PAST' = 'PAST'
}

export enum EventType {
    'HACKER_HOUSE' = 'HACKER HOUSE',
    'CONFERENCE' = 'CONFERENCE',
    'MEETUP' = 'MEETUP',
    'PARTY' = 'PARTY',
    'WORKSHOP' = 'WORKSHOP',
    'SPORTS' = 'SPORTS'
}

export type Event = {
    id: number;
    title: string;
    image: string;
    dates: string;
    location: string;
    link: string;
    status: EventStatus;
    type: EventType;
    capacity: number;
    ecosystem: string;
    theme: string;
    description: string;
}