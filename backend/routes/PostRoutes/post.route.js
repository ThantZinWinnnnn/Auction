const express = require("express");
const router = express.Router();

// created from Admin Dashboard
const {
  createPost,
  deleteById,
  postById,
  postByCategory,
  getAllPosts,
  queryProduct
} = require("../../controllers/PostsController/post.controller");
const {detailTitles} = require("../../controllers/detail.component.title.api/detail.title")

router.route("/allPosts").get(getAllPosts);
router.route("/createpost").post(createPost);
router.route("/delete/:id").get(deleteById);
router.route("/:id").get(postById);
router.route("/category").post(postByCategory);
router.route("/search/product").get(queryProduct)

//temporary api
router.route("/product/title").put(detailTitles)

module.exports = router;
