const fs = require("fs");
const { DEBUG_PATH } = require("../config/file");
const sendWa = require("./send-wa");
const log_file = fs.createWriteStream(DEBUG_PATH, { flags: "w" });
const util = require("util");
const Config = require("../config");

module.exports = async(d) => {
    let newdate = new Date().toISOString().split("T")[0];
    log_file.write(util.format(`[${newdate}] : ` + d + "\n"));
    console.log(d);
    if (Config.whatsapp.enable) {
        await sendWa(d);
    }
};