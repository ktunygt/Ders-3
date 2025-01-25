const registerValidation = require("../../../validation/auth/register");
const User = require("../../../models/user");

const getRegister = (req, res) => {
    return res.render("auth/register");
};

const postRegister = async (req, res) => {
    const data = req.body;
    const validate = registerValidation(data);

    if (validate.error) {
        return res.send(validate.error.details[0].message);
    }

    const user = await User.findOne({
        where: {
            email: data.email
        },
        raw: true
    });

    if (user) {
        return res.send("Böyle bir kullanıcı mevcut.");
    }

    await User.create({
        name: data.name,
        email: data.email,
        password: data.password
    });

    return res.send("İşlem başarılı");
};

module.exports = {
    getRegister,
    postRegister
};
