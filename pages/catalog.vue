<script setup lang="ts">
import CategoryList from '~/components/CategoryList.vue'
import FilterList from '~/components/FilterList.vue'
</script>

<template>
  <div class="container">
    {{ $route.path }}

    <div class="grid">
      <div>
        <p>Категории:</p>
        <CategoryList />
      </div>
      <div>
        <p>Фильтры:</p>
        <FilterList />
      </div>
    </div>

    <h1>Компонент страницы каталога</h1>
    <NuxtPage />
  </div>
</template>

<style>
.container {
  max-width: 1024px;
  margin: auto;
}
.grid {
  display: grid;
  grid-template-columns: 50% 50%;
}
</style>