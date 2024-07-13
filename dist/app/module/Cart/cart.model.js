"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = require("mongoose");
const cartSchema = new mongoose_1.Schema({
    id: String,
    quantity: Number,
    address: String,
    email: String,
    name: String,
    userProductInfo: [{}],
    userTotalPay: Number,
});
exports.Cart = (0, mongoose_1.model)("Cart", cartSchema);
