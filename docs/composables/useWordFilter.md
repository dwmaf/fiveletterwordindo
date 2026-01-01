# useWordFilter Composable

`useWordFilter` adalah modul logika pusat (*composable*) yang bertanggung jawab untuk melakukan penyaringan daftar kata berdasarkan kriteria pencarian Wordle atau Katla. Composable ini mengabstraksi algoritma filter yang kompleks menjadi satu fungsi yang dapat digunakan kembali di berbagai halaman.

---

## 🔬 Tanda Tangan Fungsi

```javascript
const { filteredWords } = useWordFilter(wordsRef, filters, options)
```

### Parameter

| Nama | Tipe | Deskripsi |
| :--- | :--- | :--- |
| `wordsRef` | `Ref <Array>` \| `Computed` | Daftar kata dasar yang akan disaring (Wordlist). Harus dalam bentuk reaktif agar filter otomatis terupdate saat data berubah. |
| `filters` | `Object` | Berisi tiga Ref: `{ green, yellow, gray }`. `green` berupa array 5 string, `yellow` dan `gray` berupa string tunggal. |
| `options` | `Object` | (Opsional) Berisi konfigurasi tambahan seperti `{ shouldExclude, excludeList }` untuk menyaring jawaban masa lalu. |

---

## 🧩 Logika Penyaringan

Penyaringan dilakukan secara berurutan (*cascading*) dengan kriteria:

1.  **Filter Hijau (Posisi Benar)**: Memeriksa apakah huruf pada posisi tertentu (0-4) cocok dengan input. Jika input diisi (tidak kosong), maka huruf pada posisi tersebut di kamus kata harus sama.
2.  **Filter Kuning (Ada di Kata)**: Memeriksa apakah semua karakter yang dimasukkan pada input kuning terdapat di dalam kata, tanpa mempedulikan posisinya.
3.  **Filter Abu-abu (Tidak Ada)**: Memastikan tidak ada satu pun karakter dari input abu-abu yang terkandung di dalam kata tersebut.
4.  **Fitur Pengecualian (Exclusion)**: Jika opsi `shouldExclude` aktif, fungsi akan membuang kata-kata yang terdaftar di dalam `excludeList` (biasanya digunakan untuk menghindari jawaban yang sudah pernah keluar sebelumnya).

---

## 💡 Keunggulan Integrasi

- **Reactive by Design**: Karena menggunakan `computed`, `filteredWords` akan selalu sinkron dengan state input pengguna tanpa perlu menekan tombol "Submit".
- **Agnostik Data**: Tidak peduli apakah daftar kata berasal dari file JSON lokal atau fetching API (Supabase), selama dilempar sebagai Ref/Computed, composable ini akan bekerja.
- **Efisiensi Memori**: List kata dasar tidak akan dimodifikasi (*immutable*), composable akan selalu menghasilkan list baru yang terfilter.

---

## 🚀 Contoh Penggunaan

```javascript
<script setup>
const words = ref(['pakan', 'pakai', 'pasar'])
const filters = {
  green: ref(['P', 'A', '', '', '']),
  yellow: ref('k'),
  gray: ref('s')
}

// Menghasilkan ['pakan', 'pakai']
const { filteredWords } = useWordFilter(words, filters)
</script>
```
