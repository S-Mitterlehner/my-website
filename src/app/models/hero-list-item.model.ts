import { TechItem } from "./tech-stack-item.model";

export interface HeroListItem {
    title: string; 
    description: string;
    imagePath: string;
    link: string | undefined;
    tech: TechItem[];
}