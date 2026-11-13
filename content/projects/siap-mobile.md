---
title: "SIAP Mobile - Modul PTK & Siswa"
slug: "siap-mobile"
category: "Full-Stack"
featured: true
date: "2026"
role: "Mobile App Architect & API Engineer"
deskripsi: "Aplikasi seluler terintegrasi untuk guru (PTK), siswa, dan wali murid (Google Play) dengan presensi digital geolokasi, monitoring saldo jajan/SPP, dan notifikasi kegiatan."
tags: ["Laravel REST API", "React Native", "JWT Auth", "Firebase Cloud Messaging", "Redis Cache", "PostgreSQL"]
coverImage: "/images/projects/siap-mobile-cover.png"
liveUrl: "https://play.google.com/store/apps/details?id=com.siap.mobile.app&hl=id"
metrics:
  - label: "Google Play Downloads"
    value: "1,000+"
  - label: "Rating Pengguna"
    value: "5.0 ★"
  - label: "Latensi API Rata-rata"
    value: "<85ms"
---

# SIAP Mobile - Modul PTK & Siswa

SIAP Mobile merupakan aplikasi Android/iOS resmi di Google Play Store yang menjembatani komunikasi langsung antara institusi pendidikan, tenaga pendidik (PTK), siswa, dan orang tua. Menyederhanakan pelaporan presensi harian, agenda mengajar, pemantauan saldo dompet sekolah, hingga transparansi nilai akademik dari genggaman.

![Aplikasi Siap Mobile di Google Play Store](/images/projects/siap-mobile-cover.png)

## 1. Konteks & Masalah
- Wali murid sering mengalami keterlambatan informasi mengenai presensi kehadiran atau kepulangan anak di sekolah.
- Guru masih menggunakan lembar absen fisik yang memakan waktu saat rekap mingguan dan rawan titip absen.
- Komunikasi pengumuman sekolah terpecah di berbagai grup chat pribadi yang tidak terintegrasi dengan database akademik pusat.

## 2. Arsitektur & Rekayasa Teknis
1. **Stateless JWT API & Token Refreshing**:
   - Backend Laravel dirancang sebagai RESTful API tanpa session dengan otorisasi JWT berkecepatan tinggi dan rate-limiting per user/perangkat.
2. **Geofencing & Anti-Fake GPS Detection**:
   - Modul presensi PTK memvalidasi radius koordinat GPS sekolah (toleransi 50 meter) serta mendeteksi flag *mock location* dari perangkat Android/iOS untuk mencegah pemalsuan lokasi.
3. **High-Throughput Push Notification**:
   - Integrasi Firebase Cloud Messaging (FCM) dengan antrean Redis untuk menyiarkan notifikasi massal ketika siswa terlambat atau terdapat pengumuman mendesak.
4. **Optimistic Offline Storage**:
   - Data jadwal harian dan profil siswa di-cache secara lokal di perangkat, memastikan aplikasi tetap responsif meski jaringan internet sekolah mengalami fluktuasi.

## 3. Fitur Utama
- **Modul PTK (Pendidik & Tenaga Kependidikan)**:
  - Presensi selfie + koordinat geofencing masuk dan pulang sekolah.
  - Input jurnal mengajar harian, materi pembahasan, dan absensi per jam pelajaran.
  - Pengajuan izin sakit atau dinas luar langsung dari smartphone.
- **Modul Siswa & Wali Murid**:
  - Log kehadiran waktu nyata (*real-time timestamp*) saat siswa check-in di gerbang sekolah.
  - Monitoring saldo uang jajan RFID, riwayat transaksi kantin, dan tagihan SPP.
  - Kartu hasil studi, grafik perkembangan nilai, dan catatan konseling siswa.

## 4. Dampak & Hasil
- Terpublikasi resmi di Google Play Store dengan rating sempurna 5.0 dan lebih dari 1.000 unduhan aktif.
- Mencegah kecurangan absensi guru dan staf berkat validasi geofencing ganda.
- Meningkatkan transparansi monitoring orang tua terhadap kehadiran dan keuangan anak di sekolah hingga 100%.
