import { computed } from 'vue'

/**
 * Composable untuk menyaring daftar kata berdasarkan input Wordle/Katla.
 * 
 * @param {Ref|Computed} wordsRef - Daftar kata dasar yang akan disaring.
 * @param {Object} filters - Object berisi ref green, yellow, dan gray.
 * @param {Object} options - Opsi tambahan (seperti exclude list).
 */
export const useWordFilter = (wordsRef, { green, yellow, gray }, options = {}) => {
    const filteredWords = computed(() => {        
        const baseList = wordsRef.value || []

        return baseList.filter(word => {
            const w = word.toLowerCase()

            for (let i = 0; i < 5; i++) {
                if (green.value[i] && w[i] !== green.value[i].toLowerCase()) return false
            }

            const yellowChars = yellow.value.toLowerCase().split('').filter(c => c.trim())
            if (!yellowChars.every(char => w.includes(char))) return false

            const grayChars = gray.value.toLowerCase().split('').filter(c => c.trim())
            if (grayChars.some(char => w.includes(char))) return false

            // 4. Filter Tambahan: Exclude List (Untuk Wordle Solver)
            // options.shouldExclude: ref boolean (e.g. excludePastAnswers)
            // options.excludeList: ref array (e.g. pastanswers)
            if (options.shouldExclude?.value && options.excludeList?.value?.includes(word)) {
                return false
            }

            return true
        })
    })

    return { filteredWords }
}
