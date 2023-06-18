const express = require("express");
const router = express.Router();

// created from Admin Dashboard
const {
  createPost,
  deleteById,
  postById,
  productByCategory,
  getAllPosts,
  queryProduct,
  getProductBySubCategory,
  bidProductByUser,
  addWatchListProduct,
  removeWatchListProduct,
  updateProduct
} = require("../../controllers/ProductControllers/poroduct.controller");
const {
  detailTitles,
} = require("../../controllers/detail.component.title.api/detail.title");
const { isAuthenticatedUser } = require("../../middleware/AuthUser");

router.route("/allProducts").get(getAllPosts);
router.route("/queryProduct").get(isAuthenticatedUser, queryProduct);
router.route("/subCategory").post(getProductBySubCategory);
router.route("/category").post(productByCategory);
router.route("/create").post(isAuthenticatedUser, createPost);
router.route("/bid").put(isAuthenticatedUser, bidProductByUser);
router.route("/watchlist").post(isAuthenticatedUser, addWatchListProduct);
router
  .route("/removeWatchList")
  .put(isAuthenticatedUser, removeWatchListProduct);
router.route('/updatedProduct').put(isAuthenticatedUser,updateProduct)

//delete api
router.route("/:productId").delete(deleteById);

//temporary api
router.route("/product/title").put(detailTitles);

router.route("/:productId").get(isAuthenticatedUser, postById);

module.exports = router;
