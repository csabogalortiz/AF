const router = require("express").Router();
// const bcryptjs = require('bcryptjs')
const User = require("../models/User.model")
const saltRounds = 10
// const { isLoggedOut } = require('./../middleware/route-guard');

router.get("/", (req, res, next) => {
    res.json("All good in here");
});

module.exports = router;