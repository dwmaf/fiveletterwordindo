<template>
    <div id="hasil"
        class="flex-1 w-full bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800 self-stretch">
        <div class="flex justify-between items-center mb-8">
            <h2 class="text-xl font-bold flex items-center gap-2">
                <span>Hasil</span>
                <span class="animate-pulse w-2 h-2 rounded-full bg-teal-500"></span>
            </h2>
            <span
                class="bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 text-xs font-black px-4 py-2 rounded-full border border-teal-200 dark:border-teal-800 tracking-wider transition-all">
                {{ words.length }} KATA
            </span>
        </div>

        <div v-if="words.length > 0">
            <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                <div v-for="word in words.slice(0, maxDisplay)" :key="word"
                    class="bg-slate-50 dark:bg-slate-800/30 p-3 text-center rounded-xl border border-slate-100 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-lg hover:-translate-y-0.5 transition-all uppercase font-mono font-bold text-slate-700 dark:text-slate-300">
                    {{ word }}
                </div>
            </div>
            <p v-if="words.length > maxDisplay"
                class="text-center text-xs font-medium text-slate-400 dark:text-slate-600 mt-10 tracking-widest border-t border-slate-100 dark:border-slate-800 pt-6 uppercase">
                MENAMPILKAN {{ maxDisplay }} KATA PERTAMA
            </p>
        </div>

        <div v-else class="flex flex-col items-center justify-center py-24 text-center">
            <div class="text-6xl mb-6 grayscale hover:grayscale-0 transition-all cursor-default">😅</div>
            <p class="text-slate-500 dark:text-slate-400 font-bold text-lg">Tidak ada kata yang cocok</p>
            <p class="text-slate-400 dark:text-slate-500 text-sm mt-2">Coba kurangi filter atau periksa kembali
                input Anda.</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    words: {
        type: Array,
        required: true,
        default: () => []
    },
    maxDisplay: {
        type: Number,
        default: 100
    }
})
</script>
