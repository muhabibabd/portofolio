# DESIGN.md v2: Monokrom, Editorial, Spec-Sheet

> **Proyek**: Muhammad Habib Abdillah, Portofolio Engineering
> **Persona**: Lead Full-Stack Developer & Systems Architect (PHP/Laravel, ERP modular, Next.js SSG, Docker Swarm)
> **Arah baru**: *Dokumen spesifikasi teknis yang dicetak rapi.* Hitam, abu, putih. Hierarki dibangun dari skala, ketebalan, garis, dan inversi, bukan dari warna atau dekorasi.
> **Dial**: `ENERGY 2 / RHYTHM 4 / MOTION 1`
> **Status**: Menggantikan DESIGN.md v1 sepenuhnya. Jangan mewarisi komponen visual dari v1.

---

## 0. Apa yang dibuang dari v1 (wajib dihapus dari codebase)

| Dihapus | Alasan |
|---|---|
| Navbar kapsul melayang dengan pill aktif | Pola template paling umum. |
| Logo kotak biru "H" + badge "dev" | Dekorasi tanpa fungsi. |
| Teks biru pada frasa H1 | Penekanan lewat warna; diganti italic dan abu/putih. |
| Eyebrow mono kapital ber-letterspacing di atas H1 | Slop, dan mono bukan untuk label dekoratif. |
| Baris chip "Core Stack" | Diganti definition list (spec). |
| Kartu "Arsitektur Sistem Modular" bertab di hero | Kartu di dalam kartu, tab pill. Diagram pindah ke studi kasus. |
| Badge "Decoupled Architecture", "Production Ready" | Klaim berbentuk lencana. Status ditulis sebagai teks biasa. |
| Semua warna biru, hijau, gradien, glow, shadow | Palet kini netral murni. |
| Radius besar (>2px) | Sudut tegas, konsisten dengan nuansa dokumen teknis. |
| Mock editor, terminal, `Habib.php` | Tetap dilarang. |

---

## 1. Identitas & Nada

- **Karakter**: Insinyur sistem yang tenang dan teliti. Bukan agensi, bukan startup.
- **Suara**: Kalimat pendek, konkret, tanpa kata sakti ("seamless", "next-gen", "revolusioner").
- **Tes utama**: Kalau nama dan logo dihapus, apakah halaman ini tetap tidak tertukar dengan portofolio dev lain? Layout *ledger* dan *spec list* di bawah adalah jawabannya.

---

## 2. Dial

- **ENERGY 2**: Percaya diri lewat skala tipografi yang besar, bukan efek.
- **RHYTHM 4**: Setiap section punya struktur sendiri, tetapi diikat satu grid 12 kolom dengan garis tipis yang terlihat.
- **MOTION 1**: Hanya perubahan state (hover, fokus, buka menu), 120-160ms, tanpa easing berlebihan. Patuhi `prefers-reduced-motion: reduce`.

---

## 3. Warna (netral murni, WCAG AA)

Tidak ada warna aksen. Tidak ada status hijau/merah.

| Token | Nilai | Pemakaian |
|---|---|---|
| `--bg` | `#0a0a0a` | Kanvas utama |
| `--bg-raised` | `#111111` | Area terangkat (jarang, maksimal satu lapis) |
| `--line` | `#262626` | Garis tipis 1px, grid, pemisah baris |
| `--line-strong` | `#404040` | Garis penting, border tombol sekunder |
| `--fg` | `#fafafa` | Judul, teks utama (kontras >18:1) |
| `--fg-2` | `#d4d4d4` | Paragraf (kontras >13:1) |
| `--fg-muted` | `#8a8a8a` | Metadata, label (kontras ~5.7:1, lolos AA) |
| `--invert-bg` | `#f5f5f5` | Section terbalik (putih) |
| `--invert-fg` | `#0a0a0a` | Teks di atas section putih |
| `--invert-muted` | `#525252` | Metadata di atas putih (kontras ~7.8:1) |

