import { ref } from 'vue'
import { defineStore } from 'pinia'

import { getTestData } from '@/api/api'
import type { Word } from '@/types/Word'

export const useWordsStore = defineStore('words', () => {
  const list = ref<Word[]>([])
  const listLoading = ref<boolean>(false)

  const getList = async () => {
    listLoading.value = true
    list.value = await getTestData()
    listLoading.value = false
  }
  return { list, listLoading, getList }
})
