import type { NavItem } from "../types/types";

export const navData: NavItem[] = [
    { id: 'guide', label: 'Guide', href: '#' },
    { id: 'attendees', label: 'Attendees', href: '#', children: [
        { id: 'attendees-attendees', label: 'Attendees', href: '#' },
        { id: 'attendees-attendee-types', label: 'Attendee types', href: '#' },
        { id: 'attendees-packages', label: 'Packages', href: '#' },
        { id: 'attendees-reg-codes', label: 'Reg codes', href: '#' },
        { id: 'attendees-discounts', label: 'Discounts', href: '#' },
    ] },
    { id: 'content', label: 'Content', href: '#' },
    { id: 'exhibitors', label: 'Exhibitors', href: '#' },
]