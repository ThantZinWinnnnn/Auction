const expres = require("express");
const router = expres.Router();

const {createComment} = require("../../controllers/PostsController/comment.controller")

router.route('/createCom/:postId').post(createComment);


module.exports = router;