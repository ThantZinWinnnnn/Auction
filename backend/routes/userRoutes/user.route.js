const express = require("express")
const router = express.Router()

const { singUp,getAllUser,logout,loginUser,forgotPassword,updatePassword,getLoggedInUser,updateProfile} = require('../../controllers/UserControllers/userController')
const { isAuthenticatedUser } = require("../../middleware/AuthUser")

router.route('/logout').get(logout)
router.route('/all').get(getAllUser)
router.route('/getUser').get(isAuthenticatedUser,getLoggedInUser)
router.route('/signup').post(singUp)
router.route('/signin').post(loginUser)
router.route('/forgotpss').post(forgotPassword)
router.route('/updatepass').post(updatePassword)
router.route('/updateProfile').put(isAuthenticatedUser,updateProfile)


module.exports = router