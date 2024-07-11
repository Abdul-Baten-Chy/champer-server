import { z } from "zod";

export const productValidation = z.object({
  body: z.object({
    name: z.string(),
    price: z.number(),
    size: z.string().array(),
    rating: z.number(),
    category: z.string(),
    stock: z.number(),
    quantity: z.number(),
    description: z.string(),
    brand: z.string(),
    images: z.string().array(),
    isFeatured: z.boolean(),
  }),
});
export const updateProductValidation = z.object({
  body: z.object({
    name: z.string().optional(),
    price: z.number().optional(),
    size: z.string().array().optional(),
    rating: z.number().optional(),
    category: z.string().optional(),
    stock: z.number().optional(),
    quantity: z.number().optional(),
    description: z.string().optional(),
    brand: z.string().optional(),
    images: z.string().array().optional(),
    isFeatured: z.boolean().optional(),
  }),
});
