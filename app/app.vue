<template>
  <div :class="{ 'dark': isDark }">
    <div
      class="min-h-screen transition-colors duration-300 bg-slate-200 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-2 font-sans flex flex-col">
      <div class="flex-grow container mx-auto px-2">
        <header class="flex justify-between items-start mb-5 sm:mb-10 py-4 gap-4">
          <div class="text-left max-w-[300px]">
            <NuxtLink :to="homeLink" class="block">
              <WordleTitle :text="pageTitle" />
            </NuxtLink>

            <nav class="flex flex-wrap gap-x-4 gap-y-2 mt-4">
              <NuxtLink to="/"
                class="text-[10px] uppercase tracking-[0.2em] font-black transition-all hover:text-teal-500"
                :class="route.path === '/' ? 'text-teal-500' : 'text-slate-400 dark:text-slate-500'">
                Home
              </NuxtLink>
              <NuxtLink to="/wordle-solver"
                class="text-[10px] uppercase tracking-[0.2em] font-black transition-all hover:text-teal-500"
                :class="route.path === '/wordle-solver' ? 'text-teal-500' : 'text-slate-400 dark:text-slate-500'">
                Wordle
              </NuxtLink>
              <NuxtLink to="/katla-id-solver"
                class="text-[10px] uppercase tracking-[0.2em] font-black transition-all hover:text-teal-500"
                :class="route.path === '/katla-id-solver' ? 'text-teal-500' : 'text-slate-400 dark:text-slate-500'">
                Katla ID
              </NuxtLink>
              <NuxtLink to="/katla-indonesia-solver"
                class="text-[10px] uppercase tracking-[0.2em] font-black transition-all hover:text-teal-500"
                :class="route.path === '/katla-indonesia-solver' ? 'text-teal-500' : 'text-slate-400 dark:text-slate-500'">
                Katla Indo
              </NuxtLink>
            </nav>
          </div>

          <button @click="toggleTheme"
            class="hidden min-[376px]:block shrink-0 p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 hover:scale-110 active:scale-95 transition-all outline-none"
            :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
            <span v-if="isDark" class="text-xl">☀️</span>
            <span v-else class="text-xl">🌙</span>
          </button>
        </header>

        <button @click="toggleTheme"
          class="flex min-[376px]:hidden ml-auto mb-5 p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 hover:scale-110 active:scale-95 transition-all outline-none"
          :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
          <span v-if="isDark" class="text-xl">☀️</span>
          <span v-else class="text-xl">🌙</span>
        </button>

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
            <div class="max-w-[300px]">
              <WordleTitle text="5 Letter Word Indo Finder" />
            </div>
            <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Asisten cerdas untuk memenangkan permainan Wordle Inggris & Indonesia (Katla). Temukan kata yang tepat
              dalam hitungan
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
                <NuxtLink to="/wordle-solver"
                  class="text-sm text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-pointer">
                  Wordle Solver (EN)</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/katla-indonesia-solver"
                  class="text-sm text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-pointer">
                  Katla Indonesia Solver</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/katla-id-solver"
                  class="text-sm text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-pointer">
                  Katla Solver</NuxtLink>
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
          <p class="text-sm font-bold text-slate-400 dark:text-slate-500">
            &copy; {{ new Date().getFullYear() }} Word Indo Finder. Crafted with ❤️ by Dawam AF.
          </p>
          <div class="flex items-center gap-2 opacity-80">
            <span class="text-[10px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500">Built
              with</span>
            <div
              class="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
              <img src="/favicon.ico" class="w-4 h-4" alt="Nuxt Logo" />
              <span class="text-xs font-black text-slate-700 dark:text-slate-300">Nuxt</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pageTitle = computed(() => {
  if (route.path === '/wordle-solver') {
    return 'Wordle Solver'
  }
  if (route.path === '/katla-indonesia-solver') {
    return 'Katla Indonesia Solver'
  }
  if (route.path === '/katla-id-solver') {
    return 'KatlaID Solver'
  }
  return '5 Letter Word Indo Finder'
})

const homeLink = computed(() => {
  if (route.path === '/wordle-solver') {
    return '/wordle-solver'
  }
  if (route.path === '/katla-indonesia-solver') {
    return '/katla-indonesia-solver'
  }
  if (route.path === '/katla-id-solver') {
    return '/katla-id-solver'
  }
  return '/'
})

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