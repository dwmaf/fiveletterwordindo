<template>
  <div class="max-w-md mx-auto py-12 md:px-4">
    <div
      class="bg-white dark:bg-slate-900 rounded-4xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-800">
      <div class="text-center mb-10">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-50 dark:bg-teal-900/30 mb-4">
          <span class="text-3xl">🔐</span>
        </div>
        <h1
          class="text-3xl font-black bg-linear-to-r from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
          Admin Login
        </h1>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-2">Masuk untuk mengelola database kata</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
          <input v-model="email" type="email" placeholder="admin@example.com" required
            class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-teal-500 outline-none transition-all text-slate-900 dark:text-white" />
        </div>

        <div>
          <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Password</label>
          <input v-model="password" type="password" placeholder="••••••••" required
            class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-teal-500 outline-none transition-all text-slate-900 dark:text-white" />
        </div>

        <div v-if="errorMsg"
          class="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 text-red-600 dark:text-red-400 text-sm font-medium text-center">
          {{ errorMsg }}
        </div>

        <button type="submit" :disabled="loading"
          class="w-full py-4 bg-teal-600 dark:bg-teal-500 text-white rounded-xl font-bold hover:bg-teal-700 dark:hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group">
          <span v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          <span>{{ loading ? 'Authenticating...' : 'Sign In' }}</span>
          <span v-if="!loading" class="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </form>

      <div class="mt-8 text-center">
        <NuxtLink to="/" class="text-xs font-bold text-slate-400 hover:text-teal-500 transition-colors uppercase tracking-widest">
          ← Back to Tool
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
  middleware: [
    function (to, from) {
      const user = useSupabaseUser()

      if (user.value) {
        return navigateTo('/add-word')
      }
    },
  ],
})

const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')
const errorMsg = ref('')
const loading = ref(false)

const handleLogin = async () => {
  loading.value = true
  errorMsg.value = ''
  
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })
    
    if (error) {
      errorMsg.value = error.message
    } else {
      navigateTo('/add-word')
    }
  } catch (err) {
    errorMsg.value = 'Terjadi kesalahan sistem.'
  } finally {
    loading.value = false
  }
}

useHead({
  title: 'Admin Login - Word Indo Finder',
})
</script>