**Aturan penggunaan**
1. Hierarki = skala + berat + abu vs putih. Frasa penting di H1 ditulis **putih**, sisanya `--fg-muted`/`--fg-2`.
2. Satu section terbalik (putih) per halaman, yaitu Kontak. Di halaman proyek, boleh satu untuk blok "Hasil".
3. Fokus keyboard: outline `2px solid var(--fg)` dengan offset 3px. Jangan hanya mengandalkan warna.
4. Status ditulis sebagai teks, mis. "Tersedia untuk proyek baru", dengan titik ● penuh (tersedia) atau ○ kosong (tidak). Tanpa warna.

---

## 4. Tipografi

| Peran | Font | Aturan |
|---|---|---|
| Display / H1-H2 | **Instrument Serif** 400 (+ italic) | Ukuran besar, `letter-spacing: -0.02em`, `line-height: 1.02`. Penekanan memakai *italic*, bukan warna atau bold. |
| UI & Body | **Geist** 400 / 500 | Body `line-height: 1.65`. Navigasi, tombol, label 14-15px, huruf biasa (bukan kapital semua). |
| Teknis | **Geist Mono** 400 | Hanya untuk kode nyata, versi, port, path, nama file. Dilarang untuk label dekoratif atau tombol. |

Skala (fluid): H1 `clamp(2.75rem, 7.5vw, 6.5rem)` · H2 `clamp(2rem, 4.5vw, 3.5rem)` · H3 `1.5rem` · Body `1.0625rem` · Meta `0.875rem`.

Muat lewat `next/font/google` dengan `display: swap` dan fallback `ui-serif, Georgia` / `system-ui`.

---

## 5. Bentuk & Komponen Dasar

- **Radius**: `0` default, `2px` maksimum (input dan tombol).
- **Border**: hanya 1px `--line`. Tanpa shadow, blur, gradien, atau glow.
- **Kartu**: dihilangkan sebagai pola utama. Gunakan garis pemisah dan baris, bukan kotak.
- **Tombol primer**: isi `--fg`, teks `--bg`, padding `14px 22px`, persegi. Hover: isi `--fg-2`.
- **Tombol sekunder**: teks `--fg` dengan garis bawah 1px (`text-underline-offset: 6px`). Hover: garis bawah menebal ke 2px.
- **Panah**: hanya `↗` pada tautan eksternal sungguhan. Tidak ada panah dekoratif.
- **Ikon**: seperlunya, stroke 1.5, domain-accurate (`Layers`, `Server`, `Database`, `GitBranch`). Tanpa wadah kotak berwarna.

---

## 6. Grid

- 12 kolom, container maks `1360px`, padding sisi `clamp(20px, 4vw, 48px)`.
- Garis kolom vertikal tipis (`--line`) terlihat di latar hero dan section Keahlian pada layar ≥1024px (pseudo-element, `pointer-events: none`). Ini jadi identitas "spec sheet".
- Ritme vertikal: jarak antar section `clamp(96px, 14vw, 200px)`, dan setiap section dibuka dengan garis horizontal penuh plus nomor indeks.

---

## 7. Navbar (baru)

**Konsep**: baris indeks dokumen, bukan kapsul.

```
┌────────────────────────────────────────────────────────────────────────────┐
│ Habib Abdillah        01 Proyek   02 Keahlian   03 Materi   04 Blog        │
│                                                       ● Tersedia   Kontak  │
└────────────────────────────────────────────────────────────────────────────┘
```

