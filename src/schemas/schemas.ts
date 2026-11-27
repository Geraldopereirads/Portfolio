import { z } from "zod";

export const ProjectsSchema = z.object({
  id: z.string(),
  image: z.string(),
  technologies: z.string(),
  title: z.string(),
  url: z.string(),
  github: z.string(),
});