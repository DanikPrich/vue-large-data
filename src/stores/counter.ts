import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useWordsStore = defineStore('words', () => {
  const list = ref<string[]>([])

  const getList = async () => {
    list.value = ['word', 'word2']
  }
  return { list, getList }
})
