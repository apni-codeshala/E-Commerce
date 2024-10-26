import express from "express";

import isAuthenticated from "../../middlewares/auth.validator.js";
import {
  isAdmin,
  isSeller,
  canAddProduct,
} from "../../middlewares/authorization.validator.js";
import {
  signup,
  otpVerification,
  generateNewOTP,
  signin,
  isVerified,
} from "../../controllers/user.controller.js";
import {
  becomeSeller,
  veriySeller,
  getAllApprovedSellers,
  getAllUnapprovedSellers,
  getSellerInfo,
} from "../../controllers/seller.controller.js";
import {
  createReview,
  getProductReviews,
  updateReview,
  deleteReview,
} from "../../controllers/review.controller.js";
// import { addProduct } from "../../controllers/product.controller.js";
import {
  createCategory,
  getCategoryInfo,
  deleteCategory,
  addCategoryProperties,
  deleteCategoryProperties,
} from "../../controllers/category.contoller.js";

const router = express.Router();

// Server status
router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Server is working properly, server is up",
    data: "Server is working properly",
    err: {},
  });
});

// User routes
router.post("/signup", signup);
router.post("/otp-verification", otpVerification); // this will return token with him
router.post("/gen-new-otp", generateNewOTP);
router.post("/signin", signin);
router.get("/isverified", isAuthenticated, isVerified);

// seller routes
router.use(isAuthenticated);
router.post("/become-seller", becomeSeller);
router.patch("/veify-seller", isAdmin, veriySeller);
router.get("/get-all-approved-sellers", isAdmin, getAllApprovedSellers);
router.get("/get-all-unapproved-sellers", isAdmin, getAllUnapprovedSellers);
// router.patch("/update-seller-info", isSeller, updateSellerInfo);
// 1. here request seller id and updating document seller id should remain same than only do the update, no other people do the update of others
// 2. seller would not able to update his role
router.get("/seller-info", getSellerInfo);

// products routes
// router.post("/addProduct", isSeller, addProduct);
// router.patch("/update-product", isSeller, updateProduct);
// router.delete("/delete-product", idAdminOrSeller, deleteProduct);
// router.get("/get-products", getProducts);
// router.get("/category-products", getCategoryProducts); // pass category in query params
// router.get("product", getProduct); // pass id of product in query param, this is for full one product detail
// router.get("/searchProduct", getSearcedProduct); // pass search query in query params

// review routes
router.post("/post-review", createReview);
router.get("/product-reviews", getProductReviews); // pass product_id to get particular product review
router.patch("/update-review", updateReview);
router.delete("/delete-review", deleteReview);

// category routes
router.post("/add-category", isAdmin, createCategory);
router.get("/get-category-info", canAddProduct, getCategoryInfo);
router.delete("/delete-category", isAdmin, deleteCategory);
router.patch("/add-category-properties", isAdmin, addCategoryProperties);
router.patch("/delete-category-property", isAdmin, deleteCategoryProperties);

// // cart routes
// router.post("/add-product-to-cart", addProductToCart);

// // order routes
// router.post("/order-placed", placeOrder);
// router.patch("/update-order-status", updateOrderStatus);
// router.get("/users-orders", getAllOrdersOfUser);
// router.get("/get-order-details", getOrderDetails); // pass order_id in query params to get particular product

// payments routes

export default router;
