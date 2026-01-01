<template>
    <div id="input"
        class="w-full max-w-sm mx-auto md:max-w-none md:mx-0 md:w-[320px] shrink-0 bg-white dark:bg-slate-900 p-3 sm:p-6 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800">
        <slot name="action"></slot>

        <div class="space-y-8">
            <slot></slot>
        </div>
    </div>
</template>
