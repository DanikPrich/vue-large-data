<template>
  <input
    :value="modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    placeholder="Search.."
    v-bind="$attrs"
    class="flex-1 px-4 py-2 border border-gray rounded-lg focus:outline-none"
    :class="$attrs.class"
  />
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})
</script>