Spesifikasi:
- Menempel di atas, lebar penuh, **tanpa kotak, tanpa background panel**. Hanya `border-bottom: 1px solid var(--line)`. Saat scroll: background `--bg` solid (tanpa blur) agar teks tetap terbaca.
- Grid 3 kolom: **kiri** nama teks biasa (Geist 500, bukan logo); **tengah** tautan bernomor `01-04`; **kanan** status ketersediaan + tautan "Kontak".
- Tidak ada item "Overview". Nama di kiri adalah tautan ke beranda.
- Item aktif: teks `--fg` dengan garis bawah 1px. Tidak aktif: `--fg-muted`. **Tanpa pill, tanpa background.**
- Nomor `01`-`04` memakai Geist Mono 12px, `--fg-muted`, satu-satunya pemakaian mono di navbar karena berfungsi sebagai indeks nyata.
- "Kontak" membuka dialog kecil berisi alamat email dengan tombol **Salin** (aksi nyata), dan tautan `mailto:`.
- **Mobile (<768px)**: nama di kiri, tombol teks "Menu" di kanan. Membuka sheet layar penuh `--bg` berisi daftar tautan besar (Instrument Serif 40px) bernomor, `Escape` menutup, fokus terkunci di dalam sheet.
- Tinggi: 64px desktop, 56px mobile.

---

## 8. Struktur Halaman

### 8.1 Hero: "Judul + Spesifikasi"

```
Merancang arsitektur sistem             │  Peran        Systems Architect
informasi modular & backend             │  Pengalaman   3+ tahun
*skala tinggi.*                         │  Stack utama  PHP 8.3, Laravel 11,
                                        │               PostgreSQL, Next.js 16
Full-Stack Developer yang membangun     │  Deploy       Docker Swarm
ERP modular dan layanan backend…        │  Situs ini    100% statis (SSG)
                                        │  Lokasi       Indonesia (UTC+7)
Lihat studi kasus     Salin email       │
───────────────────────────────────────────────────────────────────────────
```

- Kiri (kolom 1-8): H1 serif besar. Baris pertama `--fg-muted`, frasa kunci `--fg`, penutup dalam *italic*. Satu paragraf pendek, maksimal 3 baris. Dua aksi: tombol primer + tautan bergaris bawah.
- Kanan (kolom 9-12): **definition list** (`<dl>`), baris dipisahkan garis `--line`, label `--fg-muted`, nilai `--fg`. Isinya data nyata dari `content/`. Tanpa chip, tanpa tab.
- Tidak ada kartu, tidak ada diagram di hero.

### 8.2 Proyek: "Ledger" (tabel baris)

```
01  Sistem Informasi Pendidikan     ERP · Laravel, PostgreSQL        2025
02  Modul SDM                       Modular · Laravel, MySQL         2024
03  …
```

- Setiap proyek = satu baris lebar penuh: nomor, nama (serif 32-48px), domain, stack ringkas (teks, dipisah koma), tahun.
- Hover/fokus: seluruh baris **terbalik** (latar `--invert-bg`, teks `--invert-fg`), transisi 140ms. Seluruh baris adalah tautan ke halaman studi kasus.
- Mobile: baris menjadi blok bertumpuk (nomor + nama, lalu meta di bawahnya).

### 8.3 Studi Kasus (halaman detail)

- Kolom teks sempit (prosa) di kiri, **diagram arsitektur statis SVG monokrom** (garis 1px, kotak persegi, label Geist Mono kecil) di kanan atau lebar penuh.
- Struktur tetap: Masalah → Keputusan arsitektur → Struktur modul → Hasil terukur.
- Blok "Hasil" boleh memakai latar terbalik putih.

### 8.4 Keahlian: "Tabel Tier"

Satu tabel horizontal bergaris, baris = lapisan sistem:

```
Presentasi    Next.js 16, TypeScript, Tailwind
Aplikasi      Laravel 11, PHP 8.3, REST
Domain        Modul Core, SDM, Inventori, Akuntansi
Data          PostgreSQL, MySQL, Redis
Infrastruktur Docker Swarm, Nginx, CI/CD
```

Label tier di kiri (`--fg-muted`), isi di kanan (`--fg`). Tanpa chip dan tanpa bar persentase.

### 8.5 Filosofi: editorial

Satu kolom lebar dengan kutipan besar serif (maks 3 kalimat), dua kolom prosa kecil di bawahnya. Tanpa kartu atau ikon.

