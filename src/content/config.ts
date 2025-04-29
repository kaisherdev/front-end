import { defineCollection, z } from "astro:content";

const furnitures = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    price: z.number().positive().min(0.01)
  })
})

const healthcares = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    price: z.number().positive().min(0.01)
  })
})

export const collections = {furnitures, healthcares}
