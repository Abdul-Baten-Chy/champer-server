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
exports.productService = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const products_model_1 = require("./products.model");
const getAllProductServices = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (searchTerm) {
        result = yield products_model_1.Product.find({
            $or: [
                { name: { $regex: searchTerm, $options: "i" } },
                { description: { $regex: searchTerm, $options: "i" } },
            ],
        });
    }
    else {
        result = yield products_model_1.Product.find();
    }
    return result;
});
const filterdProductsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.find(query);
    if (result.length < 1) {
        throw new AppError_1.default(404, "no data found");
    }
    return result;
});
const getSingleProductServices = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.findById(id);
    if (!result) {
        throw new AppError_1.default(404, "no data found");
    }
    return result;
});
const deleteProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield products_model_1.Product.findByIdAndDelete(id);
});
const createProductIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield products_model_1.Product.create(payload);
});
const updateProductInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
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
    return yield products_model_1.Product.findByIdAndUpdate(id, payload, { new: true });
});
exports.productService = {
    getAllProductServices,
    createProductIntoDB,
    updateProductInDB,
    getSingleProductServices,
    deleteProductFromDB,
    filterdProductsFromDB,
};