### 8.6 Kontak (section terbalik putih)

- Latar `--invert-bg`. Alamat email raksasa (serif, `clamp(2.5rem, 9vw, 8rem)`) sebagai tautan `mailto:`.
- Di bawahnya: tombol **Salin email**, tautan GitHub dan LinkedIn (eksternal, dengan `↗`).
- Footer: satu baris meta (`© 2026`, "Dibangun dengan Next.js 16, statis").

---

## 9. Motion

- Hover baris ledger: inversi warna 140ms.
- Tautan: garis bawah menebal 120ms.
- Menu mobile: fade 160ms. Tidak ada slide, bounce, atau parallax.
- `@media (prefers-reduced-motion: reduce)`: semua transisi `0ms`.

---

## 10. Aturan Anti-Slop (diperbarui)

1. Tidak ada pill, kapsul, atau badge, termasuk di navbar, hero, atau status.
2. Tidak ada warna aksen. Penekanan hanya lewat skala, italic, abu vs putih, dan inversi.
3. Tidak ada kartu bertumpuk. Gunakan garis dan baris.
4. Mono hanya untuk kode, versi, port, dan indeks bernomor.
5. Tidak ada mock editor, terminal, atau window dekoratif.
6. Tidak ada klaim palsu: hanya 3+ tahun, jumlah studi kasus nyata, dan 100% SSG.
7. Tidak ada tautan mati. Setiap kontrol menavigasi ke section nyata atau menjalankan aksi nyata (salin, mailto).
8. Tidak ada ikon `Sparkles`, `Star`, `Magic`, `Robot`.
9. Tidak ada animasi kontinu.

---

## 11. Token CSS (salin ke `globals.css`)

```css
:root {
  --bg: #0a0a0a;
  --bg-raised: #111111;
  --line: #262626;
  --line-strong: #404040;
  --fg: #fafafa;
  --fg-2: #d4d4d4;
  --fg-muted: #8a8a8a;
  --invert-bg: #f5f5f5;
  --invert-fg: #0a0a0a;
  --invert-muted: #525252;

  --font-display: var(--font-instrument-serif), ui-serif, Georgia, serif;
  --font-body: var(--font-geist), system-ui, sans-serif;
  --font-mono: var(--font-geist-mono), ui-monospace, monospace;

  --radius: 0;
  --ease: cubic-bezier(0.2, 0, 0, 1);
}

html { background: var(--bg); color: var(--fg-2); font-family: var(--font-body); }
h1, h2, h3 { font-family: var(--font-display); font-weight: 400; color: var(--fg); letter-spacing: -0.02em; line-height: 1.02; }
:focus-visible { outline: 2px solid var(--fg); outline-offset: 3px; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition-duration: 0ms !important; animation: none !important; }
}
```

---

## 12. Rencana Refactor (urutan kerja)

1. **Token**: ganti `globals.css` dengan token di atas, lalu hapus semua variabel dan kelas warna biru/hijau.
2. **Font**: ganti Syne/Outfit/JetBrains dengan Instrument Serif, Geist, dan Geist Mono.
3. **Hapus komponen v1**: eyebrow pill, kartu arsitektur bertab di hero, chip stack, badge, logo kotak.
4. **Bangun `SiteHeader`** sesuai bagian 7 (desktop + sheet mobile + dialog kontak).
5. **Bangun `Hero`** dengan `<dl>` spesifikasi (bagian 8.1).
6. **Bangun `ProjectLedger`** (bagian 8.2), lalu **`TierTable`** (8.4).
7. **Pindahkan diagram modul** ke halaman studi kasus sebagai SVG statis monokrom.
8. **Section Kontak terbalik** + footer.
9. **Audit**: Tab-only navigation, 320px sampai 4K, kontras AA, `prefers-reduced-motion`, nol tautan mati.

---

## 13. Standar Verifikasi

