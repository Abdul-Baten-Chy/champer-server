import { Router } from "express";
import requestVAlidator from "../../middlewares/requestValidator";
import { productController } from "./products.controller";
import {
  productValidation,
  updateProductValidation,
} from "./products.validation";

const route = Router();

route.get("/", productController.getAllProducts);
route.post(
  "/",
  requestVAlidator(productValidation),
  productController.createProduct
);
route.patch(
  "/:id",
  requestVAlidator(updateProductValidation),
  productController.updateProduct
);

export const productRoute = route;
