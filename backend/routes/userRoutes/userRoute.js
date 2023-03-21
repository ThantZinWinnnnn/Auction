const express = require("express")
const router = express.Router()

const { singUp,getAllUser,logout,loginUser,forgotPassword,updatePassword} = require('../../controllers/UserControllers/userController')

router.route('/logout').get(logout)
router.route('/all').get(getAllUser)
router.route('/signup').post(singUp)
router.route('/login').post(loginUser)
router.route('/forgotpss').post(forgotPassword)
router.route('/updatepass').post(updatePassword)


module.exports = router