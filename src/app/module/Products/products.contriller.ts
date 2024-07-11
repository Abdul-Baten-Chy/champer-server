import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { productService } from "./products.service";

const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const { searchTerm } = req.query;

  let result;
  if (searchTerm) {
    result = await productService.getAllProductServices(searchTerm as string);
  } else {
    result = await productService.getAllProductServices();
  }
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Product retrieved successfully",
    data: result,
  });
});
export const productController = {
  getAllProducts,
};
