const User = require("../../../models/user");
const loginValidation = require("../../../validation/auth/login");

const getLogin = (req, res) => {
    return res.render("auth/login");
};

const postLogin = async (req, res) => {
    const data = req.body;
    const validate = loginValidation(data);

    if (validate.error) {
        return res.render("auth/login", {
            alert: { error: validate.error.details[0].message }
        });
    }

    const user = await User.findOne({
        where: {
            email: data.email
        },
        raw: true
    });

    if (!user) {
        return res.send("Böyle bir kullanıcı yok.");
    }
    else if (user.password !== data.password) {
        return res.render("auth/login", {
            alert: { warning: "Şifre hatalı" }
        });
    }

    return res.render("home", {
        alert: { success: "Giriş başarılı" }
    });
};

module.exports = {
    getLogin,
    postLogin
};
