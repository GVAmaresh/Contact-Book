const User = require("../Controller/userController");
const express = require("express");
const router = express.Router();

router.route("/createUserJson").post(User.createUserFromJson);
router.route("/findAllUser/:max").get(User.findAllUser);
router.route("/createUser").post(User.createUser);
router.route("/deleteAllUser").delete(User.deleteAllUser);
router.route("/updateUser/:id").put(User.updateUser);
router.route("/getUser/:id").get(User.getUser);
router.route("/deleteUser/:id").delete(User.deleteUser);

module.exports = router;
