<template>
  <div class="max-w-4xl mx-auto w-full bg-white mb-6 shadow-sm">
    <WordsListHeader @search="(query) => handleSearch(query)" />

    <WordsList :items="words" @delete="(id: number) => handleRemoveWord(id)" :query="searchQuery" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WordsListHeader from '@/components/WordsListHeader.vue'
import WordsList from '@/components/WordsList.vue'

interface Word {
  id: number
  text: string
}
const searchQuery = ref('')
const initialWords = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  text: `Word ${i + 1}`,
}))

const words = ref<Word[]>(initialWords)

const handleSearch = (query: string) => {
  searchQuery.value = query
}

const handleRemoveWord = (id: number) => {
  words.value = words.value.filter((word) => word.id !== id)
}
</script>

<style scoped></style>
