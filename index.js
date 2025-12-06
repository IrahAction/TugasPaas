const express = require("express");
const app = express();

// Halaman utama
app.get("/", (req, res) => {
  res.send(`
    <h2>Selamat datang di Aplikasi PaaS Kelompok Kami 🚀</h2>
    <p>Aplikasi ini berhasil berjalan menggunakan layanan Render (PaaS).</p>
    <p>Kelompok: KING</p>
    <p>Kelas: IF-03-02</p>
    <p>Untuk melihat waktu server realtime, klik /waktu</p>
  `);
});

// Halaman waktu realtime
app.get("/waktu", (req, res) => {
  const waktu = new Date();
  res.send(`
    <h3>Waktu server saat ini ⏰</h3>
    <p>${waktu}</p>
    <a href="/">Kembali ke halaman utama</a>
  `);
});

// Port untuk PaaS
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});
