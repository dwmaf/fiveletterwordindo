# Tailwind CSS Typography & Text Guide

Panduan lengkap styling teks menggunakan Tailwind CSS.

## 1. Font Size (Ukuran Huruf)
| Class | Font Size | Pixel | Keterangan |
| :--- | :--- | :--- | :--- |
| `text-xs` | 0.75rem | 12px | Extra Small |
| `text-sm` | 0.875rem | 14px | Small |
| `text-base` | 1rem | 16px | **Standard (Default)** |
| `text-lg` | 1.125rem | 18px | Large |
| `text-xl` | 1.25rem | 20px | Extra Large |
| `text-2xl` | 1.5rem | 24px | Heading 2 |
| `text-3xl` | 1.875rem | 30px | Heading 1 |
| `text-4xl` | 2.25rem | 36px | Large Title |
| `text-5xl` | 3rem | 48px | Display 1 |
| ... | ... | ... | ... |

## 2. Font Weight (Ketebalan)
Mengatur ketabalan huruf (`font-weight`).

| Class | CSS Value | Keterangan |
| :--- | :--- | :--- |
| `font-thin` | 100 | Tipis Sekali |
| `font-extralight` | 200 | Sangat Tipis |
| `font-light` | 300 | Tipis |
| `font-normal` | 400 | **Normal (Default)** |
| `font-medium` | 500 | Agak Tebal |
| `font-semibold` | 600 | Semi Bold |
| `font-bold` | 700 | **Bold (Umum)** |
| `font-extrabold` | 800 | Sangat Tebal |
| `font-black` | 900 | Paling Tebal |

## 3. Font Style & Decoration
Mengatur gaya dan garisan teks.

| Class | CSS Equivalent | Hasil |
| :--- | :--- | :--- |
| `italic` | `font-style: italic` | *Miring* |
| `not-italic` | `font-style: normal` | Tegak (Reset) |
| `underline` | `text-decoration: underline` | <u>Garis Bawah</u> |
| `overline` | `text-decoration: overline` | Garis Atas |
| `line-through` | `text-decoration: line-through` | ~~Coret~~ |
| `no-underline` | `text-decoration: none` | Hapus Garis |

## 4. Text Transform (Kapitalisasi)
Mengubah casing huruf secara otomatis.

| Class | CSS Value | Hasil |
| :--- | :--- | :--- |
| `uppercase` | `text-transform: uppercase` | SEMUA KAPITAL |
| `lowercase` | `text-transform: lowercase` | semua kecil |
| `capitalize` | `text-transform: capitalize` | Huruf Depan Besar |
| `normal-case` | `text-transform: none` | Normal (Reset) |

## 5. Text Alignment (Perataan)
Mengatur posisi teks horizontal.

| Class | CSS Value | Keterangan |
| :--- | :--- | :--- |
| `text-left` | `text-align: left` | Rata Kiri |
| `text-center` | `text-align: center` | **Rata Tengah** |
| `text-right` | `text-align: right` | Rata Kanan |
| `text-justify` | `text-align: justify` | Rata Kiri-Kanan |

## 6. Letter Spacing (Jarak Antar Huruf)
Disebut juga **Tracking**.

| Class | CSS Value | Penggunaan |
| :--- | :--- | :--- |
| `tracking-tighter` | -0.05em | Judul Sangat Besar |
| `tracking-tight` | -0.025em | Judul Besar |
| `tracking-normal` | 0em | **Normal** |
| `tracking-wide` | 0.025em | Menu/Subhead |
| `tracking-wider` | 0.05em | Label Kecil (ALL CAPS) |
| `tracking-widest` | 0.1em | Artistik |

## 7. Line Height (Jarak Antar Baris)
Disebut juga **Leading**. Penting agar paragraf enak dibaca.

| Class | Value | Cocok Untuk |
| :--- | :--- | :--- |
| `leading-none` | 1 | Judul (Heading) |
| `leading-tight` | 1.25 | Judul Panjang |
| `leading-snug` | 1.375 | Subjudul |
| `leading-normal` | 1.5 | **Paragraf Standar** |
| `leading-relaxed` | 1.625 | Artikel Panjang |
| `leading-loose` | 2 | Teks Renggang |

## 8. Text Color (Warna)
Pola: `text-{color}-{shade}`.
Contoh:
- `text-slate-900` (Hitam Pekat)
- `text-white` (Putih)
- `text-teal-500` (Teal Sedang)
- `text-transparent` (Transparan, biasa untuk gradient text)

## 9. Lain-lain
- **Truncate**: `truncate` (Memotong teks panjang jadi "...")
- **Wrappping**:
    - `whitespace-nowrap` (Melarang teks turun baris)
    - `break-words` (Memaksa teks turun baris jika kepanjangan)
- **Indent**: `indent-4`, `indent-8` (Paragraf menjorok ke dalam)

## Usage Example (Kombinasi)

```html
<!-- Judul Artikel -->
<h1 class="text-3xl font-black text-slate-900 uppercase tracking-tight leading-none">
  Judul yang Sangat Powerful
</h1>

<!-- Label Kecil -->
<span class="text-xs font-bold text-slate-500 uppercase tracking-widest">
  Kategori
</span>

<!-- Paragraf -->
<p class="text-base text-slate-600 leading-relaxed text-justify">
  Ini adalah contoh paragraf yang nyaman dibaca karena menggunakan leading-relaxed dan text-base.
</p>
```
