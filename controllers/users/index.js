const register = require("./register");
const login = require("./login");
const getCurrent = require("./getGurrent");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");

module.exports = {
    register,
    login,
    getCurrent,
    logout,
    updateAvatar,
    verify
}