- **C-1 Intensi**: Setiap pilihan layout mencerminkan cara berpikir backend (modular, berlapis, terdokumentasi).
- **C-2 Kelengkapan**: Semua tautan, tombol salin, dan menu berfungsi.
- **C-3 Berbasis konten**: Semua data di spec list dan ledger berasal dari file di `content/`.
- **C-4 Ketahanan**: Responsif 320px-4K, navigasi keyboard penuh (`Tab`, `Enter`, `Escape`).
- **C-5 Bukti, bukan klaim**: Studi kasus nyata dengan hasil terukur.


---

## 14. Spesifikasi Tambahan (Refinement & Detail Teknis)

### 14.1 Garis Pandu & Crosshair Teknis (§)
- Setiap section dibuka dengan pemisah 1px `--line` lebar penuh dan nomor indeks section bergaya spesifikasi teknis: `§ 01 / PROYEK`, `§ 02 / KEAHLIAN`, `§ 03 / FILOSOFI`, `§ 04 / DOKUMENTASI & MATERI`, `§ 05 / KONTAK`.
- Pada desktop (≥1024px), gunakan tanda crosshair teknis halus `+` pada persimpangan garis luar container untuk memperkuat identitas dokumen arsitektur cetak.

### 14.2 Dialog Kontak Cepat (Modal Akses Langsung)
- Klik "Kontak" di navbar membuka dialog modal minimalis monokrom (latar `--bg-raised`, border 1px `--line-strong`, tanpa shadow):
  - Alamat email utama `muhabibabd@gmail.com` dengan tombol satu klik **Salin** berstatus konfirmasi teks.
  - Tautan langsung `mailto:muhabibabd@gmail.com` untuk membuka email client bawaan.
  - Daftar tautan profil rekayasa terverifikasi: GitHub, LinkedIn, GitLab.
  - Navigasi keyboard penuh (`Escape` untuk menutup dialog, fokus terkunci di dalam modal).

### 14.3 Print Mode (Lembar Spesifikasi Cetak)
- Dukungan `@media print`: Halaman otomatis terformat bersih hitam-putih dengan kontras maksimal, menyembunyikan navbar dan kontrol interaktif, menghasilkan dokumen rekayasa yang siap diarsip atau dicetak sebagai spec-sheet fisik.


---

## 14. Spesifikasi Tambahan (Refinement & Detail Teknis)

### 14.1 Garis Pandu & Crosshair Teknis (§)
- Setiap section dibuka dengan pemisah 1px `--line` lebar penuh dan nomor indeks section bergaya spesifikasi teknis: `§ 01 / PROYEK`, `§ 02 / KEAHLIAN`, `§ 03 / FILOSOFI`, `§ 04 / DOKUMENTASI & MATERI`, `§ 05 / KONTAK`.
- Pada desktop (≥1024px), gunakan tanda crosshair teknis halus `+` pada persimpangan garis luar container untuk memperkuat identitas dokumen arsitektur cetak.

### 14.2 Dialog Kontak Cepat (Modal Akses Langsung)
- Klik "Kontak" di navbar membuka dialog modal minimalis monokrom (latar `--bg-raised`, border 1px `--line-strong`, tanpa shadow):
  - Alamat email utama `muhabibabd@gmail.com` dengan tombol satu klik **Salin** berstatus konfirmasi teks.
  - Tautan langsung `mailto:muhabibabd@gmail.com` untuk membuka email client bawaan.
  - Daftar tautan profil rekayasa terverifikasi: GitHub, LinkedIn, GitLab.
  - Navigasi keyboard penuh (`Escape` untuk menutup dialog, fokus terkunci di dalam modal).

### 14.3 Print Mode (Lembar Spesifikasi Cetak)
- Dukungan `@media print`: Halaman otomatis terformat bersih hitam-putih dengan kontras maksimal, menyembunyikan navbar dan kontrol interaktif, menghasilkan dokumen rekayasa yang siap diarsip atau dicetak sebagai spec-sheet fisik.
