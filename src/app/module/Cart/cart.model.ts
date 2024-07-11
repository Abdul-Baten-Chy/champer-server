import { model, Schema } from "mongoose";
import { Tcart } from "./cart.interface";

const cartSchema = new Schema<Tcart>({
  id: String,
  quantity: Number,
});

export const Cart = model<Tcart>("Cart", cartSchema);
