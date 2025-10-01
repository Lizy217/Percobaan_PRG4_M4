//fungsi untuk menghitung usia berdasarkan tahun lahir
function hitungUsia(tahunlahir) {
    const tahunSekarang = new Date().getFullYear();
    return tahunSekarang - tahunlahir;
}

document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("formUsia")
        .addEventListener("submit", function (event) {
            event.preventDefault(); //mencegah form reload

            //ambil input tahun lahir
            const inputTahunLahir = document.getElementById("tahunLahir").value;
            const tahunLahir = parseInt(inputTahunLahir, 10);

            if (isNaN(tahunLahir) || tahunLahir <= 0) {
                document.getElementById("hasil").innerText =
                    "Masukan tahun lahir yang valid!";
                return;
            }

            const usia = hitungUsia(tahunLahir);

            if (usia < 0) {
                document.getElementById("hasil").innerText =
                    "Tahun lahir lebih besar dari tahun sekarang!";
            } else {
                document.getElementById(
                    "hasil"
                ).innerText = `Usia anda adalah ${usia} tahun.`;
            }
        });
});
