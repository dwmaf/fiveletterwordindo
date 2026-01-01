<template>
    <div>
        <label :class="[
            'block text-sm font-bold mb-3 ml-1',
            color === 'amber' ? 'text-amber-600 dark:text-amber-400' : 'text-slate-500 dark:text-slate-400'
        ]">
            {{ label }}
        </label>
        <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder"
            :class="[
                'h-12 w-full p-4 bg-slate-50 dark:bg-slate-800/50 border-2 rounded-xl outline-none uppercase tracking-widest transition-all',
                color === 'amber'
                    ? 'border-amber-500/30 dark:border-amber-500/20 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20'
                    : 'border-slate-300 dark:border-slate-700 focus:border-slate-400 dark:focus:border-slate-500 focus:ring-4 focus:ring-slate-400/10'
            ]" />
    </div>
</template>

<script setup>
defineProps({
    modelValue: String,
    label: String,
    placeholder: String,
    color: {
        type: String,
        default: 'amber'
    }
})

defineEmits(['update:modelValue'])
</script>
