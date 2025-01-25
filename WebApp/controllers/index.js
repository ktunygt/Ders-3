// Yeni bir router nesnesi oluşturuluyor
const express = require("express");
const router = express.Router();

const { getHome, postHome } = require("./home/index");
const { getRegister, postRegister } = require("./auth/register");
const { getLogin, postLogin } = require("./auth/login");

// "/home" adresine GET isteği geldiğinde home/index şablonunu render et
router.get("/home", getHome);

// "/home" adresine POST isteği geldiğinde form verisini al ve konsola yazdır
router.post("/home", postHome);

router.get("/register", getRegister);
router.post("/register", postRegister);

router.get("/login", getLogin);
router.post("/login", postLogin);

module.exports = router;
