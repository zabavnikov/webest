import { reactive, watch } from 'vue'
import { useRouter } from '#vue-router'

export function useFilter() {
  const router = useRouter()
  const appliedFilters = reactive<Set<string>>(new Set())
  const pattern = /\/filter\/(.*)\/apply$/

  watch(router.currentRoute, async (value) => {
    if (getFiltersFromUrl(value.path).length === 0) {
      appliedFilters.clear()
    }
  })

  /**
   * Применяем фильтры.
   *
   * @param filter
   */
  function applyFilter(filter: string) {
    if (appliedFilters.has(filter)) {
      appliedFilters.delete(filter)
    } else {
      appliedFilters.add(filter)
    }

    let originalPath = router.currentRoute.value.path

    // Ищем отрезок с фильтрами.
    const match = pattern.exec(originalPath)

    // Если фильтры нашлись, то отрезаем их от УРЛ
    // и получаем чистый УРЛ без фильтров.
    if (match?.[0]) {
      originalPath = originalPath.replace(match[0], '')
    }

    // Заново переназначаем фильтры, если они есть.
    if (appliedFilters.size > 0) {
      router.push(`${originalPath}/filter/${[...appliedFilters].join('/')}/apply`)
    } else {
      router.push(originalPath)
    }
  }

  /**
   * Вычленяем фильтры из УРЛ.
   */
  function getFiltersFromUrl(url: string): string[] {
    const match = pattern.exec(url)

    if (match?.[1]) {
      return match[1].split('/')
    }

    return []
  }

  function initialization() {
    getFiltersFromUrl(router.currentRoute.value.path)
      .forEach((filter) => appliedFilters.add(filter))

    console.log('init')
  }

  initialization()

  return {
    appliedFilters,
    applyFilter,
  }
}