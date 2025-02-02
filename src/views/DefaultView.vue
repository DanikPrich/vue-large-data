<template>
  <div class="max-w-3xl mx-auto w-full bg-white mb-6 shadow-sm px-3">
    <div class="flex gap-3">
      <button
        class="px-4 py-2 mt-5 bg-red text-white rounded-lg transition-colors disabled:bg-gray"
        :disabled="!wordsList.length || wordsListLoading"
        @click="wordsStore.removeListFromDatabase"
      >
        Remove words from database
      </button>
      <button
        class="px-4 py-2 mt-5 bg-primary text-white rounded-lg transition-colors cursor-pointer disabled:bg-gray"
        :disabled="!!wordsList.length || wordsListLoading"
        @click="wordsStore.getList"
      >
        Get words
      </button>
    </div>
    <WordsListHeader @search="(query) => handleSearch(query)" />

    <WordsList
      :items="wordsList"
      @remove="(id: number) => handleRemoveWord(id)"
      @update-order="(newOrder) => handleUpdateOrder(newOrder)"
      :query="searchQuery"
      :loading="wordsListLoading"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import WordsListHeader from '@/components/WordsListHeader.vue'
import WordsList from '@/components/WordsList.vue'
import { useWordsStore } from '@/stores/useWordsStore'
import { storeToRefs } from 'pinia'
import type { IWord } from '@/types/Word'

const wordsStore = useWordsStore()
const { list: wordsList, listLoading: wordsListLoading } = storeToRefs(useWordsStore())

const searchQuery = ref('')

const handleSearch = (query: string) => {
  searchQuery.value = query
}

const handleRemoveWord = (id: number) => {
  wordsList.value = wordsList.value.filter((word) => word.id !== id)
}

const handleUpdateOrder = (newOrder: IWord[]) => {
  wordsStore.updateOrder(newOrder)
}

onMounted(() => {
  wordsStore.getList()
})
</script>

<style scoped></style>
