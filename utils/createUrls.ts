import type { Category, Urls } from '~/types'

export function createUrls(categories: Category[]): Urls {
  let urls: Urls = {}

  function loop(categories: Category[], prefix?: string) {
    for (const category of categories) {
      if (! (category.slug in urls)) {
        urls[category.slug] = ''
      }

      if (prefix) {
        urls[category.slug] += `${prefix}`
      } else {
        urls[category.slug] = '/catalog'
      }

      urls[category.slug] += `/${category.slug}`

      if (category.items) {
        loop(category.items, urls[category.slug])
      }
    }
  }

  loop(categories)

  return urls
}