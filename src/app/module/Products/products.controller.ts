import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { Tproducts } from "./products.interface";
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

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const newProdut = req.body;
  const result = await productService.createProductIntoDB(newProdut);
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Product created successfully",
    data: result,
  });
});
const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const updatedProduct: Partial<Tproducts> = req.body;
  const id = req.params.id;
  const result = await productService.updateProductInDB(id, updatedProduct);
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Product updated successfully",
    data: result,
  });
});
export const productController = {
  getAllProducts,
  createProduct,
  updateProduct,
};
