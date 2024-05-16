<script setup lang="ts">
  const props = withDefaults(
    defineProps<{  loading?: boolean }>(), {
      loading: false,
    })
</script>

<template>
  <div class="flex items-center justify-center">
    <button :disabled="props.loading"
      class="flex w-full justify-center rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 items-center transition ease-in-out duration-150"
      :class="{ 'inline-flex cursor-not-allowed': props.loading }"
      :aria-atomic="props.loading">
      <svg v-if="props.loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
      <span v-if="props.loading">Выполняется...</span>
      <slot v-else />
    </button>
  </div>
</template>

