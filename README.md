# Satria Gilang Arganata — Portfolio

Personal portfolio website for a Data Science student at UIN Salatiga.

## Struktur Folder

```
portfolio/
├── index.html          ← Halaman utama
├── vercel.json         ← Konfigurasi deploy Vercel
├── css/
│   └── style.css       ← Semua styling
├── js/
│   └── main.js         ← Semua JavaScript
└── assets/
    └── cv-satria-arganata.pdf   ← Upload CV kamu di sini
```

## Cara Deploy ke Vercel

### Opsi 1 — Drag & Drop (paling mudah)
1. Buka [vercel.com](https://vercel.com) dan login / daftar
2. Klik **"Add New → Project"**
3. Pilih **"Upload"** (drag & drop folder `portfolio/`)
4. Klik **"Deploy"** — selesai!

### Opsi 2 — GitHub (rekomendasi untuk update mudah)
1. Buat repository baru di GitHub (bisa private)
2. Upload seluruh isi folder `portfolio/` ke repo
3. Di Vercel → **"Add New → Project"** → pilih repo GitHub-mu
4. Framework preset: **Other** (static site)
5. Klik **Deploy**

### Opsi 3 — Vercel CLI
```bash
npm i -g vercel
cd portfolio/
vercel
```
Ikuti instruksi di terminal.

## Yang Perlu Dikustomisasi

| Item | Lokasi |
|------|--------|
| CV / Resume | Letakkan file PDF di `assets/cv-satria-arganata.pdf` |
| Foto profil | Ganti `.avatar-placeholder` di `css/style.css` dengan `<img>` tag |
| Link Facebook | Cari `facebook.com/your-facebook-profile` di `index.html` dan ganti |
| Link project | Cari `href="#"` pada project cards dan isi link yang sesuai |
| Tahun pendidikan | Edit bagian Education di `index.html` |

## Fitur yang Tersedia

- ✅ Dark / Light Mode Toggle (tersimpan di localStorage)
- ✅ Loading Animation
- ✅ Typing Animation di Hero
- ✅ Animated Data Grid Background (canvas)
- ✅ Scroll Reveal Animation
- ✅ Skill Bars Animation (on scroll)
- ✅ Sticky Navbar dengan Active Highlight
- ✅ Mobile-responsive Navigation
- ✅ Back to Top Button
- ✅ Smooth Scroll
- ✅ SEO Meta Tags + Open Graph
- ✅ Siap deploy ke Vercel (static, no backend needed)

## Custom Domain di Vercel (opsional)
1. Beli domain (misalnya `satria.dev` di Namecheap/Niagahoster)
2. Di dashboard Vercel project → **Settings → Domains**
3. Tambahkan domain dan ikuti instruksi DNS

---
Built with pure HTML, CSS, and Vanilla JS — no frameworks, no build tools needed.
