<template>
    <div class="w-full">
        <div class="flex flex-col md:flex-row gap-6 mb-8 w-full items-start">
            <SolverCard>
                <template #action>
                    <a href="https://katla.id/" target="_blank"
                        class="flex items-center justify-center gap-2 w-full mb-8 py-3 bg-teal-600 dark:bg-teal-500 text-white hover:bg-teal-700 dark:hover:bg-teal-400 rounded-xl font-bold transition-all text-sm group shadow-lg shadow-teal-500/20 mb-8">
                        <span
                            class="flex items-center justify-center w-5 h-5 bg-[#147f3c] rounded-sm text-white font-semibold text-xs leading-none">K</span>
                        <span>Main Katla ID</span>
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </template>

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
import words from '~/assets/data/katla-id-wordlist.json'
import SolverCard from '~/components/SolverCard.vue'
import GreenTileInput from '~/components/GreenTileInput.vue'
import WordResult from '~/components/WordResult.vue'
import BaseInput from '~/components/BaseInput.vue'

const green = ref(['', '', '', '', ''])
const yellow = ref('')
const gray = ref('')
const { filteredWords } = useWordFilter(computed(() => words), { green, yellow, gray })

useSeoMeta({
    title: 'Katla ID Solver',
    description: 'Solver khusus Katla (Wordle Indonesia). Dilengkapi wordlist Katla Indonesia untuk membantu kamu menemukan jawaban hari ini.',
    ogTitle: 'Katla Solver - Five Letter Word Indo',
    ogDescription: 'Temukan jawaban Katla hari ini dengan mudah menggunakan solver akurat kami.',
})
</script>
