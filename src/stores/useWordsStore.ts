import { ref } from 'vue'
import { defineStore } from 'pinia'

import { getWordsList, removeAllWords } from '@/api/api'
import type { IWord } from '@/types/Word'

export const useWordsStore = defineStore('words', () => {
  /* List of 10 000 words */
  const list = ref<IWord[]>([])
  /* Compact data structure for storage in Local Store - id's in array */
  const orders = ref<number[]>([])
  const listLoading = ref<boolean>(false)

  const getList = async () => {
    try {
      listLoading.value = true
      list.value = await getWordsList()
      setOrdersFromList(list.value)
    } catch (error) {
      console.error(error)
    } finally {
      listLoading.value = false
    }
  }

  const updateOrder = async (newList: IWord[]) => {
    /* Needs optimization */
    // list.value = await updateWordsOrder(newOrder)

    setOrdersFromList(newList)
    list.value = newList
  }

  const removeListFromDatabase = async () => {
    try {
      listLoading.value = true
      const response = await removeAllWords()
      console.log(response?.message)
      list.value = []
    } catch (error) {
      console.error(error)
    } finally {
      listLoading.value = false
    }
  }

  const setOrdersFromList = (newList: IWord[]) => {
    console.log(JSON.stringify(newList))
    orders.value = newList.map((word) => word.id)
    console.log(JSON.stringify(orders.value))
  }

  return { list, listLoading, orders, getList, updateOrder, removeListFromDatabase }
})
