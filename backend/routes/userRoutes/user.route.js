const express = require("express")
const router = express.Router()

const { singUp,getAllUser,logout,loginUser,forgotPassword,updatePassword,getLoggedInUser,updateProfile,getUserProducts, reUpdateUserProfile} = require('../../controllers/UserControllers/userController')
const { isAuthenticatedUser } = require("../../middleware/AuthUser")

router.route('/logout').get(logout)
router.route('/all').get(getAllUser)
router.route('/getUser').get(isAuthenticatedUser,getLoggedInUser)
router.route('/product').get(isAuthenticatedUser,getUserProducts)
router.route('/signup').post(singUp)
router.route('/signin').post(loginUser)
router.route('/forgot').put(forgotPassword)
router.route('/updatepass').post(updatePassword)
router.route('/updateProfile').put(isAuthenticatedUser,updateProfile)
router.route('/reUpdateProfile').put(isAuthenticatedUser,reUpdateUserProfile)


module.exports = router