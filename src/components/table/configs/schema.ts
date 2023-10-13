import { z } from 'zod';

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});
export type Task = z.infer<typeof taskSchema>;

export const beerSchema = z.object({
  id: z.number(),
  uid: z.string(),
  brand: z.string(),
  name: z.string(),
  style: z.string(),
  hop: z.string().optional(),
  yeast: z.string().optional(),
  malts: z.string().optional(),
  ibu: z.string().optional(), // Assuming IBU is represented as a string
  alcohol: z.string().optional(), // Assuming alcohol content is represented as a string
  blg: z.string().optional(), // Assuming blg is represented as a string
});

export type Beer = z.infer<typeof beerSchema>;
export const beerSchemas = z.array(beerSchema);

export const itemSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export type Item = z.infer<typeof itemSchema>;

export const userSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export type User = z.infer<typeof userSchema>;
