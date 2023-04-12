const express = require("express");
const router = express.Router();

const {
  bidProduct,
  deleteMany,
  deleteManyLost,
  bidCurrentUser,
  userWinProduct,
} = require("../../controllers/bid.product.controller/bid.product.controller");
const { isAuthenticatedUser } = require("../../middleware/AuthUser");

router.route("/bid/:productId").post(isAuthenticatedUser, bidProduct);
router.route("/winProducts").get(isAuthenticatedUser, userWinProduct);
router
  .route("/firstBidUser/:productId")
  .put(isAuthenticatedUser,bidCurrentUser)

//temporary
router.route("/deletewin").delete(deleteMany);
router.route("/deletelost").delete(deleteManyLost);

module.exports = router;
