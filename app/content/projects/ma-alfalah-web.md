---
title: "Website Madrasah Aliyah Al-Falah Nagreg & CMS Terpadu"
slug: "ma-alfalah-web"
category: "Web & CMS"
featured: false
date: "2026"
role: "Lead Full-Stack Web Developer"
deskripsi: "Portal profil institusi madrasah resmi berbasis arsitektur modern berkecepatan tinggi, dilengkapi CMS publikasi artikel, PPDB online, dan galeri prestasi."
tags: ["Next.js SSG", "Laravel Headless API", "Tailwind CSS", "Cloudflare Pages", "PostgreSQL", "SEO Core Web Vitals"]
coverImage: "/images/projects/ma-alfalah-web-cover.png"
liveUrl: "https://ma.alfalah.sch.id/"
metrics:
  - label: "Lighthouse Performance"
    value: "98/100"
  - label: "First Contentful Paint"
    value: "0.4s"
  - label: "Pendaftar PPDB Online"
    value: "600+ calon"
---

# Website Madrasah Aliyah Al-Falah Nagreg & CMS Terpadu

Website resmi Madrasah Aliyah (MA) Al-Falah Nagreg dirancang untuk mencerminkan identitas keislaman, keunggulan akademik, dan tradisi pesantren secara elegan, modern, dan berkinerja tinggi. Dilengkapi dengan portal CMS mandiri untuk tim humas madrasah.

![Beranda Website Resmi MA Al-Falah Nagreg](/images/projects/ma-alfalah-web-cover.png)

## 1. Konteks & Masalah
- Website lama berbasis CMS monolitik konvensional lambat diakses di jaringan seluler daerah, sering mengalami downtime ketika lonjakan pendaftaran siswa baru (PPDB).
- Tampilan sebelumnya belum responsif di perangkat mobile dan memiliki performa SEO rendah di pencarian Google.
- Tim humas kesulitan memperbarui berita dan agenda madrasah karena editor admin yang lambat dan rumit.

## 2. Arsitektur & Rekayasa Teknis
1. **Decoupled Architecture (Headless)**: Frontend dibangun dengan Next.js Static Site Generation (SSG) dan Incremental Static Regeneration (ISR), dideploy langsung di edge network Cloudflare untuk menjamin latensi minimal bagi pengunjung.
2. **Robust Laravel CMS Admin**: Panel manajemen konten menggunakan Laravel dengan autentikasi aman, pengompres gambar otomatis berbasis WebP sebelum disimpan di object storage, dan role manajemen redaksi.
3. **Optimasi Core Web Vitals & SEO**: Implementasi metadata OpenGraph dinamis, skema JSON-LD untuk institusi pendidikan (`EducationalOrganization`), sitemap XML otomatis, dan skor performa Lighthouse 98+.
4. **Modul PPDB Online Terenkripsi**: Formulir pendaftaran calon santri/siswa baru dengan validasi berkas NISN, upload scan ijazah, dan integrasi WhatsApp auto-reply untuk tanda terima berkas.

## 3. Fitur Utama
- **Profil Akademik & Program Unggulan**: Informasi kurikulum terpadu (Kemenag & Kepesantrenan), program tahfidz Quran, dan ekstrakurikuler.
- **Portal Publikasi Berita & Majalah Dinding Digital**: CMS penulisan artikel kegiatan, karya santri, dan pengumuman resmi dengan editor Markdown / WYSIWYG bersih.
- **Direktori Guru & Prestasi Santri**: Etalase dokumentasi capaian lomba tingkat kabupaten, provinsi, dan nasional beserta arsip tenaga pengajar.
- **Sistem Pengumuman Kelulusan & PPDB**: Cek status kelulusan berkas pendaftar mandiri menggunakan nomor pendaftaran/NISN.

## 4. Dampak & Hasil
- Kecepatan pemuatan halaman naik lebih dari 400%, mencapai First Contentful Paint dalam 0.4 detik di jaringan 4G.
- Memproses ratusan pendaftar PPDB online tanpa hambatan downtime server pada hari pembukaan.
- Meningkatkan visibilitas pencarian madrasah ke posisi halaman pertama Google untuk kata kunci pendidikan madrasah di Jawa Barat.

