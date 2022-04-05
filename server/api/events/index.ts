import { useQuery, IncomingMessage, ServerResponse } from 'h3'

export interface Event {
    id: number,
    category: string,
    title: string,
    description: string,
    location: string,
    date: string,
    time: string,
    petsAllowed: boolean,
    organizer: string
}

export default async (req: IncomingMessage, res: ServerResponse) => {
    const query = useQuery(req)

    let events: Event[] = [
        {
            id: 5928101,
            category: 'animal welfare',
            title: 'Cat Adoption Day Day',
            description: 'Find your new feline friend at this event.',
            location: 'Meow Town',
            date: 'January 28, 2022',
            time: '12:00',
            petsAllowed: true,
            organizer: 'Kat Laydee'
        },
        {
            id: 4582797,
            category: 'food',
            title: 'Community Gardening',
            description: 'Join us as we tend to the community edible plants.',
            location: 'Flora City',
            date: 'March 14, 2022',
            time: '10:00',
            petsAllowed: true,
            organizer: 'Fern Pollin'
        },
        {
            id: 8419988,
            category: 'sustainability',
            title: 'Beach Cleanup',
            description: 'Help pick up trash along the shore.',
            location: 'Playa Del Carmen',
            date: 'July 22, 2022',
            time: '11:00',
            petsAllowed: false,
            organizer: 'Carey Wales'
        },
        {
            id: 123,
            category: "animal welfare",
            title: "Cat Adoption Day",
            description: "Find your new feline friend at this event.",
            location: "Meow Town",
            date: "January 28, 2022",
            time: "12:00",
            petsAllowed: false,
            organizer: "Kat Laydee"
        },
        {
            id: 456,
            category: "food",
            title: "Community Gardening",
            description: "Join us as we tend to the community edible plants.",
            location: "Flora City",
            date: "March 14, 2022",
            time: "10:00",
            petsAllowed: false,
            organizer: "Fern Pollin"
        },
        {
            id: 789,
            category: "sustainability",
            title: "Beach Cleanup",
            description: "Help pick up trash along the shore.",
            location: "Playa Del Carmen",
            date: "July 22, 2022",
            time: "11:00",
            petsAllowed: true,
            organizer: "Carey Wales"
        }
    ]
    // return { result, query }
    if (query["id"]) {
        events = events.filter((event: Event) =>{
            return event.id == Number(query["id"])
        })
    }
    return {events}
}