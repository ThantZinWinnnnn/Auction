const express = require("express");
const router = express.Router();

// created from Admin Dashboard
const {
  createPost,
  deleteById,
  postById,
  postByCategory,
  productByCategory,
  getAllPosts,
  queryProduct,
  userCreateProduct,
  deletePosts,
  getProductBySubCategory,
  getAllProductsByUserId
} = require("../../controllers/PostsController/poroduct.controller");
const {
  detailTitles,
} = require("../../controllers/detail.component.title.api/detail.title");
const { isAuthenticatedUser } = require("../../middleware/AuthUser");

router.route("/allProducts").get(getAllPosts);
router.route("/overview").get(isAuthenticatedUser, getProductBySubCategory);
router.route("/:productId").get(isAuthenticatedUser,postById);
router.route("/search").get(queryProduct);
router.route("/category").post(isAuthenticatedUser,productByCategory);
router.route("/user").get(isAuthenticatedUser,getAllProductsByUserId)

router.route("/create").post(isAuthenticatedUser,createPost);

router.route("/:productId").delete(deleteById);




//temporary api
router.route("/product/title").put(detailTitles);
router.route("/delete").delete(deletePosts);

module.exports = router;
