const bcrypt = require("bcrypt");
const { v4 } = require('uuid');
const gravatar = require('gravatar');
const { User } = require("../../models");
const { RequestError, sendEmail } = require("../../helpers");

const register = async (req, res) => {
   
    const { password, email, subscription } = req.body;
    const user = await User.findOne({ email });
    const hachPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
   
    if (user) {
        throw RequestError(409, `User ${email} alredy exist!`);
    }
    const verificationToken = v4();
    const result = await User.create({ password: hachPassword, email, subscription, avatarURL, verificationToken });
    const mail = {
        to: email,
        subject: "Confirm registration",
        html: `<a target="_blanc" href="http://localhost:3000/api/contacts/verify/${verificationToken}">Please confirm email</a>`
    }
    await sendEmail(mail);
    res.status(201).json({
        status: "success",
        code: 201,
        user: {
            email: result.email,
            subscription
        }
    })
};

module.exports = register;