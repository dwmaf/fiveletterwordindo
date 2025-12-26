<template>
  <div :class="{ 'dark': isDark }">
    <div
      class="min-h-screen transition-colors duration-300 bg-slate-200 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-2 font-sans flex flex-col">
      <div class="flex-grow container mx-auto px-2">
        <header class="flex justify-between items-center mb-10 py-4">
          <div class="text-left">
            <NuxtLink to="/">
              <h1
                class="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent tracking-tighter">
                5 Letter Word Indo Finder
              </h1>
            </NuxtLink>
          </div>

          <button @click="toggleTheme"
            class="p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 hover:scale-110 active:scale-95 transition-all outline-none"
            :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
            <span v-if="isDark" class="text-xl">☀️</span>
            <span v-else class="text-xl">🌙</span>
          </button>
        </header>

        <main>
          <NuxtPage />
        </main>
      </div>

      <footer
        class="mt-12 bg-white dark:bg-slate-900 rounded-t-[3rem] border-t border-slate-200 dark:border-slate-800 p-8 md:p-12 overflow-hidden relative">
        <div
          class="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent">
        </div>

        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div class="space-y-4">
            <h3
              class="text-lg font-black bg-gradient-to-r from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
              5 Letter Word Indo Finder
            </h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Asisten cerdas untuk memenangkan permainan Wordle bahasa Indonesia. Temukan kata yang tepat dalam hitungan
              detik.
            </p>
          </div>

          <div>
            <h4
              class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100 mb-6 border-b border-slate-100 dark:border-slate-800 pb-2 inline-block">
              Menu</h4>
            <ul class="space-y-3">
              <li>
                <NuxtLink to="/"
                  class="text-sm text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-pointer">
                  Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about"
                  class="text-sm text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-pointer">
                  About Us</NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h4
              class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100 mb-6 border-b border-slate-100 dark:border-slate-800 pb-2 inline-block">
              Legalitas</h4>
            <ul class="space-y-3">
              <li>
                <NuxtLink to="/privacy"
                  class="text-sm text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-pointer">
                  Privacy Policy</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/terms"
                  class="text-sm text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-pointer">
                  Terms of Service</NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="max-w-7xl mx-auto pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p class="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter">
            &copy; {{ new Date().getFullYear() }} Word Indo Finder. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.theme = isDark.value ? 'dark' : 'light'
  updateDocumentClass()
}

const updateDocumentClass = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

onMounted(() => {
  const savedTheme = localStorage.theme
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  updateDocumentClass()
})
</script>