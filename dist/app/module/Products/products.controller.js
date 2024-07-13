"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const products_service_1 = require("./products.service");
const getAllProducts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = req.query;
    const result = yield products_service_1.productService.getAllProductServices(searchTerm);
    return (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Product retrieved successfully",
        data: result,
    });
}));
const getSingleProducts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield products_service_1.productService.getSingleProductServices(id);
    return (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Product retrieved successfully",
        data: result,
    });
}));
const getFilteredProducts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category, minPrice, maxPrice } = req.query;
    // Build the query object
    const query = {};
    if (category) {
        query.category = category;
    }
    if (minPrice || maxPrice) {
        query.price = {};
        if (minPrice) {
            query.price.$gte = parseFloat(minPrice);
        }
        if (maxPrice) {
            query.price.$lte = parseFloat(maxPrice);
        }
    }
    const result = yield products_service_1.productService.filterdProductsFromDB(query);
    return (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Product filtered successfully",
        data: result,
    });
}));
const deleteProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield products_service_1.productService.deleteProductFromDB(id);
    return (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Product deleted successfully",
        data: result,
    });
}));
const createProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newProdut = req.body;
    const result = yield products_service_1.productService.createProductIntoDB(newProdut);
    return (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Product created successfully",
        data: result,
    });
}));
const updateProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProduct = req.body;
    const id = req.params.id;
    const result = yield products_service_1.productService.updateProductInDB(id, updatedProduct);
    return (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Product updated successfully",
        data: result,
    });
}));
exports.productController = {
    getAllProducts,
    createProduct,
    updateProduct,
    getSingleProducts,
    deleteProduct,
    getFilteredProducts,
};
