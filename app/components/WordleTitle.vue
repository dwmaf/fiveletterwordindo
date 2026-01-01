<template>
    <div class="flex flex-wrap gap-x-3 gap-y-2 items-center font-bold">
        <!-- Loop per Kata agar wrapping rapi -->
        <div v-for="(word, wIndex) in words" :key="wIndex" class="flex gap-0.5">
            <div v-for="(char, cIndex) in word" :key="cIndex"
                class="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-white text-lg md:text-2xl select-none transition-all hover:scale-110 shadow-sm"
                :class="getColorClass(wIndex, cIndex)">
                {{ char }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    text: {
        type: String,
        required: true,
        default: 'WORDLE'
    }
})

// Pecah jadi array of string kata (e.g. ['KATLA', 'ID', 'SOLVER'])
const words = computed(() => props.text.toUpperCase().split(' '))

// Pola warna dinamis
const getColorClass = (wIndex, cIndex) => {
    // Jika lebih dari 1 kata, dan ini adalah KATA TERAKHIR
    if (words.value.length > 1 && wIndex === words.value.length - 1) {
        return 'bg-[#538d4e]' // Hijau semua (Correct Answer)
    }

    // Pola untuk kata-kata sebelumnya (Salah / Salah Posisi)
    // Pola: Abu, Kuning, Abu, Abu, Kuning... (Tanpa Hijau)
    const pattern = [
        'bg-[#3a3a3c]', // Abu
        'bg-[#b59f3b]', // Kuning
        'bg-[#3a3a3c]', // Abu
        'bg-[#3a3a3c]', // Abu
        'bg-[#b59f3b]', // Kuning
    ]

    // Hitung index global (kumulatif) biar polanya nyambung antar kata
    // Kita pakai wIndex * 3 + cIndex biar agak acak
    const index = (wIndex * 3) + cIndex
    return pattern[index % pattern.length]
}
</script>
