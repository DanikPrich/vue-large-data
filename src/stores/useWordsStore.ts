import { ref } from 'vue'
import { defineStore } from 'pinia'

import { getWordsList, removeAllWords, updateWordsOrder } from '@/api/api'
import type { Word } from '@/types/Word'

export const useWordsStore = defineStore('words', () => {
  const list = ref<Word[]>([])
  const listLoading = ref<boolean>(false)

  const getList = async () => {
    listLoading.value = true
    list.value = await getWordsList()
    listLoading.value = false
  }

  const updateOrder = async (newOrder: Word[]) => {
    updateWordsOrder(newOrder)
    list.value = newOrder
  }

  const removeListFromDatabase = async () => {
    list.value = await removeAllWords()
  }

  return { list, listLoading, getList, updateOrder, removeListFromDatabase }
})
