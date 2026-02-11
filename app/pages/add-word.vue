<template>
  <div class="max-w-6xl mx-auto py-8 px-4">
    <!-- Header Dashboard -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
      <div>
        <h1
          class="text-3xl font-black bg-linear-to-r from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        <p class="text-slate-500 dark:text-slate-400 mt-1 text-sm font-medium">
          Kelola database jawaban harian Wordle/Katla.
        </p>
      </div>
      <button @click="handleLogout"
        class="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-all flex items-center justify-center gap-2 self-end md:self-auto">
        <span>Logout</span>
        <span class="text-lg">➔</span>
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
      <div
        class="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
        <div class="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-2xl">📅
        </div>
        <div>
          <p class="text-xs font-bold uppercase tracking-wider text-slate-400">Update Terakhir</p>
          <p class="text-slate-900 dark:text-white font-black">{{ latestDateFormatted }}</p>
        </div>
      </div>
      <div :class="[
        'p-6 rounded-3xl border flex items-center gap-4 transition-colors',
        daysLag > 0
          ? 'bg-amber-50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-800/50'
          : 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800/50'
      ]">
        <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl">
          {{ daysLag > 0 ? '⚠️' : '✅' }}
        </div>
        <div>
          <p class="text-xs font-bold uppercase tracking-wider text-slate-400">Status Database</p>
          <p v-if="daysLag > 0" class="text-amber-700 dark:text-amber-400 font-black">
            Ketinggalan {{ daysLag }} kata
          </p>
          <p v-else class="text-emerald-700 dark:text-emerald-400 font-black">
            Database Terupdate
          </p>
        </div>
      </div>
    </div>

    <div v-if="daysLag > 0"
      class="mb-10 bg-white dark:bg-slate-900 rounded-4xl p-8 shadow-xl border border-dashed border-teal-500/50">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <span class="text-xl">💡</span> Solusi NYT Wordle yang Tersedia
        </h3>
        <button @click="fetchMissingAnswers" v-if="missingAnswers.length === 0"
          class="text-sm font-bold text-teal-500 hover:underline">
          Muat Saran Jawaban
        </button>
      </div>

      <div v-if="isFetching" class="flex justify-center py-4">
        <div class="w-6 h-6 border-2 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="item in missingAnswers" :key="item.date"
          class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between group">
          <div>
            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{{ item.formattedDate }}</p>
            <p class="text-xl font-mono font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest">{{
              item.word }}</p>
          </div>
          <button @click="copyToClipboard(item.word)"
            class="p-2.5 rounded-xl bg-white dark:bg-slate-700 shadow-sm border border-slate-200 dark:border-slate-600 hover:bg-teal-500 hover:text-white transition-all active:scale-90">
            📋
          </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <!-- Section Form (Kanan di Desktop) -->
      <div class="lg:order-2 space-y-6">
        <div
          class="bg-white dark:bg-slate-900 rounded-4xl p-8 shadow-xl border border-slate-200 dark:border-slate-800 sticky top-8">
          <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
            <span class="w-2 h-6 bg-teal-500 rounded-full"></span>
            Tambah Data
          </h2>

          <form @submit.prevent="addData" class="space-y-5">
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 ml-1">Word</label>
              <input v-model="newWord" type="text" placeholder="arose" maxlength="5" required
                class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-teal-500 outline-none transition-all text-slate-900 dark:text-white font-mono uppercase tracking-widest" />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 ml-1">Tanggal</label>
              <input v-model="newDate" type="date" required
                class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-teal-500 outline-none transition-all text-slate-900 dark:text-white" />
            </div>

            <button type="submit" :disabled="inserting"
              class="w-full py-4 bg-teal-600 dark:bg-teal-500 text-white rounded-xl font-bold hover:bg-teal-700 dark:hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/20 disabled:opacity-50 flex items-center justify-center gap-2 group">
              <span v-if="inserting"
                class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              <span>{{ inserting ? 'Menyimpan...' : 'Simpan Kata' }}</span>
              <span v-if="!inserting" class="group-hover:scale-125 transition-transform">✨</span>
            </button>
          </form>
        </div>
      </div>

      <!-- Section Table (Kiri di Desktop) -->
      <div class="lg:order-1 lg:col-span-2">
        <div
          class="bg-white dark:bg-slate-900 rounded-4xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div class="p-8 border-b border-slate-100 dark:border-slate-800">
            <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">Riwayat Kata</h2>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr
                  class="bg-slate-50 dark:bg-slate-800/50 text-slate-400 text-xs font-bold uppercase tracking-widest text-center">

                  <th class="px-8 py-4 text-left">Word</th>
                  <th class="px-8 py-4 text-left">Date</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                <tr v-for="item in wordsData" :key="item.id"
                  class="hover:bg-slate-50 dark:hover:bg-teal-900/10 transition-colors">

                  <td
                    class="px-8 py-4 font-mono font-bold text-lg text-slate-700 dark:text-slate-200 uppercase tracking-widest">
                    {{ item.word }}
                  </td>
                  <td class="px-8 py-4 text-slate-500 dark:text-slate-400 font-medium">
                    {{ new Date(item.date).toLocaleDateString('id-ID', {
                      day: 'numeric', month: 'short', year: 'numeric'
                    }) }}
                  </td>
                </tr>
                <tr v-if="!wordsData?.length">
                  <td colspan="3" class="px-8 py-12 text-center text-slate-400">
                    Belum ada data tersedia.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
  middleware: 'auth'
})

