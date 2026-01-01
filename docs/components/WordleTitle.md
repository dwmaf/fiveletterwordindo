# WordleTitle Component

`WordleTitle` adalah komponen dekoratif yang digunakan untuk menampilkan judul atau teks dalam bentuk kotak-kotak (tiles) berwarna khas Wordle. Komponen ini secara otomatis menangani pemisahan kata (*word wrapping*) dan pemberian warna dinamis untuk menciptakan estetika permainan kata.

---

## 🛠 Atribut (Props)

| Nama | Tipe | Default | Deskripsi |
| :--- | :--- | :--- | :--- |
| `text` | `String` | `'WORDLE'` | Teks yang ingin ditampilkan sebagai judul. Huruf akan otomatis diubah menjadi kapital. |

---

## 🎨 Logika Pewarnaan (Dynamic Coloring)

Pewarnaan kotak ditentukan melalui fungsi internal `getColorClass(wIndex, cIndex)` dengan aturan sebagai berikut:

1.  **Status "Correct Answer" (Hijau)**:
    - Jika teks terdiri dari lebih dari satu kata, maka **kata terakhir** dalam kalimat tersebut akan otomatis berwarna hijau penuh (`bg-[#538d4e]`). Ini memberikan kesan visual "Jawaban yang ditemukan".
2.  **Pola Alternatif (Abu & Kuning)**:
    - Untuk kata-kata selain kata terakhir, komponen menggunakan pola urutan warna: **Abu-abu, Kuning, Abu-abu, Abu-abu, Kuning**.
    - Indeks warna dihitung secara kumulatif `(wIndex * 3) + cIndex` agar pola warna terlihat menyambung secara organik antar kata.

---

## 📐 Tata Letak (Layout)

- **Word Wrapping**: Menggunakan `flex-wrap` sehingga jika teks terlalu panjang untuk lebar layar, kata-kata akan turun ke bawah tanpa memotong susunan kotak per kata.
- **Responsivitas**: Ukuran kotak disesuaikan secara otomatis:
    - Mobile: `w-6 h-6` (text base)
    - Desktop: `w-8 h-8` (text 2xl)
- **Interaksi**: Memiliki efek mikro-animasi `hover:scale-110` saat kursor berada di atas kotak.

---

## 🚀 Contoh Penggunaan

```vue
<template>
  <!-- Menampilkan judul dengan kata 'SOLVER' berwarna hijau -->
  <WordleTitle text="Katla ID Solver" />
</template>
```
