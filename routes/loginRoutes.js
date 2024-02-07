const express = require("express");
const router = express.Router();
const { loginUser, registerUser, currentUser} = require("../controllers/loginController")
const validateToken = require("../middleware/authentication")

router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/current",validateToken, currentUser)


module.exports = router;