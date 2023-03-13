const express = require("express");
const router = express.Router();


// created from Admin Dashboard
const {createPost} = require("../../controllers/PostsController/post.controller");

router.route('/createpost').post(createPost);


module.exports = router;