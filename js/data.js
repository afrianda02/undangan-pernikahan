// Data undangan - edit sesuai kebutuhan
window.WEDDING = {
  groom: { name: "Afrianda Bahri S.Kom", nickname: "Afrianda", parents: "Bpk. Gusrianto & Ibu Zulhana Devianti", photo: "assets/Foto/MLJ03193.JPG" },
  bride: { name: "Ketrin Yoan Tamara S.Tra", nickname: "Ketrin", parents: "Bpk. Alm. Daswar Vive Riyanto & Ibu Almh. Anastasia Yachinta Tri Harjanti", photo: "assets/Foto/MLJ03094.JPG" },
  date: "2027-01-17T09:00:00",
  dateLabel: "Minggu, 17 Januari 2027",
  akad: { time: "08:00 - 09:00 WIB", place: "Tuscan Dreams", address: "Jl. Cipete IV No.6A, RT.2/RW.4, Cipete Sel., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12410" },
  resepsi: { time: "10:00 - 14:00 WIB", place: "Tuscan Dreams", address: "Jl. Cipete IV No.6A, RT.2/RW.4, Cipete Sel., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12410" },
  mapsUrl: "https://maps.app.goo.gl/jzyM9dmbwHSHprhC8",
  gallery: [
    "assets/Foto/MLJ02981.JPG",
    "assets/Foto/MLJ02995.JPG",
    "assets/Foto/MLJ03213.JPG",
    "assets/Foto/MLJ03251.JPG",
  ],
  rekening: [
    { bank: "BCA", number: "1234567890", name: "Afrianda Bahri" },
    { bank: "Mandiri", number: "0987654321", name: "Ketrin Yoan Tamara" },
  ],
  music: "assets/music/a-thousand-years.mp3", // letakkan file audio di sini
};

// Ambil nama tamu dari query param ?to=
function getGuestName() {
  const params = new URLSearchParams(window.location.search);
  const to = params.get("to");
  return to ? decodeURIComponent(to.replace(/\+/g, " ")) : "Tamu Undangan";
}
window.getGuestName = getGuestName;
