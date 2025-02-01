<template>
  <main class="pt-6 pb-6 px-6 border border-gray border-t-0 rounded-b-xl">
    <ul class="space-y-2">
      <div v-if="loading" class="flex justify-center">
        <img :src="LoadingIcon" alt="" class="w-[40px]" />
      </div>
      <template v-else>
        <RecycleScroller
          v-if="filteredWords.length"
          :items="filteredWords"
          :item-size="64"
          key-field="id"
          class="h-[650px] overflow-y-auto"
        >
          <template #default="{ item }">
            <li
              class="flex justify-between items-center bg-white px-4 py-3 rounded-lg border border-gray mb-2"
            >
              <span class="text-grayDark-900 capitalize">{{ item.title }}</span>
              <button
                @click="() => emit('remove', item.id)"
                class="text-red-500 hover:text-red-700 transition-colors"
              >
                <IconifyIcon icon="pajamas:remove" />
              </button>
            </li>
          </template>
        </RecycleScroller>
        <div v-if="!filteredWords.length">
          <span>No results</span>
        </div>
      </template>
    </ul>
  </main>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { RecycleScroller } from 'vue-virtual-scroller'
import IconifyIcon from './icons/IconifyIcon.vue'
import type { Word } from '@/types/Word'
import LoadingIcon from '@/assets/images/icons/loading.svg'

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
  loading: {
    type: Boolean,
    default: false,
  },
})

const filteredWords = computed(() => {
  const query = props.query.toLowerCase()
  return props.items.filter((word) => word.title.toLowerCase().includes(query))
})
</script>

<style scoped></style>
