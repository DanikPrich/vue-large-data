import { ref } from 'vue'
import { defineStore } from 'pinia'

import { getTestData } from '@/api/api'
import type { Word } from '@/types/Word'

export const useWordsStore = defineStore('words', () => {
  const initialWords = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    text: `Word ${i + 1}`,
  }))

  const list = ref<Word[]>(initialWords)

  const getList = async () => {
    // list.value = await getTestData()
  }
  return { list, getList }
})
