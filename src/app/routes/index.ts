import { Router } from "express";
import { productRoute } from "../module/Products/products.router";

const router = Router();

const moduleRoutes = [
  {
    path: "/products",
    route: productRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
