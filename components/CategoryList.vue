<script setup lang="ts">
import categories from '~/categories.json'
import { CategoryTree } from "#components"
import { createUrls } from '~/utils/createUrls'
import { provide } from 'vue'
import { URLS_INJECTION_KEY } from '~/injectionKeys'

provide(URLS_INJECTION_KEY, createUrls(categories))
</script>

<template>
  <div>
    <CategoryTree :categories="categories" />
  </div>
</template>