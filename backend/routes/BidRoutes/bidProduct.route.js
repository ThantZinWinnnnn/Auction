const express = require("express")
const router = express.Router();

const {bidProduct,deleteMany,deleteManyLost,bidCurrentUser,userWinProduct} = require("../../controllers/bid.product.controller/bid.product.controller");
const { isAuthenticatedUser } = require("../../middleware/AuthUser");

router.route('/bid').post(isAuthenticatedUser,bidProduct);
router.route('/winProducts').get(isAuthenticatedUser,userWinProduct)

//temporary
router.route('/deletewin').delete(deleteMany);
router.route('/deletelost').delete(deleteManyLost);
router.route('/update').put(isAuthenticatedUser,bidCurrentUser)

module.exports = router