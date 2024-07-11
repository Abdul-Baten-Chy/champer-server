import { Router } from "express";
import { productController } from "./products.contriller";

const route = Router();

route.get("/", productController.getAllProducts);

export const productRoute = route;
