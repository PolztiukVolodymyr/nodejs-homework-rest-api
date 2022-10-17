const sgMail = require("@sendgrid/mail");
const { SENGRID_API_KEY } = process.env;

sgMail.setApiKey(SENGRID_API_KEY);

const sendEmail = async (data) => {
    // try {
        const email = { ...data, from: "wowa.pol@i.ua" };
        await sgMail.send(email);
        return true;
    // } catch (error) {
    //     throw error;
    // }

}

module.exports = sendEmail;