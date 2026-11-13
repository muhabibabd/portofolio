---
title: "SIAP Kantin - Modul EDC & Uang Jajan RFID"
slug: "siap-kantin"
category: "Backend & ERP"
featured: true
date: "2026"
role: "Lead IoT & Backend Engineer"
deskripsi: "Sistem transaksi cashless kantin sekolah (Google Play) berbasis kartu pelajar RFID dan terminal mesin EDC mini, dilengkapi limit harian orang tua dan rekonsiliasi tenant."
tags: ["Laravel 11", "RFID Mifare 13.56MHz", "ESP32 / Android POS", "PostgreSQL", "Redis Locks", "WebSockets"]
coverImage: "/images/projects/siap-kantin-cover.png"
liveUrl: "https://play.google.com/store/apps/details?id=com.siaphub.edckantin&hl=id"
metrics:
  - label: "Waktu Transaksi"
    value: "<1.2 detik"
  - label: "Volume Transaksi / Hari"
    value: "2,000+ tap"
  - label: "Platform"
    value: "Google Play"
---

# SIAP Kantin - Modul EDC & Uang Jajan RFID

SIAP Kantin adalah ekosistem pembayaran nontunai (*cashless school ecosystem*) resmi di Google Play Store yang mengubah kartu identitas siswa (smartcard RFID) menjadi dompet digital tertutup (*closed-loop digital wallet*) untuk jajan di area kantin dan koperasi sekolah via mesin EDC/Android POS.

![Aplikasi Siap Kantin di Google Play Store](/images/projects/siap-kantin-cover.png)

## 1. Konteks & Masalah
- Antrean kantin saat jam istirahat sangat padat; proses tukar uang kembalian pecahan kecil memperlambat transaksi dan memakan waktu istirahat siswa yang hanya 20 menit.
- Risiko uang jajan hilang, dicuri, atau dibelanjakan untuk hal-hal di luar batas yang diinginkan orang tua di luar lingkungan sekolah.
- Stand/tenant kantin kesulitan menghitung bagi hasil harian dan rawan selisih kas fisik di akhir hari.

## 2. Arsitektur & Rekayasa Teknis
1. **Smartcard & Terminal EDC Reader**:
   - Menggunakan kartu RFID Mifare Classic / Desfire 13.56 MHz yang terenkripsi UID, dihubungkan ke terminal EDC berbasis Android atau mikrokontroler ESP32 via Serial/USB/Wi-Fi.
2. **Atomic Balance Deduction**:
   - Mekanisme pemotongan saldo dompet menggunakan *database transaction* dan *atomic Redis distributed locks* (`SETNX`) untuk mencegah kondisi balapan (*race condition*) atau pembelanjaan ganda (*double-spending*) saat jaringan lambat.
3. **Parental Spending Controls**:
   - Aturan limit maksimal jajan per hari/sesi dan blacklist menu makanan tertentu (misal: riwayat alergi siswa) yang dievaluasi langsung oleh *decision engine* backend sebelum transaksi disetujui (*approved*).
4. **Auto-Settlement Multi-Tenant**:
   - Sistem otomatis menghitung bagi hasil (*profit sharing*) kasir kantin dan menghasilkan laporan split settlement harian untuk setiap pedagang makanan.

## 3. Fitur Utama
- **Aktivasi Mesin EDC & Kasir Cepat (Fast POS)**: Mode aktivasi perangkat instan dengan kode pairing, input nominal keypad cepat, dan tap kartu 1-klik untuk mempercepat antrean.
- **Top Up Saldo Multi-Channel**: Pengisian saldo melalui kasir tata usaha, transfer virtual account bank via aplikasi wali murid, atau integrasi QRIS dinamis.
- **Laporan Penjualan Tenant Harian**: Rekapitulasi penjualan per gerai, menu makanan terlaris, dan rincian bagi hasil yang dapat dicairkan tenant.
- **Audit Trail & Notifikasi Real-time**: Transaksi tercatat seketika di riwayat belanja siswa yang dapat dipantau langsung oleh wali murid melalui aplikasi SIAP Mobile.

## 4. Dampak & Hasil
- Mempercepat waktu transaksi kasir dari ~45 detik tunai menjadi kurang dari 1.2 detik per siswa.
- Mengurangi peredaran uang tunai fisik di sekolah hingga 95%, menciptakan lingkungan higienis di area penyajian makanan.
- 100% akurasi pembukuan bagi hasil antara pengelola sekolah dan puluhan pedagang kantin tanpa selisih koin.
