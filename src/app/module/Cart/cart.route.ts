import { Router } from "express";
import { cartController } from "./cart.controller";

const route = Router();

route.post("/", cartController.createCart);
export const cartRoute = route;
