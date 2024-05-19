<script setup lang="ts">
import { ref, computed } from 'vue'
import { nanoid } from 'nanoid'

interface ErrorData {
  [key: string]: string[] | string | null;
}

interface Props {
  id?: string;
  type?: string;
  errors?: ErrorData | null;
  label?: string | null;
  help?: string | null;
  symbol?: string | null;
  placeholder?: string;
  modelValue?: string | number | null;
}

const props = withDefaults(defineProps<Props>(), {
  id: `text-input-${nanoid()}`,
  type: 'text',
  errors: null,
  label: null,
  help: null,
  symbol: null,
  placeholder: '',
  modelValue: null,
})


const emit = defineEmits<{(e: 'update:modelValue', value: string | number | null): void}>()

const input = ref<HTMLInputElement | null>(null)

// const focus = () => {
//   input.value?.focus()
// }
// const select = () => {
//   input.value?.select()
// }

const isRequired = computed(() => 'required' in props)
</script>

<template>
  <div :class="[$attrs.class, {'mb-2': label}]">
    <div class="flex items-center justify-between">
      <label v-if="label" class="block text-sm font-medium leading-6 text-gray-900" :class="{'text-red-600' : errors}" :for="id">{{ label }}:<span class="text-red-600 font-bold">{{ isRequired ? '*' : '' }}</span></label>
      <div class="text-sm">
        <slot name="append" />
      </div>      
              
    </div>
    <div class="mt-2 relative">
        <input :id="id" ref="input" v-bind="{ ...$attrs, class: null }" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 disabled:opacity-60  outline-nonedisabled:cursor-not-allowed" :class="{ 'ring-red-600 placeholder:text-red-600' : errors }" :type="type" :value="modelValue" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" :placeholder="placeholder"/>
        <div class="absolute flex pl-4 pointer-events-none text-gray-400/90 dark:text-slate-500 top-[9px]" v-if="symbol" >
            <div class="opacity-0">{{ modelValue || placeholder }}</div>
            {{ symbol }}
        </div>
    </div>
    <small class="text-slate-600 dark:text-slate-400/70" v-if="help">{{ help }}</small>
    <div v-if="errors" class="text-sm text-red-600">
      <span v-if="Array.isArray(errors)">
        {{ errors.join(', ') }}
      </span>
      <span v-else>
        {{ errors }}
      </span>
    </div>
  </div>
</template>



