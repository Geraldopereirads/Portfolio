import { ProjectsSchema, TechnologiesSchema } from "@/schemas/schemas";
import { z } from "zod";

export type ProjectsData = z.infer<typeof ProjectsSchema>;
export type TechnologiesData = z.infer<typeof TechnologiesSchema>;

export interface CardProps {
    card: ProjectsData
}

export interface CardsProps {
    cards: ProjectsData[],
    technologies: TechnologiesData[]
}
