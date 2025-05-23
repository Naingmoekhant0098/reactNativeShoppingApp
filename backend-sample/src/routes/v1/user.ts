import express from "express";

import {
  index,
  show,
  toggleFavourite,
} from "../../controllers/productController";
import { getCategoryList } from "../../controllers/categoryController";

const router = express.Router();

router.get("/categories", getCategoryList);
// router.get('/categories', authorise(true, "admin"), index);

// GET localhost:8080/api/v1/products?limit=10&category=1&cursor=5
// Get all products
router.get("/products", index);
// router.get('/products', authorise(true, "admin"), index);

// GET localhost:8080/api/v1/products/1234 - get a product
router.get("/products/:id", show);

// POST localhost:8080/api/v1/products/add-favourite
router.patch("/products/favourite-toggle", toggleFavourite);

export default router;
