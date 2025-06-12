<script setup lang="ts">
import type { Category, Urls } from '~/types'
import { URLS_INJECTION_KEY } from '~/injectionKeys'
import { inject } from 'vue'

defineOptions({
  name: 'CategoryTree'
})

const { categories } = defineProps<{
  categories: Category[]
}>()

const urls = inject<Urls>(URLS_INJECTION_KEY)
</script>

<template>
  <ul>
    <li v-for="category in categories" :key="category.slug">
      <NuxtLink :to="urls[category.slug]">
        {{ category.slug }}
      </NuxtLink>

      <CategoryTree
        v-if="category.items?.length > 0"
        :categories="category.items"
      />
    </li>
  </ul>
</template>