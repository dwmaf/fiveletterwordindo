<template>
    <div class="w-full">
        <div
            class="mb-6 p-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-[2rem] shadow-xl shadow-teal-500/20 group overflow-hidden relative">
            <div
                class="bg-white dark:bg-slate-900 rounded-[1.8rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                <div
                    class="absolute -right-10 -top-10 w-40 h-40 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700">
                </div>

                <div class="flex items-center gap-6 relative z-10">
                    <div
                        class="leading-none hidden md:flex md:w-14 md:h-11 lg:w-16 lg:h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl items-center justify-center text-2xl lg:text-3xl shadow-inner border border-slate-200/50 dark:border-slate-700/50 pb-1.5">
                        🇬🇧
                    </div>
                    <div class="text-center md:text-left">
                        <div class="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                            <span
                                class="bg-teal-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">New
                                Feature</span>
                            <h2 class="text-xl md:text-2xl font-black text-slate-900 dark:text-white">Playing Wordle in
                                English?</h2>
                        </div>
                        <p class="text-slate-500 dark:text-slate-400 font-medium max-w-md">
                            We've just launched the English version! Solve Wordle (NYT) easily. You can now filter
                            results to show only words that haven't been used as answers yet!.
                        </p>
                    </div>
                </div>

                <NuxtLink to="/wordle-solver"
                    class="relative z-10 w-full md:w-auto px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg text-center">
                    Switch to Wordle English Solver
                </NuxtLink>
            </div>
        </div>

        <div
            class="mb-10 p-1 bg-gradient-to-r from-indigo-500 via-indigo-500 to-blue-500 rounded-[2rem] shadow-xl shadow-indigo-500/20 group overflow-hidden relative">
            <div
                class="bg-white dark:bg-slate-900 rounded-[1.8rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                <div
                    class="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700">
                </div>
                <div class="flex items-center gap-6 relative z-10">
                    <div
                        class="leading-none hidden md:flex md:w-14 md:h-11 lg:w-16 lg:h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl items-center justify-center text-2xl lg:text-3xl shadow-inner border border-slate-200/50 dark:border-slate-700/50 pb-1.5">
                        🇮🇩
                    </div>
                    <div class="text-center md:text-left">
                        <div class="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                            <span
                                class="bg-indigo-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">Katla</span>
                            <h2 class="text-xl md:text-2xl font-black text-slate-900 dark:text-white">Main Katla
                                Indonesia?</h2>
                        </div>
                        <p class="text-slate-500 dark:text-slate-400 font-medium max-w-md">
                            Butuh bantuan menebak Katla hari ini? Kami mendukung kedua versi populer:
                            <strong>Katla.id</strong> dan <strong>Katlaindonesia.com</strong>.
                        </p>
                    </div>
                </div>

                <div
                    class="relative z-10 flex flex-col sm:flex-row sm:justify-center md:flex-col lg:flex-row md:justify-start gap-3 w-full md:w-auto">
                    <NuxtLink to="/katla-id-solver"
                        class="px-6 py-3.5 bg-indigo-600 text-white font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg text-center whitespace-nowrap">
                        Katla ID Solver
                    </NuxtLink>
                    <NuxtLink to="/katla-indonesia-solver"
                        class="px-6 py-3.5 bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg text-center whitespace-nowrap">
                        Katla Indonesia Solver
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div class="flex flex-col md:flex-row gap-6 mb-8 w-full items-start">
            <SolverCard>
                <GreenTileInput v-model="green" label="Posisi Benar (Hijau)" />
                <BaseInput v-model="yellow" label="Ada, Tapi Posisi Salah (Kuning)" placeholder="Contoh: am"
                    color="amber" />
                <BaseInput v-model="gray" label="Tidak Ada (Abu-abu)" placeholder="Contoh: bxyz" color="slate" />
            </SolverCard>
            <WordResult :words="filteredWords" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import words from '~/assets/data/indo-wordlist.json'
import SolverCard from '~/components/SolverCard.vue'
import GreenTileInput from '~/components/GreenTileInput.vue'
import WordResult from '~/components/WordResult.vue'
import BaseInput from '~/components/BaseInput.vue'

const green = ref(['', '', '', '', ''])
const yellow = ref('')
const gray = ref('')

const { filteredWords } = useWordFilter(computed(() => words), { green, yellow, gray })

useSeoMeta({
    title: 'Indonesian Wordle Solver',
    description: 'Bantu pecahkan teka-teki Wordle bahasa Indonesia (umum) secara instan. Filter kata 5 huruf berdasarkan posisi dan ketersediaan huruf.',
    ogTitle: 'Indonesian Wordle Solver - Five Letter Word Indo',
    ogDescription: 'Temukan kata 5 huruf bahasa Indonesia dengan mudah untuk Wordle.',
})
</script>
