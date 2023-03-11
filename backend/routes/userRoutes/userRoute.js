const express = require("express")
const router = express.Router()

const { singUp,getAllUser,logout} = require('../../controllers/UserControllers/userController')

router.route('/signup').post(singUp)
router.route('/logout').get(logout)
router.route('/all').get(getAllUser)

module.exports = router