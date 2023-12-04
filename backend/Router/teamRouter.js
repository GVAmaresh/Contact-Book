const Team = require("../Controller/teamController");

const express = require("express");
const router = express.Router();

router.route("/createTeam").post(Team.createTeam);
router.route("/findAllTeam").get(Team.findAllTeam);

module.exports = router;
