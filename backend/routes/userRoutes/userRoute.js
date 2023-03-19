const express = require("express")
const router = express.Router()

const { singUp,getAllUser,logout,loginUser} = require('../../controllers/UserControllers/userController')

router.route('/logout').get(logout)
router.route('/all').get(getAllUser)
router.route('/signup').post(singUp)
router.route('/login').post(loginUser)


module.exports = router