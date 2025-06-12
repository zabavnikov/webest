<script setup lang="ts">
import filters from '~/filters.json'
import { useFilter } from '~/composables/useFilter'

const { appliedFilters, applyFilter } = useFilter()
</script>

<template>
  <div>
    {{ appliedFilters }}
    <ul>
      <li v-for="filter in filters">
        <button type="button" @click="applyFilter(filter)">{{ filter }}</button>
      </li>
    </ul>
  </div>
</template>