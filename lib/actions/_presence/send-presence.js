const WriteLog = require("../../../helpers/write-log");
const Config = require("../../../config");
const { ErrorHelper } = require("../../../helpers");
module.exports = async (ClientRequest, presensi, matkul, conf, headers) => {
  let data = {
    jenis_schema: presensi.jenisSchema,
    key: presensi.key,
    kuliah: matkul.nomor,
    kuliah_asal: matkul.kuliah_asal,
    mahasiswa: conf.user.nomor,
  };

  let options = {
    url: Config.url.URL_PRESENSI,
    method: "POST",
    headers,
    data,
  };

  // request with axios asynchronously
  try {
    let response = await ClientRequest(options);
    let text = `Presensi ${matkul.matakuliah.nama} pada ${presensi.tanggal_format} : ${response.data.pesan}`;
    WriteLog(text);
    return response.data;
  } catch (error) {
    ErrorHelper(error);
    return;
  }
};
