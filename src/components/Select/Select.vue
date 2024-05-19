<template>
  <label v-if="label" :for="id" class="block text-sm font-medium leading-6 text-gray-900" :class="{'text-red-600': errors}">
    {{ label }}:
  </label>
  <div class="relative" ref="selectWrapper">
    <div class="absolute text-sm top-2 left-0 flex items-center pl-3 pointer-events-none">
      {{ searchTerm ? '' : selectedLabel }}
    </div>
    <input
      type="text"
      :id="id"
      v-model="searchTerm"
      @click="openDropdown"
      @focus="openDropdown"
      @keydown.tab="closeDropdown"
      @keydown.esc="closeDropdown"
      @keydown.arrow-down.prevent="selectNextOption"
      @keydown.arrow-up.prevent="selectPreviousOption"
      @keydown.enter.prevent="selectHighlightedOption"
      @input="filterOptions"
      :placeholder="selectedLabel ? '' : placeholder"
      class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 disabled:opacity-60 disabled:cursor-not-allowed"
      :class="{ 'ring-red-600 placeholder:text-red-600': errors }"
    />
    <div
      ref="dropdown"
      v-show="isOpen"
      class="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg"
      :class="dropdownPositionClass"
    >
      <ul class="max-h-60 overflow-auto" v-if="optionsFiltered.length > 0">
        <li
          v-for="(option, index) in optionsFiltered"
          :key="index"
          @click="selectOption(option)"
          @mouseenter="highlightedIndex = index"
          :class="{ 'bg-gray-100': index === highlightedIndex }"
          class="px-3 py-2 cursor-pointer hover:bg-gray-100 sm:text-sm"
        >
          {{ option[labelKey] }}
        </li>
      </ul>
      <div v-else class="px-3 py-2">Нет вариантов</div>
    </div>
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

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits, onMounted, onUnmounted } from 'vue';
import { nanoid } from 'nanoid';

interface Option {
  [key: string]: any;
}

interface ErrorData {
  [key: string | number]: string[] | string | null;
}

interface Props {
  id: string;
  label: string | null;
  options: Option[];
  placeholder: string;
  valueKey: string;
  labelKey: string;
  errors?: ErrorData | null;
  modelValue?: any;
}

const props = withDefaults(defineProps<Props>(), {
  id: `select-${nanoid()}`,
  label: null,
  valueKey: 'id',
  labelKey: 'label',
  placeholder: 'Выберите значение',
  errors: null,
  modelValue: null,
});

const emits = defineEmits(['update:modelValue']);

const searchTerm = ref('');
const selectedLabel = ref('');
const isOpen = ref(false);
const selectWrapper = ref<HTMLElement | null>(null);
const dropdown = ref<HTMLElement | null>(null);
const highlightedIndex = ref(-1);

// Открытие выпадающего списка при фильтрации
const filterOptions = () => {
  isOpen.value = true;
};

// Открытие выпадающего списка
const openDropdown = () => {
  isOpen.value = true;
};

// Закрытие выпадающего списка
const closeDropdown = () => {
  isOpen.value = false;
  searchTerm.value = '';
};

// Функция для выбора опции
const selectOption = (option: Option) => {
  searchTerm.value = '';
  selectedLabel.value = option[props.labelKey];
  isOpen.value = false;
  emits('update:modelValue', option[props.valueKey]);
};

// Поиск в выпадающем списке
const optionsFiltered = computed(() => {
  if (!searchTerm.value) return props.options;
  return props.options.filter(option =>
    option[props.labelKey].toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

// Функция для выбора следующей/предыдущей опции
const selectNextOption = () => {
  if (highlightedIndex.value < optionsFiltered.value.length - 1) {
    highlightedIndex.value++;
  }
};

const selectPreviousOption = () => {
  if (highlightedIndex.value > 0) {
    highlightedIndex.value--;
  }
};

const selectHighlightedOption = () => {
  if (highlightedIndex.value >= 0 && highlightedIndex.value < optionsFiltered.value.length) {
    selectOption(optionsFiltered.value[highlightedIndex.value]);
  }
};

// Позиция выпадающего списка
const dropdownPositionClass = computed(() => {
  if (!isOpen.value) return '';
  const dropdownRect = dropdown.value?.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (dropdownRect && dropdownRect.bottom > windowHeight) {
    return 'bottom-0 transform translate-y-full';
  } else {
    return '';
  }
});

// Закрытие выпадающего списка при клике за его пределами
const closeDropdownOnClickOutside = (event: MouseEvent) => {
  if (!selectWrapper.value?.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeDropdownOnClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', closeDropdownOnClickOutside);
});
</script>
