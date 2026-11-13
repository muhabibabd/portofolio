---
title: "SIAP Exam - Modul Ujian CBT & Scanner OMR LJK"
slug: "siap-exam"
category: "Full-Stack"
featured: true
date: "2026"
role: "Full-Stack & Computer Vision Engineer"
deskripsi: "Sistem asesmen hibrida (Google Play) yang menggabungkan ujian online CBT anti-curang dengan pemindai Lembar Jawaban Komputer (LJK) berbasis Computer Vision OMR."
tags: ["Laravel 11", "Python OpenCV", "OMR Processing", "PostgreSQL", "WebSockets", "Tailwind CSS"]
coverImage: "/images/projects/siap-exam-cover.png"
liveUrl: "https://play.google.com/store/apps/details?id=com.siaphub.siapexam&hl=id"
metrics:
  - label: "Koreksi LJK Otomatis"
    value: "60 lembar/menit"
  - label: "Tingkat Akurasi OMR"
    value: "99.8%"
  - label: "Platform"
    value: "Google Play"
---

# SIAP Exam - Modul Ujian CBT & Scanner OMR LJK

SIAP Exam menyediakan solusi evaluasi belajar hibrida lengkap yang telah dipublikasikan di Google Play Store. Mendukung ujian digital berbasis komputer/tablet (CBT) untuk kelas reguler, serta engine pemindaian Lembar Jawaban Komputer (LJK) menggunakan kamera smartphone atau scanner ADF biasa tanpa ketergantungan mesin pembaca khusus.

![Aplikasi Siap Exam di Google Play Store](/images/projects/siap-exam-cover.png)

## 1. Konteks & Masalah
- Membeli mesin pemindai LJK bermerek khusus membutuhkan anggaran ratusan juta rupiah dengan lembar kertas optik impor yang mahal.
- Ujian berbasis komputer konvensional rawan kecurangan: siswa sering membagi layar (*split screen*) atau membuka tab pencarian jawaban di latar belakang.
- Pengoreksian ribuan lembar ujian kertas secara manual oleh guru memerlukan waktu berminggu-minggu dengan risiko kelelahan dan *human error*.

## 2. Arsitektur & Rekayasa Teknis
1. **Engine OMR Berbasis Computer Vision (OpenCV)**:
   - Template LJK standar didesain dapat dicetak menggunakan kertas HVS biasa dan printer fotokopi standar.
   - Modul Python OpenCV mendeteksi 4 titik sudut fidusial (*fiducial markers*), melakukan koreksi distorsi perspektif (*four-point perspective transform*), dan menghitung ambang batas kerapatan piksel pensil/pulpen (*adaptive thresholding*).
2. **CBT Engine Berintegritas Tinggi**:
   - Algoritma pengacakan butir soal dan kunci opsi jawaban unik per siswa berbasis seed token sesi.
   - Sistem auto-save jawaban lokal setiap 5 detik dengan sinkronisasi heartbeat WebSockets ke server utama.
3. **Anti-Cheat Browser Lockdown**:
   - Deteksi kehilangan fokus jendela (`blur` / `visibilitychange`), larangan kombinasi shortcut keyboard (`Alt+Tab`, `Ctrl+C`, `F12`), dan snapshot berkala melalui kamera bila diaktifkan pengawas.
4. **Item Response Theory (IRT) & Analisis Butir Soal**:
   - Kalkulasi otomatis tingkat kesukaran soal, daya pembeda, dan efektivitas pengecoh secara instan sesaat setelah ujian berakhir.

## 3. Fitur Utama
- **Scanner LJK Universal via Smartphone / ADF**: Upload file PDF hasil scan kantor atau tangkap foto langsung dari kamera smartphone; sistem langsung memproses batch dan menampilkan nilai.
- **Bank Soal & Formula LaTeX**: Dukungan soal pilihan ganda kompleks, benar/salah, menjodohkan, esai, hingga rumus matematika berbasis LaTeX dan file audio listening bahasa asing.
- **Live Proctoring Monitor**: Panel pengawas ujian yang menampilkan status koneksi siswa secara real-time, sisa waktu ujian, dan peringatan pelanggaran bila siswa mencoba berpindah aplikasi.
- **Ekspor Nilai & Ledger Rapor**: Nilai terintegrasi otomatis ke buku nilai rapor SIAP Pusat tanpa re-input manual.

## 4. Dampak & Hasil
- Memangkas biaya pengadaan mesin OMR khusus hingga 90% dengan tetap mempertahankan akurasi pembacaan LJK di atas 99.8%.
- Pengumuman hasil ujian try out dan Penilaian Akhir Semester (PAS) dapat dipublikasikan dalam hitungan jam setelah sesi selesai.
- Teruji menangani lebih dari 1.200 siswa aktif secara bersamaan pada infrastruktur server lokal on-premise sekolah.
