const expres = require("express");
const router = expres.Router();

const {createComment,updateComment} = require("../../controllers/ProductControllers/comment.controller")

router.route('/createCom/:postId').post(createComment);
router.route("/update/comment").put(updateComment)



module.exports = router;