const supabase = useSupabaseClient()

const newWord = ref('')
const newDate = ref('')
const inserting = ref(false)
const isFetching = ref(false)
const missingAnswers = ref([])

const { data: wordsData, refresh } = await useAsyncData('words', async () => {
  const { data } = await supabase.from('past-answers').select('*').order('date', { ascending: false }).limit(5)
  return data
})

const daysLag = computed(() => {
  if (!wordsData.value || wordsData.value.length === 0) return 0

  const latestDbDate = new Date(wordsData.value[0].date)
  latestDbDate.setHours(0, 0, 0, 0)

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  yesterday.setHours(0, 0, 0, 0)

  const diffTime = yesterday - latestDbDate
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  return diffDays > 0 ? diffDays : 0
})

const latestDateFormatted = computed(() => {
  if (!wordsData.value?.[0]) return '-'
  return new Date(wordsData.value[0].date).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric'
  })
})

const fetchMissingAnswers = async () => {
  if (!wordsData.value?.[0]) return

  isFetching.value = true
  missingAnswers.value = []

  const latestDbDate = new Date(wordsData.value[0].date)
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)

  let currentDate = new Date(latestDbDate)
  currentDate.setDate(currentDate.getDate() + 1)

  while (currentDate <= yesterday) {
    const dateStr = currentDate.toISOString().split('T')[0]
    try {
      const data = await $fetch(`/api/wordle`, {
        params: { date: dateStr }
      })
      if (data && data.solution) {
        missingAnswers.value.push({
          date: dateStr,
          formattedDate: currentDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }),
          word: data.solution
        })
      }
    } catch (err) {
      console.error(`Failed to fetch for ${dateStr}`)
    }
    currentDate.setDate(currentDate.getDate() + 1)
  }
  isFetching.value = false
}

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
  
}

const addData = async () => {
  if (newWord.value.length !== 5) {
    alert('Kata harus 5 huruf')
    return
  }

  inserting.value = true
  const { error } = await supabase.from('past-answers').insert([
    { word: newWord.value.toLowerCase(), date: newDate.value }
  ])

  if (!error) {
    newWord.value = ''
    newDate.value = ''
    refresh()
  } else {
    alert(error.message)
  }
  inserting.value = false
}

const handleLogout = async () => {
  await supabase.auth.signOut()
  navigateTo('/login')
}

useHead({
  title: 'Admin Dashboard - Word Indo Finder',
})
</script>