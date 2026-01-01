<template>
    <div class="w-full">
        <div class="flex flex-col md:flex-row gap-6 mb-8 w-full items-start">
            <SolverCard>
                <template #action>
                    <a href="https://katlaindonesia.com/" target="_blank"
                        class="flex items-center justify-center gap-2 w-full mb-8 py-3 bg-teal-600 dark:bg-teal-500 text-white hover:bg-teal-700 dark:hover:bg-teal-400 rounded-xl font-bold transition-all text-sm group shadow-lg shadow-teal-500/20 mb-8">
                        <img src="~/assets/img/katlaindonesia.png" class="w-5 h-5 rounded-sm"
                            alt="Katla Indonesia Icon">
                        <span>Main Katla Indonesia</span>
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </template>
                <GreenTileInput v-model="green" label="Posisi Benar (Hijau)" />
                <BaseInput v-model="yellow" label="Ada, Tapi Posisi Salah (Kuning)" placeholder="Contoh: am"
                    color="amber" />
                <BaseInput v-model="gray" label="Tidak Ada (Abu-abu)" placeholder="Contoh: bxyz" color="slate" />
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
            </SolverCard>
            <WordResult :words="filteredWords" />

        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import words from '~/assets/data/katla-possible-answer-wordlist.json'
import allowedguest from '~/assets/data/katla-allowed-guest-wordlist.json'
import SolverCard from '~/components/SolverCard.vue'
import GreenTileInput from '~/components/GreenTileInput.vue'
import WordResult from '~/components/WordResult.vue'
import BaseInput from '~/components/BaseInput.vue'

const onlyPossibleAnswers = ref(false)

const green = ref(['', '', '', '', ''])
const yellow = ref('')
const gray = ref('')

const { filteredWords } = useWordFilter(
    computed(() => onlyPossibleAnswers.value ? words : [...new Set([...words, ...allowedguest])]),
    { green, yellow, gray }
)

useSeoMeta({
    title: 'Katla Indonesia Solver',
    description: 'Solver khusus Katla Indonesia (Wordle Indonesia). Dilengkapi wordlist Katla Indonesia untuk membantu kamu menemukan jawaban hari ini.',
    ogTitle: 'Katla Indonesia Solver - Five Letter Word Indo',
    ogDescription: 'Temukan jawaban Katla hari ini dengan mudah menggunakan solver akurat kami.',
})
</script>
