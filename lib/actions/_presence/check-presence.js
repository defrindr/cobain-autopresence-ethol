const Config = require("../../../config");
module.exports = async(ClientRequest, matkul, headers) => {
    // cek presensi terakhir
    let url_presensi_terakhir = Config.url.URL_PRESENSI_TERAKHIR.replace(
        "{matkul}",
        matkul.nomor
    );

    let response_cek_presensi = await ClientRequest({
        url: url_presensi_terakhir,
        headers,
    });

    return response_cek_presensi.data;
}