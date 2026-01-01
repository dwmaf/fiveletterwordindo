<template>
    <div>
        <label class="block text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-4 ml-1">
            {{ label }}
        </label>
        <div class="flex gap-2 justify-center">
            <input v-for="i in 5" :key="i" :value="modelValue[i - 1]" ref="inputs" @input="handleInput(i - 1, $event)"
                @keydown.backspace="handleBackspace(i - 1, $event)" @mousedown="clearInput(i - 1)"
                @keyup.tab="clearInput(i - 1)"
                class="w-full aspect-square text-center text-xl font-black bg-slate-50 dark:bg-slate-800/50 border-2 border-emerald-500/30 dark:border-emerald-500/20 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none uppercase transition-all caret-transparent"
                type="text" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    modelValue: {
        type: Array,
        required: true,
        default: () => ['', '', '', '', '']
    },
    label: {
        type: String,
        default: 'Posisi Benar (Hijau)'
    }
})

const emit = defineEmits(['update:modelValue'])
const inputs = ref([])

const handleInput = (index, event) => {
    const val = event.target.value
    const newValue = [...props.modelValue]

    newValue[index] = val.slice(-1).toUpperCase()
    emit('update:modelValue', newValue)

    if (val && index < 4) {
        inputs.value[index + 1].focus()
    }
}

const handleBackspace = (index, event) => {
    if (!props.modelValue[index] && index > 0) {
        inputs.value[index - 1].focus()
    }
}

const clearInput = (index) => {
    const newValue = [...props.modelValue]
    newValue[index] = ''
    emit('update:modelValue', newValue)
}
</script>
