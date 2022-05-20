let BASE_URL = "https://ethol.pens.ac.id/";
let URL_BASE_LOGIN = "https://login.pens.ac.id";
let URL_LOGIN =
    URL_BASE_LOGIN + "/cas/login?service=http%3A%2F%2Fethol.pens.ac.id%2Fcas%2F";
let URL_DASHBOARD = BASE_URL + "mahasiswa/beranda";
let URL_CEK_NOTIF =
    BASE_URL + "api/notifikasi/mahasiswa-belum-baca";
let URL_PRESENSI = BASE_URL + "api/presensi/mahasiswa";
let URL_RIWAYAT_PRESENSI =
    BASE_URL + "api/presensi/riwayat?kuliah={nomor_matkul}&jenis_schema=2&nomor={nomor_mahasiswa}";
let URL_LIST_MATAKULIAH =
    BASE_URL + "api/kuliah?tahun={tahun_aktif}&semester={semester_aktif}";
let URL_PRESENSI_TERAKHIR =
    BASE_URL + "api/presensi/terakhir-kuliah?kuliah={matkul}&jenis_schema=2";

module.exports = {
    BASE_URL,
    URL_DASHBOARD,
    URL_BASE_LOGIN,
    URL_LOGIN,
    URL_CEK_NOTIF,
    URL_PRESENSI,
    URL_RIWAYAT_PRESENSI,
    URL_LIST_MATAKULIAH,
    URL_PRESENSI_TERAKHIR,
};