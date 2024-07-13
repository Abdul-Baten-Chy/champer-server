"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    price: {
        type: Number,
        required: [true, "price is required"],
    },
    sizes: {
        type: [String],
        required: [true, "size is required"],
    },
    rating: {
        type: Number,
        required: [true, "rating is required"],
    },
    category: {
        type: String,
        required: [true, "category is required"],
    },
    quantity: {
        type: Number,
        required: [true, "quantity is required"],
    },
    description: {
        type: String,
        required: [true, "description is required"],
    },
    brand: {
        type: String,
        required: [true, "brand is required"],
    },
    images: {
        type: [String],
        required: [true, "images is required"],
    },
    isFeatured: Boolean,
}, {
    timestamps: true,
});
exports.Product = (0, mongoose_1.model)("Product", productSchema);
