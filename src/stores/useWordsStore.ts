import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getWordsList, removeAllWords } from '@/api/api'
import type { IWord } from '@/types/Word'
import { useStorage } from '@vueuse/core'
import sortByOrder from '@/helpers/sortByOrder'

export const useWordsStore = defineStore('words', () => {
  /* List of 10 000 words */
  const list = ref<IWord[]>([])
  const listLoading = ref<boolean>(false)

  /* Compact data structure for storage in Local Store - id's in array */
  const localStoreOrdersList = useStorage<string[]>('WordsOrders', [])

  const getList = async () => {
    try {
      listLoading.value = true
      const response = await getWordsList()
      if (!localStoreOrdersList.value.length) {
        list.value = response
        setOrdersFromList(list.value)
      } else list.value = sortByOrder(response, localStoreOrdersList.value)
    } catch (error) {
      console.error(error)
    } finally {
      listLoading.value = false
    }
  }

  const updateOrder = async (newList: IWord[]) => {
    /* Needs optimization to pushing to the Data base */
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
      localStoreOrdersList.value = []
    } catch (error) {
      console.error(error)
    } finally {
      listLoading.value = false
    }
  }

  const setOrdersFromList = (newList: IWord[]) => {
    localStoreOrdersList.value = newList.map((word) => word.id)

    /* ~860kB */
    // console.log(JSON.stringify(newList))
    /* ~180kB - 680kB less in LocalStorage */
    // console.log(JSON.stringify(orders.value))
  }

  return { list, listLoading, getList, updateOrder, removeListFromDatabase }
})
