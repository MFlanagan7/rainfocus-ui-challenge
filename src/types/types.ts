export interface EventInfo {
    id: string,
    name: string,
    city: string,
    state: string,
    stateCode: string,
    date: string,
    logoUrl: string,
}

export interface NavItem {
    id: string,
    label: string,
    href: string,
    children?: NavItem[],
}