import { ref } from 'vue'
import { defineStore } from 'pinia'

import { getWordsList, removeAllWords } from '@/api/api'
import type { Word } from '@/types/Word'

export const useWordsStore = defineStore('words', () => {
  const list = ref<Word[]>([])
  const listLoading = ref<boolean>(false)

  const getList = async () => {
    listLoading.value = true
    list.value = await getWordsList()
    listLoading.value = false
  }

  const removeListFromDatabase = async () => {
    listLoading.value = true
    list.value = await removeAllWords()
    listLoading.value = false
  }
  return { list, listLoading, getList, removeListFromDatabase }
})
