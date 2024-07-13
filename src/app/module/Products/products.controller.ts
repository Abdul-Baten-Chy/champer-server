import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { Tproducts } from "./products.interface";
import { productService } from "./products.service";

const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const { searchTerm } = req.query;

  const result = await productService.getAllProductServices(
    searchTerm as string
  );

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Product retrieved successfully",
    data: result,
  });
});
const getSingleProducts = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await productService.getSingleProductServices(id);

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Product retrieved successfully",
    data: result,
  });
});

const getFilteredProducts = catchAsync(async (req: Request, res: Response) => {
  const { category, minPrice, maxPrice } = req.query;

  // Build the query object
  const query: any = {};

  if (category) {
    query.category = category;
  }

  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) {
      query.price.$gte = parseFloat(minPrice as string);
    }
    if (maxPrice) {
      query.price.$lte = parseFloat(maxPrice as string);
    }
  }

  const result = await productService.filterdProductsFromDB(query);
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Product filtered successfully",
    data: result,
  });
});

const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await productService.deleteProductFromDB(id);

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Product deleted successfully",
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
  getSingleProducts,
  deleteProduct,
  getFilteredProducts,
};
