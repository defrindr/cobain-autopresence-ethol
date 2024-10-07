const Config = require("../../../config");
module.exports = async (ClientRequest, matkul, ethol_config, headers) => {
  // cek riwayat presensi
  let url_riwayat_presensi = Config.url.URL_RIWAYAT_PRESENSI.replace(
    "{nomor_matkul}",
    matkul.nomor,
  ).replace("{nomor_mahasiswa}", ethol_config.user.nomor);

  let response_riwayat_presensi = await ClientRequest({
    url: url_riwayat_presensi,
    headers,
  });

  return response_riwayat_presensi.data;
};
