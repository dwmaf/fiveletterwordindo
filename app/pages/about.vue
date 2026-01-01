<template>
    <div class="max-w-4xl mx-auto py-8 md:px-4">
        <div
            class="bg-white dark:bg-slate-900 rounded-[2rem] p-4 md:p-16 shadow-xl border border-slate-200 dark:border-slate-800">
            <h1
                class="text-3xl md:text-4xl font-black mb-8 bg-gradient-to-r from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
                About Us
            </h1>

            <div
                class="prose dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p class="text-lg">
                    <strong>5 Letter Word Indo Finder</strong> adalah alat bantu gratis yang dirancang untuk membantu
                    para pemain permainan tebak kata (seperti Wordle versi Indonesia) menemukan kata-kata potensial
                    berdasarkan petunjuk yang didapat.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-12">Misi Kami</h2>
                <p>
                    Misi kami adalah menyediakan database kata bahasa Indonesia yang lengkap dan sistem filter yang
                    cepat serta intuitif. Kami percaya bahwa sedikit bantuan dalam permainan kata bisa membuat
                    pengalaman bermain menjadi lebih menyenangkan dan edukatif.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-12">Teknologi</h2>
                <p>
                    Aplikasi ini dibangun dengan teknologi web terbaru termasuk Nuxt, Vue 3, dan Tailwind CSS 4 untuk
                    memastikan performa yang cepat dan tampilan yang responsif di semua perangkat.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'About Us',
})
</script>
