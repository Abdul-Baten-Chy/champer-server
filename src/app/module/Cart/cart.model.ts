import { model, Schema } from "mongoose";
import { Tcart } from "./cart.interface";

const cartSchema = new Schema<Tcart>({
  id: String,
  quantity: Number,
  address: String,
  email: String,
  name: String,
  userProductInfo: [{}],
  userTotalPay: Number,
});

export const Cart = model<Tcart>("Cart", cartSchema);
