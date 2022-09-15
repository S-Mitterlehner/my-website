export interface TechStackCategory {
    name: string;
    items: TechStackItem[];
}

export interface TechItem {
    name: string; 
    icon: string;
}

export interface TechStackItem extends TechItem {
    since: Date;
    level: KnowledgeLevel;
}

export enum KnowledgeLevel {
    BEGINNER = 1,
    ADVANCED = 2,
    PRO = 3
}