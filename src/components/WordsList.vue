<template>
  <main class="pt-6 pb-6 px-6 border border-gray border-t-0 rounded-b-xl">
    <ul class="space-y-2">
      <div v-if="loading" class="flex justify-center">
        <img :src="LoadingIcon" alt="" class="w-[40px]" />
      </div>
      <template v-else>
        <VirtualList
          v-if="!!filteredWords.length"
          v-model="filteredWords"
          :dataKey="'id'"
          :handle="'.draggable-handle'"
          style="height: 650px"
        >
          <template #item="{ record }">
            <li
              class="flex justify-between items-center bg-white px-4 py-3 rounded-lg border border-gray mb-2"
            >
              <div class="flex gap-4 items-center">
                <IconifyIcon
                  icon="si:drag-handle-line"
                  class="draggable-handle text-2xl text-gray-dark/70 cursor-grab active:cursor-grabbing select-none"
                />
                <span class="text-grayDark-900 capitalize">{{ record.title }}</span>
              </div>
              <button
                @click="() => emit('remove', record.id)"
                class="text-red-500 hover:text-red-700 transition-colors"
              >
                <IconifyIcon icon="pajamas:remove" />
              </button>
            </li>
          </template>
        </VirtualList>
        <div v-else>
          <span>No results</span>
        </div>
      </template>
    </ul>
  </main>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import VirtualList from 'vue-virtual-draglist'
import IconifyIcon from './icons/IconifyIcon.vue'
import type { Word } from '@/types/Word'
import LoadingIcon from '@/assets/images/icons/loading.svg'

const emit = defineEmits(['remove', 'update-order'])
const props = defineProps({
  items: {
    type: Array as PropType<Word[]>,
    default: () => [],
  },
  query: {
    type: String,
    default: '',
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

const filteredWords = computed({
  get: () => {
    const query = props.query.toLowerCase()
    return props.items.filter((word) => word.title.toLowerCase().includes(query))
  },
  set: (value) => {
    emit('update-order', value)
  },
})
</script>

<style scoped></style>
