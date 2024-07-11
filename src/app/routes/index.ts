import { Router } from "express";
import { cartRoute } from "../module/Cart/cart.route";
import { productRoute } from "../module/Products/products.router";

const router = Router();

const moduleRoutes = [
  {
    path: "/products",
    route: productRoute,
  },
  {
    path: "/cart",
    route: cartRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
