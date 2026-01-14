<template>
    <div class="flex flex-col md:flex-row gap-6 mb-8 w-full items-start">
        <SolverCard>
            <template #action>
                <a href="https://www.nytimes.com/games/wordle/index.html" target="_blank"
                    class="flex items-center justify-center gap-2 w-full mb-8 py-3 bg-teal-600 dark:bg-teal-500 text-white hover:bg-teal-700 dark:hover:bg-teal-400 rounded-xl font-bold transition-all text-sm group shadow-lg shadow-teal-500/20 mb-8">
                    <img src="~/assets/img/wordle-icon.webp" class="w-5 h-5 rounded-sm" alt="Wordle Icon">
                    <span>Play Wordle (NYT)</span>
                    <span class="group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </template>
            <GreenTileInput v-model="green" label="Posisi Benar (Hijau)" />
            <BaseInput v-model="yellow" label="Ada, Tapi Posisi Salah (Kuning)" placeholder="Contoh: am"
                color="amber" />
            <BaseInput v-model="gray" label="Tidak Ada (Abu-abu)" placeholder="Contoh: bxyz" color="slate" />
            <div class="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
                <label class="flex items-center cursor-pointer group">
                    <div class="relative">
                        <input type="checkbox" v-model="useWordleOnly" class="sr-only">
                        <div class="w-10 h-6 bg-slate-200 dark:bg-slate-700 rounded-full shadow-inner transition-colors "
                            :class="{ 'bg-teal-500 dark:bg-teal-600': useWordleOnly }"></div>
                        <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform"
                            :class="{ 'translate-x-4': useWordleOnly }"></div>
                    </div>
                    <div class="ml-3">
                        <div class="text-sm font-bold text-slate-700 dark:text-slate-200">Wordle Answers Only</div>
                        <div class="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                            Only show words from the Wordle answer list
                        </div>
                    </div>
                </label>

                <label class="flex items-center cursor-pointer group">
                    <div class="relative">
                        <input type="checkbox" v-model="excludePastAnswers" class="sr-only">
                        <div class="w-10 h-6 bg-slate-200 dark:bg-slate-700 rounded-full shadow-inner transition-colors "
                            :class="{ 'bg-teal-500 dark:bg-teal-600': excludePastAnswers }"></div>
                        <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform"
                            :class="{ 'translate-x-4': excludePastAnswers }"></div>
                    </div>
                    <div class="ml-3">
                        <div class="text-sm font-bold text-slate-700 dark:text-slate-200">Exclude Past Answers</div>
                        <div class="text-[10px] text-slate-400 dark:text-slate-500 font-medium">NYT wordle past answers
                            <span class="text-[9px] opacity-70 ml-1">(Last updated: {{ lastUpdated }})</span>
                        </div>
                    </div>
                </label>
            </div>
        </SolverCard>

        <WordResult :words="filteredWords" />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import wordleWords from '~/assets/data/wordle-wordlist.json'
import allowedWords from '~/assets/data/wordlist-allowed-list.json'
import localPastAnswers from '~/assets/data/wordle-past-answers.json'
import SolverCard from '~/components/SolverCard.vue'
import GreenTileInput from '~/components/GreenTileInput.vue'
import WordResult from '~/components/WordResult.vue'
import BaseInput from '~/components/BaseInput.vue'

const EXTERNAL_DATA_URL = 'sengaja aku hide pas upload ke kamu biar aman'

const { data: fetchResult } = await useAsyncData('past-answers', async () => {
    if (!EXTERNAL_DATA_URL) return null
    try {
        const response = await $fetch(EXTERNAL_DATA_URL)

        if (Array.isArray(response) && response.length > 0 && typeof response[0] === 'object') {
            const words = response.map(item => {
                const w = item.word || item.answer || Object.values(item)[0]
                return typeof w === 'string' ? w.trim().toLowerCase() : w
            })

            let latestDate = null
            if (response.some(item => item.date)) {
                const dates = response
                    .map(item => item.date)
                    .filter(d => d)
                    .sort()

                const lastDateStr = dates[dates.length - 1]
                if (lastDateStr) {
                    latestDate = new Date(lastDateStr).toLocaleDateString('en-GB', {
                        day: 'numeric', month: 'short', year: 'numeric'
                    })
                }
            }

            return { words, latestDate }
        }

        if (Array.isArray(response)) {
            return { words: response, latestDate: null }
        }

        return null
    } catch (error) {
        console.error('Failed to fetch past answers:', error)
        return null
    }
})

const pastanswers = computed(() => {
    const external = fetchResult.value?.words || []
    if (external.length === 0) return localPastAnswers

    return [...new Set([...localPastAnswers, ...external])]
})

const lastUpdated = computed(() => fetchResult.value?.latestDate || '29 Dec 2025')

const useWordleOnly = ref(false)
const excludePastAnswers = ref(false)

const words = computed(() => useWordleOnly.value ? wordleWords : allowedWords)

const green = ref(['', '', '', '', ''])
const yellow = ref('')
const gray = ref('')

const { filteredWords } = useWordFilter(
    words,
    { green, yellow, gray },
    {
        shouldExclude: excludePastAnswers,
        excludeList: pastanswers
    }
)

useSeoMeta({
    title: 'Wordle Solver',
    description: 'The best English Wordle (NYT) solver. Find possible answers and filter out words that have already been used in previous Wordle games.',
    ogTitle: 'English Wordle Solver - Five Letter Word Indo',
    ogDescription: 'Solve NYT Wordle puzzles faster with our smart suggestion tool.',
})
</script>
