import AppError from "../../errors/AppError";
import { Tproducts } from "./products.interface";
import { Product } from "./products.model";

const getAllProductServices = async (searchTerm) => {
  let result;
  if (searchTerm) {
    result = await Product.find({
      $or: [
        { name: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } },
      ],
    });
  } else {
    result = await Product.find();
  }

  return result;
};
const filterdProductsFromDB = async (query) => {
  const result = await Product.find(query);
  if (result.length < 1) {
    throw new AppError(404, "no data found");
  }
  return result;
};
const getSingleProductServices = async (id: string) => {
  const result = await Product.findById(id);

  if (!result) {
    throw new AppError(404, "no data found");
  }
  return result;
};
const deleteProductFromDB = async (id: string) => {
  return await Product.findByIdAndDelete(id);
};

const createProductIntoDB = async (payload: Tproducts) => {
  return await Product.create(payload);
};

const updateProductInDB = async (id: string, payload: Partial<Tproducts>) => {
  // const { size, images, ...remaining } = payload;
  // let retunObj;
  // if ((size && size?.length > 0) || (images && images?.length > 0)) {
  //   retunObj = await Product.findByIdAndUpdate(
  //     id,
  //     { $addToSet: { size, images }, $set: remaining },
  //     { new: true }
  //   );
  // } else {
  //   retunObj = await Product.findByIdAndUpdate(id, remaining, { new: true });
  // }
  // return retunObj;
  return await Product.findByIdAndUpdate(id, payload, { new: true });
};
export const productService = {
  getAllProductServices,
  createProductIntoDB,
  updateProductInDB,
  getSingleProductServices,
  deleteProductFromDB,
  filterdProductsFromDB,
};
