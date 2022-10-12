const bcrypt = require("bcrypt");
const gravatar = require('gravatar');
const { User } = require("../../models");
const { RequestError } = require("../../helpers");

const register = async (req, res) => {
   
    const { password, email, subscription } = req.body;
    const user = await User.findOne({ email });
    
   
    if (user) {
        throw RequestError(409, `User ${email} alredy exist!`);
    }
    const hachPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    await User.create({ password: hachPassword, email, subscription, avatarURL });
    res.status(201).json({
        status: "success",
        code: 201,
        user: {
            email,
            subscription
        }
    })
};

module.exports = register;