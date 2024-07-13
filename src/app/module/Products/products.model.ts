import { model, Schema } from "mongoose";
import { Tproducts } from "./products.interface";

const productSchema = new Schema<Tproducts>(
  {
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
  },
  {
    timestamps: true,
  }
);

export const Product = model<Tproducts>("Product", productSchema);
