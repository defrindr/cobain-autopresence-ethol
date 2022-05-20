const sendWa = require("./send-wa");
const Config = require("../config");

module.exports = async(d) => {
    if (Config.whatsapp.enable) {
        await sendWa("ERROR: " + d);
    }
};