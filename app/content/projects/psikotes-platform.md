---
title: "Psikotes - Platform Asesmen Minat Bakat & Psikososial"
slug: "psikotes-platform"
category: "Full-Stack"
featured: false
date: "2026"
role: "Full-Stack Engineer & Algorithm Developer"
deskripsi: "Platform psikometri dan asesmen psikososial digital dengan kalkulasi skor otomatis instan, pemetaan minat bakat Holland (RIASEC), dan generator laporan diagnosis psikolog."
tags: ["Laravel 11", "Next.js", "PostgreSQL", "Psychometric Scoring Engine", "Puppeteer PDF Engine", "Tailwind CSS"]
coverImage: "/images/projects/psikotes-platform-cover.png"
liveUrl: "https://psikotes.cmcentre.my.id/"
metrics:
  - label: "Waktu Kalkulasi Skor"
    value: "<1.5 detik"
  - label: "Peserta Asesmen"
    value: "4,500+"
  - label: "Kecepatan Generate PDF"
    value: "20 lembar/batch"
---

# Psikotes - Platform Asesmen Minat Bakat & Psikososial

Platform asesmen psikologi digital modern yang dirancang untuk memfasilitasi tes minat bakat siswa, evaluasi gaya belajar, serta skrining kesehatan psikososial dengan scoring engine otomatis berstandar psikometri.

![Platform Asesmen Online Psikotest CM Centre](/images/projects/psikotes-platform-cover.png)

## 1. Konteks & Masalah
- Asesmen psikotes konvensional menggunakan ratusan lembar soal kertas membutuhkan biaya cetak besar dan rentan bocor.
- Proses kalkulasi skor manual oleh tim psikolog/konselor membutuhkan waktu 2-3 minggu per batch sekolah sebelum hasil rekomendasi penjurusan siswa keluar.
- Ketiadaan standarisasi visual laporan membuat penyampaian hasil ke wali murid kurang informatif dan sulit dipahami secara awam.

## 2. Arsitektur & Rekayasa Teknis
1. **Psychometric Scoring Engine**:
   - Algoritma pemetaan minat karier berbasis model Holland RIASEC (Realistic, Investigative, Artistic, Social, Enterprising, Conventional).
   - Skala evaluasi psikososial (DASS-21 / SDQ) dengan normalisasi skor otomatis berdasarkan norma usia dan jenis kelamin.
2. **Anti-Fatigue Timed Question Flow**:
   - Antarmuka pengujian dirancang ergonomis dengan pagination dinamis, auto-advance setelah memilih opsi jawaban, dan progress tracking real-time.
   - Timer countdown per sub-tes yang terkunci secara server-side untuk menjamin validitas reliabilitas instrumen tes.
3. **High-Speed Headless PDF Report Engine**:
   - Integrasi Chromium headless (Puppeteer) di background worker untuk mengubah data hasil scoring dan visualisasi grafik radar (spider chart) menjadi dokumen PDF psikogram profesional 8-12 halaman.
4. **Data Privacy & Encryption**:
   - Hasil evaluasi psikososial bersifat rahasia; data peserta dan kesimpulan psikolog disimpan dengan enkripsi kolom database AES-256.

## 3. Fitur Utama
- **Modul Asesmen Minat & Bakat Penjurusan**: Menentukan kecenderungan karier, rekomendasi jurusan kuliah, dan potensi keunggulan bawaan siswa.
- **Skrining Profil Psikososial & Emosional**: Deteksi dini tingkat stres, kecemasan, dan kemampuan adaptasi sosial di lingkungan pendidikan.
- **Portal Kerja Konselor / Psikolog**: Dashboard untuk psikolog memvalidasi hasil otomatis, menambahkan catatan klinis, dan menyetujui penerbitan sertifikat hasil.
- **Download Hasil Mandiri**: Peserta dan orang tua dapat mengunduh rapor psikotes digital terenkripsi menggunakan kode unik token tes.

## 4. Dampak & Hasil
- Mempersingkat waktu pemrosesan laporan dari 14 hari kerja menjadi instan (siap diunduh beberapa menit setelah tes selesai).
- Telah digunakan oleh ribuan peserta seleksi dan konseling penjurusan di berbagai sekolah tingkat menengah.
- Menghemat biaya pengadaan kertas dan logistik hingga 100%.

