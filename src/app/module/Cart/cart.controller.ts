import { Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import { cartService } from "./cart.service";

const createCart = async (req: Request, res: Response) => {
  const cart = req.body;
  const result = await cartService.createCartIntoDB(cart);
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Cart added successfully",
    data: result,
  });
};

export const cartController = {
  createCart,
};
