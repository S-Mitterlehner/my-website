export interface ChronologicalListItem {
    from: string;
    to: string | undefined;
    primaryText: string;
    secondaryText: string | undefined;
    icon: string;
    size: string;
    details: ChronologicalDetails | undefined;
}

export interface ChronologicalDetails {
    tasks: string[];
}