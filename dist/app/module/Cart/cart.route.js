"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRoute = void 0;
const express_1 = require("express");
const cart_controller_1 = require("./cart.controller");
const route = (0, express_1.Router)();
route.post("/", cart_controller_1.cartController.createCart);
exports.cartRoute = route;
