import { Product } from "./products.model";

const getAllProductServices = async (searchTerm?: string) => {
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

export const productService = {
  getAllProductServices,
};
