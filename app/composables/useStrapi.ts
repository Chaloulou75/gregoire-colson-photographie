import type { StrapiResponse } from '~/types/strapi'

export function useStrapi() {
  const config = useRuntimeConfig()
  const baseURL = config.strapi?.url as string || ''
  const token = config.strapi?.token as string || ''

  async function find<T>(
    contentType: string,
    params?: Record<string, unknown>,
  ): Promise<StrapiResponse<T[]>> {
    const query = params ? `?${new URLSearchParams(flattenParams(params)).toString()}` : ''
    return $fetch<StrapiResponse<T[]>>(`${baseURL}/api/${contentType}${query}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
  }

  async function findOne<T>(
    contentType: string,
    params?: Record<string, unknown>,
  ): Promise<StrapiResponse<T>> {
    const query = params ? `?${new URLSearchParams(flattenParams(params)).toString()}` : ''
    return $fetch<StrapiResponse<T>>(`${baseURL}/api/${contentType}${query}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
  }

  return { find, findOne }
}

function flattenParams(
  params: Record<string, unknown>,
  prefix = '',
): [string, string][] {
  const entries: [string, string][] = []
  for (const [key, value] of Object.entries(params)) {
    const fullKey = prefix ? `${prefix}[${key}]` : key
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      entries.push(...flattenParams(value as Record<string, unknown>, fullKey))
    }
    else {
      entries.push([fullKey, String(value)])
    }
  }
  return entries
}
