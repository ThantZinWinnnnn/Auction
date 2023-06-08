const express = require("express");
const router = express.Router();

const {
  bidProduct,
  deleteMany,
  deleteManyLost,
  bidCurrentUser,
  userWinProducts,
  userLostProducts,
  userWatchListProducts,
} = require("../../controllers/bid.product.controller/bid.product.controller");
const { isAuthenticatedUser } = require("../../middleware/AuthUser");

router.route("/winProducts").get(isAuthenticatedUser, userWinProducts);
router.route("/lostProducts").get(isAuthenticatedUser, userLostProducts);
router
  .route("/watchlistProducts")
  .get(isAuthenticatedUser, userWatchListProducts);
router.route("/bid").put(isAuthenticatedUser, bidProduct);

router
  .route("/firstBidUser/:productId")
  .put(isAuthenticatedUser, bidCurrentUser);

//temporary
// router.route("/deletewin").delete(deleteMany);
// router.route("/deletelost").delete(deleteManyLost);

module.exports = router;
