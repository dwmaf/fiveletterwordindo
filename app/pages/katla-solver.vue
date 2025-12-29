<template>
    <div class="w-full">


        <div class="flex flex-col md:flex-row gap-6 mb-8 w-full items-start">
            <div id="input"
                class="w-full md:w-[320px] shrink-0 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800">
                <div class="space-y-8">
                    <div>
                        <label class="block text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-4 ml-1">Posisi
                            Benar
                            (Hijau)</label>
                        <div class="flex gap-2 justify-center">
                            <input v-for="i in 5" :key="i" v-model="green[i - 1]" ref="greenInputs"
                                @input="handleInput(i - 1, $event)" @keydown.backspace="handleBackspace(i - 1, $event)"
                                @mousedown="green[i - 1] = ''" @keyup.tab="green[i - 1] = ''"
                                class="w-full aspect-square text-center text-xl font-black bg-slate-50 dark:bg-slate-800/50 border-2 border-emerald-500/30 dark:border-emerald-500/20 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none uppercase transition-all caret-transparent"
                                type="text" />
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-bold text-amber-600 dark:text-amber-400 mb-3 ml-1">Ada, Tapi
                            Posisi
                            Salah (Kuning)</label>
                        <input v-model="yellow" placeholder="Contoh: am"
                            class="h-12 w-full p-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-amber-500/30 dark:border-amber-500/20 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20 outline-none uppercase tracking-widest transition-all" />
                    </div>

                    <div>
                        <label class="block text-sm font-bold text-slate-500 dark:text-slate-400 mb-3 ml-1">Tidak Ada
                            (Abu-abu)</label>
                        <input v-model="gray" placeholder="Contoh: bxyz"
                            class="h-12 w-full p-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-300 dark:border-slate-700 rounded-xl focus:border-slate-400 dark:focus:border-slate-500 focus:ring-4 focus:ring-slate-400/10 outline-none uppercase tracking-widest transition-all" />
                    </div>

                    <div class="pt-4 border-t border-slate-100 dark:border-slate-800">
                        <label class="flex items-center cursor-pointer group">
                            <div class="relative">
                                <input type="checkbox" v-model="onlyPossibleAnswers" class="sr-only">
                                <div class="w-10 h-6 bg-slate-200 dark:bg-slate-700 rounded-full shadow-inner transition-colors group-hover:bg-slate-300 dark:group-hover:bg-slate-600"
                                    :class="{ 'bg-teal-500 dark:bg-teal-600': onlyPossibleAnswers }"></div>
                                <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform"
                                    :class="{ 'translate-x-4': onlyPossibleAnswers }"></div>
                            </div>
                            <div class="ml-3">
                                <div class="text-sm font-bold text-slate-700 dark:text-slate-200">Hanya Kemungkinan
                                    Jawaban
                                </div>
                                <div class="text-[10px] text-slate-400 dark:text-slate-500 font-medium">Saring kata
                                    yang bukan kemungkinan jawaban tapi boleh ditebak
                                    <span class="text-[9px] opacity-70 ml-1">(Last updated: 29 Dec 2025)</span>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            <div id="hasil"
                class="flex-1 w-full bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800 self-stretch">
                <div class="flex justify-between items-center mb-8">
                    <h2 class="text-xl font-bold flex items-center gap-2">
                        <span>Hasil Pencarian</span>
                        <span class="animate-pulse w-2 h-2 rounded-full bg-teal-500"></span>
                    </h2>
                    <span
                        class="bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 text-xs font-black px-4 py-2 rounded-full border border-teal-200 dark:border-teal-800 tracking-wider transition-all">
                        {{ filteredWords.length }} KATA
                    </span>
                </div>

                <div v-if="filteredWords.length > 0">
                    <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                        <div v-for="word in filteredWords.slice(0, 100)" :key="word"
                            class="bg-slate-50 dark:bg-slate-800/30 p-3 text-center rounded-xl border border-slate-100 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-lg hover:-translate-y-0.5 transition-all uppercase font-mono font-bold text-slate-700 dark:text-slate-300">
                            {{ word }}
                        </div>
                    </div>
                    <p v-if="filteredWords.length > 100"
                        class="text-center text-xs font-medium text-slate-400 dark:text-slate-600 mt-10 tracking-widest border-t border-slate-100 dark:border-slate-800 pt-6">
                        MENAMPILKAN 100 KATA PERTAMA
                    </p>
                </div>

                <div v-else class="flex flex-col items-center justify-center py-24 text-center">
                    <div class="text-6xl mb-6 grayscale hover:grayscale-0 transition-all cursor-default">😅</div>
                    <p class="text-slate-500 dark:text-slate-400 font-bold text-lg">Tidak ada kata yang cocok</p>
                    <p class="text-slate-400 dark:text-slate-500 text-sm mt-2">Coba kurangi filter atau periksa kembali
                        input Anda.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import words from '~/assets/data/katla-possible-answer-wordlist.json'
import allowedguest from '~/assets/data/katla-allowed-guest-wordlist.json'

const onlyPossibleAnswers = ref(false)

const green = ref(['', '', '', '', ''])
const yellow = ref('')
const gray = ref('')
const greenInputs = ref([])

const handleInput = (index, event) => {
    const val = event.target.value
    if (val) {
        // Ambil huruf terakhir saja (untuk mendukung replace)
        green.value[index] = val.slice(-1).toUpperCase()

        // Pindah ke kolom selanjutnya
        if (index < 4) {
            greenInputs.value[index + 1].focus()
        }
    }
}

const handleBackspace = (index, event) => {
    // Jika kolom kosong dan bukan kolom pertama, pindah ke kolom sebelumnya saat tekan backspace
    if (!green.value[index] && index > 0) {
        greenInputs.value[index - 1].focus()
    }
}

const filteredWords = computed(() => {
    const baseWords = onlyPossibleAnswers.value ? words : [...new Set([...words, ...allowedguest])]

    return baseWords.filter(word => {
        const w = word.toLowerCase()

        for (let i = 0; i < 5; i++) {
            if (green.value[i] && w[i] !== green.value[i].toLowerCase()) return false
        }

        const yellowChars = yellow.value.toLowerCase().split('').filter(c => c.trim())
        if (!yellowChars.every(char => w.includes(char))) return false

        const grayChars = gray.value.toLowerCase().split('').filter(c => c.trim())
        if (grayChars.some(char => w.includes(char))) return false

        return true
    })
})

useSeoMeta({
    title: 'Katla Solver',
    description: 'Solver khusus Katla (Wordle Indonesia). Dilengkapi wordlist Katla untuk membantu kamu menemukan jawaban hari ini.',
    ogTitle: 'Katla Indonesia Solver - Five Letter Word Indo',
    ogDescription: 'Temukan jawaban Katla hari ini dengan mudah menggunakan solver akurat kami.',
})
</script>
