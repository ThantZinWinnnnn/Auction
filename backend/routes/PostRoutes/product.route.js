const express = require("express");
const router = express.Router();

// created from Admin Dashboard
const {
  createPost,
  deleteById,
  postById,
  postByCategory,
  getAllPosts,
  queryProduct,
  userCreateProduct,
  deletePosts,
  getProductBySubCategory,
} = require("../../controllers/PostsController/poroduct.controller");
const {
  detailTitles,
} = require("../../controllers/detail.component.title.api/detail.title");
const { isAuthenticatedUser } = require("../../middleware/AuthUser");

router.route("/allPosts").get(isAuthenticatedUser, getAllPosts);
router.route("/overview").get(isAuthenticatedUser, getProductBySubCategory);
router.route("/delete/:id").get(deleteById);
router.route("/:id").get(postById);
router.route("/search/product").get(queryProduct);
router.route("/createpost").post(isAuthenticatedUser, userCreateProduct);
router.route("/category").post(postByCategory);

//temporary api
router.route("/product/title").put(detailTitles);
router.route("/delete").delete(deletePosts);

module.exports = router;
