---
title: "SIAP - Sistem Informasi dan Administrasi Pendidikan"
slug: "siap-pendidikan"
category: "Full-Stack"
featured: true
date: "2026"
role: "Lead Systems Architect & Full-Stack Developer"
deskripsi: "Platform enterprise manajemen akademik dan administrasi sekolah terpadu dengan autentikasi terpusat SIAPHUB (OAuth 2.0 / OIDC), modul SDM, keuangan SPP, dan PSB."
tags: ["Laravel 11", "PostgreSQL", "Livewire", "Redis Queue", "OAuth 2.0 / OIDC", "Docker Swarm", "Tailwind CSS"]
coverImage: "/images/projects/siap-pendidikan-cover.png"
liveUrl: "https://siap.or.id/"
metrics:
  - label: "Siswa Terdaftar"
    value: "3,500+"
  - label: "Rekonsiliasi SPP"
    value: "Real-time"
  - label: "Uptime Sistem"
    value: "99.9%"
---

# SIAP - Sistem Informasi dan Administrasi Pendidikan

SIAP (Sistem Informasi dan Administrasi Pendidikan) adalah platform terpadu untuk tata kelola ekosistem pendidikan digital. Dirancang untuk mengelola manajemen sekolah, akademik, administrasi tata usaha, hingga komunikasi antara guru, siswa, dan orang tua dalam satu platform yang efisien dan aman.

![Landing Page SIAP & Portal Akun Terpadu SIAPHUB](/images/projects/siap-pendidikan-cover.png)

## 1. Konteks & Masalah
Sebelum SIAP diimplementasikan, institusi menghadapi fragmentasi data yang tersebar:
- Data kesiswaan, absensi guru, dan buku induk tersimpan di lembar kerja terpisah (spreadsheet) yang rentan konflik data dan duplikasi.
- Rekonsiliasi pembayaran SPP dan tagihan bulanan membutuhkan waktu berhari-hari setiap akhir bulan karena pencatatan manual di kasir sekolah.
- Ketiadaan portal autentikasi terpusat: staf sekolah harus mengingat puluhan kredensial login terpisah untuk aplikasi akademik, keuangan, dan presensi.

## 2. Arsitektur & Rekayasa Teknis
Sistem dibangun dengan fokus pada keamanan tingkat tinggi, integritas transaksional, dan skalabilitas multi-tenant:
1. **SIAPHUB Single Sign-On (SSO)**:
   - Server autentikasi terpusat berbasis protokol OAuth 2.0 / OpenID Connect (OIDC).
   - Memungkinkan satu akun terpadu untuk mengakses seluruh ekosistem modul SIAP (SDM, Keuangan, Jurnal, Pembayaran, dan PSB) secara aman dan mulus (*seamless*).
   - Dilengkapi audit log aktivitas waktu nyata (*realtime audit log*), pembatasan sesi login aktif, dan enkripsi transit 256-bit SSL.
2. **Database Relasional Skala Menengah**:
   - PostgreSQL dengan skema partisi per tahun ajaran untuk memisahkan data historis ledger nilai dari transaksi kasir aktif.
3. **Event-Driven Financial Journal**:
   - Setiap pembayaran SPP atau tagihan memicu domain event yang langsung menghasilkan nomor jurnal umum berurutan dan mengunci status tagihan siswa menggunakan database row-locking (`SELECT FOR UPDATE`).
4. **Background Ledger Calculation**:
   - Agregasi nilai rapor dan ranking kelas dieksekusi secara asinkron melalui Redis Queue Worker, mencegah kelebihan beban server HTTP saat seluruh guru menginput nilai secara serentak.

## 3. Fitur Utama
- **SIAPHUB Auth Engine**: Autentikasi multi-tenant dengan *role-based access control* (RBAC) berbutir halus untuk Kepala Sekolah, Tata Usaha, Guru (PTK), Bendahara, dan Siswa.
- **Manajemen Buku Induk Siswa & Mutasi**: Pencatatan riwayat siswa, NISN, dokumen berkas digital, dan histori mutasi kelas otomatis.
- **Modul Keuangan & Billing Terpadu**: Pembuatan invoice tagihan rutin (SPP, DSP, asrama), integrasi virtual account perbankan, serta cetak bukti kuitansi thermal.
- **E-Rapor Kurikulum Merdeka & K13**: Generator rapor otomatis dengan kalkulasi capaian pembelajaran, deskripsi capaian otomatis, dan ekspor PDF berkecepatan tinggi.
- **Portal Kepegawaian & Jam Mengajar**: Pemetaan beban kerja guru (PTK), jadwal pelajaran bebas tabrakan, dan pemantauan jurnal mengajar harian.

## 4. Dampak & Hasil
- Memangkas waktu tutup buku kas bulanan dari 4 hari menjadi hitungan menit secara real-time.
- Menghilangkan duplikasi data siswa dan kesalahan entri nilai rapor 100%.
- Melayani lebih dari 3.500 data siswa dan puluhan ribu transaksi keuangan secara stabil dengan uptime 99.9%.
