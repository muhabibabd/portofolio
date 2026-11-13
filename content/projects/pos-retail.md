---
title: "POS - Point of Sales & Multi-Outlet Inventory"
slug: "pos-retail"
category: "Backend & ERP"
featured: true
date: "2026"
role: "Lead Full-Stack Developer & ERP Specialist"
deskripsi: "Sistem kasir pintar dan manajemen inventaris multi-cabang (studi kasus Kv. Putra Mandiri) dengan offline-first PWA, cetak struk Bluetooth ESC/POS, dan pemantauan stok real-time."
tags: ["Laravel 11", "Next.js PWA", "PostgreSQL", "IndexedDB Offline", "ESC/POS Thermal", "Redis"]
coverImage: "/images/projects/pos-retail-cover.png"
liveUrl: "https://pos.putramandiricollection.com/"
metrics:
  - label: "Stok Terkelola"
    value: "11,200+ unit"
  - label: "Waktu Cetak Struk"
    value: "<0.8s"
  - label: "Sinkronisasi Offline"
    value: "100% Akurat"
---

# POS - Point of Sales & Multi-Outlet Inventory

Point of Sales (POS) dan Enterprise Resource Planning (ERP) ritel multi-cabang yang dirancang untuk kecepatan transaksi kasir, pelacakan mutasi logistik antar gudang, dan rekonsiliasi omset penjualan secara terpusat (diimplementasikan pada Kv. Putra Mandiri).

![Dashboard Super Admin POS Multi-Cabang Kv. Putra Mandiri](/images/projects/pos-retail-cover.png)

## 1. Konteks & Masalah
- Fluktuasi koneksi internet di lokasi gerai fisik (pasar/cabang daerah) sering menyebabkan aplikasi kasir berbasis web konvensional macet (*freeze*).
- Ketidaksinkronan antara stok di gudang pusat dengan stok display di cabang (seperti Cabang Pasar Sagalaherang), memicu insiden barang habis saat transaksi.
- Sulit memantau total omset penjualan multi-cabang, kalkulasi sisa piutang pelanggan, dan peringatan dini stok menipis (*minimum stock alert*).

## 2. Arsitektur & Rekayasa Teknis
1. **Offline-First PWA & Background Sync**:
   - Frontend kasir memanfaatkan IndexedDB di browser untuk menyimpan katalog produk, barcode, harga grosir/eceran, dan antrean transaksi offline.
   - Menggunakan Service Worker dan Background Sync API: saat jaringan terhubung kembali, transaksi offline otomatis terkirim dan terekonsiliasi ke server cloud tanpa konflik nomor faktur.
2. **Konektivitas Printer Termal Raw ESC/POS**:
   - Integrasi langsung via Web Bluetooth API dan WebUSB ke mesin thermal printer 58mm/80mm untuk mencetak struk kasir dalam hitungan milidetik tanpa pop-up dialog print browser.
3. **Multi-Warehouse Stock Reservation**:
   - Mekanisme reservasi stok real-time saat produk dimasukkan ke keranjang kasir untuk mencegah *overselling* antar kasir dalam satu cabang.
4. **Metode Penilaian Persediaan Otomatis (FIFO / Moving Average)**:
   - Kalkulasi otomatis Harga Pokok Penjualan (HPP) setiap kali faktur penjualan diterbitkan, menghasilkan laporan laba kotor bersih per item seketika.

## 3. Fitur Utama
- **Dashboard Super Administrator**: Pemantauan terpusat metrik total cabang aktif, total produk dan varian, omset penjualan harian/bulanan, total uang masuk, dan sisa piutang konsumen.
- **Manajemen Gudang Pusat & Mutasi Logistik**: Modul permintaan barang cabang (*stock request*), transfer antar cabang, dan verifikasi barang masuk/keluar.
- **Peringatan Stok Minimum (Low Stock Alert)**: Notifikasi dini ketika jumlah unit barang di cabang atau gudang utama menyentuh batas aman minimum.
- **Kasir Cepat & Barcode Scanner**: Dukungan barcode scanner laser USB/Bluetooth dengan shortcut keyboard lengkap untuk transaksi cepat tanpa mouse.

## 4. Dampak & Hasil
- Kasir tetap dapat bertransaksi 100% normal saat internet padam tanpa ada transaksi yang hilang.
- Berhasil mengelola perputaran ribuan varian produk dan lebih dari 11.200 unit stok barang yang tersebar di multi-cabang secara akurat.
- Mempercepat proses checkout kasir hingga 3x lipat dibanding sistem kasir manual sebelumnya.
