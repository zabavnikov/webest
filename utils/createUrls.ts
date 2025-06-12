import type { Category, Urls } from '~/types'

export function createUrls(categories: Category[]): Urls {
  let urls: Urls = {}

  function loop(categories: Category[], prefix?: string) {
    for (const category of categories) {
      if (! (category.slug in urls)) {
        urls[category.slug] = ''
      }

      urls[category.slug] = !prefix
        ? '/catalog'
        : prefix

      urls[category.slug] += `/${category.slug}`

      if (category.items) {
        loop(category.items, urls[category.slug])
      }
    }
  }

  loop(categories)

  return urls
}