<script setup lang="ts">
import { useIsRootCategory } from '~/composables/useIsRootCategory'

const isRootCategory = useIsRootCategory()
</script>

<template>
  <h2>Компонент категории</h2>
  <NuxtPage v-if="!isRootCategory" />
</template>