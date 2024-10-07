const Config = require("../../config");
const { ErrorHelper } = require("../../helpers");

module.exports = async (ClientRequest, ethol_config, headers) => {
  let url = Config.url.URL_LIST_MATAKULIAH.replace(
    "{tahun_aktif}",
    ethol_config.config_aplikasi.tahun_aktif,
  ).replace("{semester_aktif}", ethol_config.config_aplikasi.semester_aktif);

  let options = {
    url: url,
    method: "GET",
    headers,
    withCredentials: true,
  };

  // request with axios asynchronously
  try {
    let response = await ClientRequest(options);
    return response.data;
  } catch (error) {
    ErrorHelper(error);
    return;
  }
};
