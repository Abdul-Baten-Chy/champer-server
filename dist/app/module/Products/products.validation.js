"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductValidation = exports.productValidation = void 0;
const zod_1 = require("zod");
exports.productValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        price: zod_1.z.number(),
        sizes: zod_1.z.string().array(),
        rating: zod_1.z.number(),
        category: zod_1.z.string(),
        quantity: zod_1.z.number(),
        description: zod_1.z.string(),
        brand: zod_1.z.string(),
        images: zod_1.z.string().array(),
        isFeatured: zod_1.z.boolean(),
    }),
});
exports.updateProductValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        size: zod_1.z.string().array().optional(),
        rating: zod_1.z.number().optional(),
        category: zod_1.z.string().optional(),
        stock: zod_1.z.number().optional(),
        quantity: zod_1.z.number().optional(),
        description: zod_1.z.string().optional(),
        brand: zod_1.z.string().optional(),
        images: zod_1.z.string().array().optional(),
        isFeatured: zod_1.z.boolean().optional(),
    }),
});
