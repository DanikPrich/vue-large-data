<template>
  <div class="max-w-3xl mx-auto w-full bg-white mb-6 shadow-sm">
    <WordsListHeader @search="(query) => handleSearch(query)" />

    <WordsList
      :items="wordsList"
      @remove="(id: number) => handleRemoveWord(id)"
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

const wordsStore = useWordsStore()
const { list: wordsList, listLoading: wordsListLoading } = storeToRefs(useWordsStore())

const searchQuery = ref('')

const handleSearch = (query: string) => {
  searchQuery.value = query
}

const handleRemoveWord = (id: number) => {
  console.log('remove word', id)
  wordsList.value = wordsList.value.filter((word) => word.id !== id)
}

onMounted(() => {
  wordsStore.getList()
})
</script>

<style scoped></style>
