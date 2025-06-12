import type { RouteLocationRaw } from '#vue-router'

export type Category = {
  slug: string
  items: Category[]
}

export type Urls = Record<string, RouteLocationRaw>