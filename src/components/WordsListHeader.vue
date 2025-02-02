<template>
  <header class="w-full sticky top-0 bg-white z-10 pt-5">
    <div class="px-4 py-4 sm:px-6 lg:px-6 rounded-t-xl border border-gray">
      <div class="flex gap-4">
        <SearchInput v-model="searchQuery" />
        <button
          class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary transition-colors"
        >
          Add word
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import SearchInput from './SearchInput.vue'
import debounce from 'lodash/debounce'
const searchQuery = ref('')

const emit = defineEmits(['search'])

const debouncedSearch = debounce(() => {
  emit('search', searchQuery.value)
}, 200)

watch(
  () => searchQuery.value,
  () => {
    debouncedSearch()
  },
)
</script>

<style scoped></style>
