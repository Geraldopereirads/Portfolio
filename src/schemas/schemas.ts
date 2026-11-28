import { z } from "zod";

export const ProjectsSchema = z.object({
  id: z.string(),
  image: z.string(),
  technologies: z.string(),
  title: z.string(),
  url: z.string(),
  github: z.string(),
});

export const TechnologiesSchema = z.object({
  id: z.string(),
  category: z.string(),
  technologiesOne: z.string(),
  technologiesTwo: z.string(),
});