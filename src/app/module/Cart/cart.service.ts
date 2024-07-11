import { Product } from "../Products/products.model";
import { Tcart } from "./cart.interface";
import { Cart } from "./cart.model";

const createCartIntoDB = async (payload: Tcart) => {
  const quantity = payload.quantity;
  const id = payload.id;

  const result = await Cart.create(payload);

  if (result) {
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: id },
      { $inc: { quantity: -quantity } },
      { new: true }
    );
  }
  return result;
};

export const cartService = {
  createCartIntoDB,
};
