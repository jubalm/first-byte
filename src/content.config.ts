import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// Define the posts collection with a schema
const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string().optional(),
  }),
});

export const collections = { posts };
