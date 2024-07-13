"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_route_1 = require("../module/Cart/cart.route");
const products_router_1 = require("../module/Products/products.router");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/products",
        route: products_router_1.productRoute,
    },
    {
        path: "/cart",
        route: cart_route_1.cartRoute,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
