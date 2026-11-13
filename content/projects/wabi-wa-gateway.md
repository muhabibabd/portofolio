---
title: "Wabi - WhatsApp Gateway & Automation Engine (Non-Official)"
slug: "wabi-wa-gateway"
category: "DevOps & Cloud"
featured: false
date: "2026"
role: "Backend & Systems Integration Engineer"
deskripsi: "Mesin gateway otomatisasi WhatsApp independen (CM Wabi) berbasis emulasi soket web, dirancang untuk notifikasi transaksi e-commerce, webhook, dan broadcast massal."
tags: ["Node.js", "Baileys Socket Engine", "Laravel API Wrapper", "Redis Queue", "Docker Container", "PostgreSQL"]
coverImage: "/images/projects/wabi-wa-gateway-cover.png"
liveUrl: "https://wabi.cmcentre.my.id/"
metrics:
  - label: "Kapasitas Kirim / Menit"
    value: "150+ pesan"
  - label: "Kontak Terkelola"
    value: "800+ kontak"
  - label: "Multi-Device Sessions"
    value: "Multi-device aktif"
---

# Wabi - WhatsApp Gateway & Automation Engine (Non-Official)

Wabi (CM Wabi) adalah server gateway mandiri yang menghubungkan aplikasi bisnis, sistem kasir (POS), platform CRM, dan webhook e-commerce langsung ke jaringan WhatsApp tanpa biaya per pesan, memanfaatkan protokol soket WhatsApp Web multi-device yang telah dioptimasi untuk konkurensi tinggi.

![Dashboard Superadmin CM Wabi WhatsApp Gateway](/images/projects/wabi-wa-gateway-cover.png)

## 1. Konteks & Masalah
- Pelaku usaha ritel, startup, dan UMKM membutuhkan kanal pengiriman notifikasi transaksional otomatis (konfirmasi order pesanan, resi pengiriman, reminder tagihan, OTP login) dengan biaya infrastruktur yang terukur.
- Layanan gateway SaaS pihak ketiga sering mengenakan biaya berlangganan mahal, membatasi kuota pesan per hari, atau memiliki risiko kebocoran data kontak pelanggan.
- Kebutuhan mengelola beberapa nomor WhatsApp operasional (misal: nomor CS, nomor finance, nomor notifikasi order) dalam satu dashboard terpusat.

## 2. Arsitektur & Rekayasa Teknis
1. **Headless Socket Session Manager**:
   - Engine dibangun menggunakan implementasi protokol soket WhatsApp multi-device (Baileys) yang sangat ringan tanpa memerlukan browser Chromium berat.
   - Kredensial sesi autentikasi dan enkripsi End-to-End disimpan secara terenkripsi di PostgreSQL / Redis dengan kemampuan reconnect otomatis saat terjadi gangguan jaringan.
2. **Anti-Ban Intelligent Throttling**:
   - Algoritma antrean pesan cerdas berbasis token-bucket: menerapkan jeda waktu acak (*humanized random delay* 3-8 detik antar pesan), pembatasan kuota per menit per nomor, dan rotasi otomatis jika menggunakan nomor ganda (*load-balancing numbers*).
3. **Event Webhook Dispatcher**:
   - Setiap pesan masuk, status centang dua (*delivered*), dan centang biru (*read*) diteruskan via HTTP POST Webhook ke sistem klien dengan mekanisme retry otomatis (Exponential Backoff) bila server tujuan lambat merespons.
4. **Containerized Multi-Instance**:
   - Arsitektur Docker modular yang memungkinkan penambahan nomor WhatsApp baru hanya dengan memicu container worker baru tanpa mematikan engine utama.

## 3. Fitur Utama
- **Dashboard Superadmin CM Wabi**: Pemantauan real-time status perangkat WhatsApp (terhubung / terputus), total kontak terdaftar, log aktivitas pesan terbaru, dan ringkasan kampanye siaran.
- **RESTful API Pengiriman Lengkap**: Kirim pesan teks, format tombol, pesan gambar promosi, dokumen PDF faktur/invoice, lokasi toko, dan audio via endpoint HTTP standar.
- **Auto-Reply Bot & Keyword Trigger**: Engine pencocokan kata kunci (regex atau exact match) untuk merespons pertanyaan pelanggan secara otomatis (cek ongkir, jam operasional, panduan order).
- **Broadcast Campaign Scheduler**: Pengiriman pesan siaran terjadwal kepada ratusan kontak dengan personalisasi nama pelanggan otomatis dan pelacakan status keberhasilan pengiriman.

## 4. Dampak & Hasil
- Memangkas biaya operasional pengiriman notifikasi SMS/WA pihak ketiga hingga 100% untuk ekosistem aplikasi internal.
- Menangani pengiriman puluhan ribu pesan notifikasi transaksi, faktur invoice, dan resi ekspedisi per bulan secara konsisten.
- Menyediakan konektivitas stabil dan berlatensi rendah bagi sistem kasir dan integrasi webhook bisnis.
