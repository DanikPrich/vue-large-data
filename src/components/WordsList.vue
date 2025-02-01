<template>
  <main class="pt-6 pb-6 px-6 border border-gray border-t-0 rounded-b-xl">
    <ul class="space-y-2">
      <li
        v-for="word in filteredWords"
        :key="word.id"
        class="flex justify-between items-center bg-white px-4 py-3 rounded-lg border border-gray"
      >
        <span class="text-grayDark-900">{{ word.text }}</span>
        <button
          @click="() => emit('remove', word.id)"
          class="text-red-500 hover:text-red-700 transition-colors"
        >
          <IconifyIcon icon="pajamas:remove" />
        </button>
      </li>
      <div v-if="!filteredWords.length">
        <span>No results</span>
      </div>
    </ul>
  </main>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import IconifyIcon from './icons/IconifyIcon.vue'
import type { Word } from '@/types/Word'

const emit = defineEmits(['remove'])
const props = defineProps({
  items: {
    type: Array as PropType<Word[]>,
    default: () => [],
  },
  query: {
    type: String,
    default: '',
  },
})

const filteredWords = computed(() => {
  const query = props.query.toLowerCase()
  return props.items.filter((word) => word.text.toLowerCase().includes(query))
})
</script>

<style scoped></style>
