const ValidateToken = require("../auth/validate-token");
const Config = require("../../config");
const GrabSemuaMataKuliah = require("./grab-semua-mata-kuliah");

const { SendPresence, CheckPresence, HistoryPresence } = require("./_presence");

module.exports = async (ClientRequest) => {
  let token = await ValidateToken(ClientRequest);

  // get ethol config
  let ethol_config = require(
    Config.path.BASE_PATH + Config.path.ETHOL_CONF_PATH(Config.ethol.email),
  );

  // set headers
  let headers = { token };

  let list_matakuliah = await GrabSemuaMataKuliah(
    ClientRequest,
    ethol_config,
    headers,
  );

  let success_presence = [];
  for (let i = 0; i < list_matakuliah.length; i++) {
    let matkul = list_matakuliah[i];

    let presensi = await CheckPresence(ClientRequest, matkul, headers);

    if (presensi.open) {
      let riwayat_presensi = await HistoryPresence(
        ClientRequest,
        matkul,
        ethol_config,
        headers,
      );
      if (riwayat_presensi.length > 0) {
        let last_presensi = riwayat_presensi[0];
        if (last_presensi.key !== presensi.key) {
          let data = await SendPresence(
            ClientRequest,
            presensi,
            matkul,
            ethol_config,
            headers,
          );
          success_presence.push(data);
        }
      }
    }
  }
  return success_presence;
};
