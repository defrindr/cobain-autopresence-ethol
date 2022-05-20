const fs = require("fs");
const { CheckToken } = require(".");
const Config = require("../../config");
const { ReadFile, WriteFile } = require("../../helpers");
const UpdateTahunKuliah = require("../actions/update-tahun-kuliah");
const Act = require("./act");

const DoLogin = async(ClientRequest) => {
    let token = await Act(ClientRequest);
    WriteFile(Config.path.BASE_PATH + Config.path.TOKEN_PATH, token);
    await UpdateTahunKuliah(ClientRequest, token);
    return token;
};

module.exports = async(ClientRequest) => {
    let token = "";

    if (!fs.existsSync(Config.path.BASE_PATH + Config.path.TOKEN_PATH)) {
        token = await DoLogin(ClientRequest);
    } else {
        token = ReadFile(Config.path.BASE_PATH + Config.path.TOKEN_PATH);
        let is_token_valid = await CheckToken(ClientRequest, token);

        if (!is_token_valid) {
            token = await DoLogin(ClientRequest);
        }
    }
    return token;
};