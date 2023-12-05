const express = require("express");
const { register, login } = require("../controllers/userControllers");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const { updateUserProfile } = require("../controllers/userControllers");

router.route("/").post(register);
router.route("/login").post(login);
router.route("/profile").post(protect, updateUserProfile);
module.exports = router;
