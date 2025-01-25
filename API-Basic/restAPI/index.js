const express = require("express");
const router = express.Router();

const home = require("./home");
const login = require("./auth/login");
const register = require("./auth/register");

router.get("/", home);
router.post("/login", login);
router.post("/register", register);

module.exports = router;
