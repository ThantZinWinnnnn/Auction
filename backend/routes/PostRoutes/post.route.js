const express = require("express");
const router = express.Router();


// created from Admin Dashboard
const {createPost,deletePosts,postById,postByCategory} = require("../../controllers/PostsController/post.controller");

router.route('/createpost').post(createPost);
router.route('/delete/:id').get(deletePosts)
router.route('/:id').get(postById)
router.route('/category').post(postByCategory)


module.exports = router;