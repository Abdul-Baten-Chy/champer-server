"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoute = void 0;
const express_1 = require("express");
const requestValidator_1 = __importDefault(require("../../middlewares/requestValidator"));
const products_controller_1 = require("./products.controller");
const products_validation_1 = require("./products.validation");
const route = (0, express_1.Router)();
route.get("/", products_controller_1.productController.getAllProducts);
route.get("/filtered", products_controller_1.productController.getFilteredProducts);
route.get("/:id", products_controller_1.productController.getSingleProducts);
route.delete("/:id", products_controller_1.productController.deleteProduct);
route.post("/", (0, requestValidator_1.default)(products_validation_1.productValidation), products_controller_1.productController.createProduct);
route.patch("/:id", (0, requestValidator_1.default)(products_validation_1.updateProductValidation), products_controller_1.productController.updateProduct);
exports.productRoute = route;
