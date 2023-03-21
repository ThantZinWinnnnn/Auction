const express = require("express");
const router = express.Router();

// created from Admin Dashboard
const {
  createPost,
  deletePosts,
  postById,
  postByCategory,
  getAllPosts,
  queryProduct,
} = require("../../controllers/PostsController/post.controller");

router.route("/allPosts").get(getAllPosts);
router.route("/createpost").post(createPost);
router.route("/delete/:id").get(deletePosts);
router.route("/:id").get(postById);
router.route("/category").post(postByCategory);
router.route("/search").get(queryProduct);

module.exports = router;
