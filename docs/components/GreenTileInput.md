# GreenTileInput Component

`GreenTileInput` adalah komponen input khusus yang dirancang untuk menangani 5 kotak input karakter (tiles) yang merepresentasikan "Posisi Benar" dalam game Wordle atau Katla. Komponen ini memiliki fitur otomatis pindah fokus (*auto-focus navigation*) dan sinkronisasi data melalui `v-model`.

---

## 🛠 Atribut (Props)

| Nama | Tipe | Default | Deskripsi |
| :--- | :--- | :--- | :--- |
| `modelValue` | `Array` | `['','','','','']` | Array berisi 5 string untuk menyimpan karakter dari tiap kotak. Wajib disediakan (biasanya via `v-model`). |
| `label` | `String` | `'Posisi Benar (Hijau)'` | Judul teks yang muncul di atas kotak input. |

---

## 📤 Events

| Nama | Payload | Deskripsi |
| :--- | :--- | :--- |
| `update:modelValue` | `Array` | Emit yang dipicu setiap kali salah satu kotak input berubah nilainya. Digunakan oleh `v-model` untuk sinkronisasi state di parent. |

---

## 🧠 Logika Internal (Functions)

### `handleInput(index, event)`
Fungsi ini dipicu saat pengguna mengetikkan karakter di dalam kotak.
- **Mekanisme**: Mengambil hanya karakter terakhir yang diketik (`val.slice(-1)`), mengubahnya menjadi huruf kapital, dan memperbarui array `modelValue`.
- **Auto-Focus**: Jika karakter yang dimasukkan tidak kosong dan bukan kotak terakhir (index < 4), maka fokus akan otomatis berpindah ke kotak di sebelah kanannya menggunakan `ref`.

### `handleBackspace(index, event)`
Fungsi ini dipicu saat tombol `Backspace` ditekan.
- **Mekanisme**: Jika kotak yang sekarang aktif dalam posisi kosong dan bukan kotak pertama (index > 0), maka fokus akan berpindah kembali ke kotak sebelumnya (kiri).

### `clearInput(index)`
Fungsi ini dipicu saat kotak diklik (`mousedown`) atau dipindah via tombol `Tab`.
- **Mekanisme**: Menghapus isi karakter pada kotak tersebut (set ke string kosong) dan memicu update nilai ke parent. Ini memudahkan pengguna untuk langsung menimpa huruf lama dengan yang baru.

---

## 🚀 Contoh Penggunaan

```vue
<template>
  <GreenTileInput 
    v-model="greenRef" 
    label="Pencarian Huruf Hijau" 
  />
</template>

<script setup>
const greenRef = ref(['', '', '', '', ''])
</script>
```

---

## 🎨 Styling
Komponen ini menggunakan utilitas Tailwind CSS dengan mode adaptif:
- **Light Mode**: Border hijau transparan dengan background halus.
- **Dark Mode**: Penyesuaian kontras untuk kenyamanan mata.
- **Interactive**: Menghilangkan kursor (`caret-transparent`) untuk mempertegas gaya kotak Wordle yang solid.
