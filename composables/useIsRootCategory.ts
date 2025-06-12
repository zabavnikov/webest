import { useRoute } from '#vue-router'

export function useIsRootCategory(): boolean {
  return computed(() => /(\/catalog\/category\/filter|\/catalog\/category$)/.test(useRoute().path))
}