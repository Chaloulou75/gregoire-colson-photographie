import type { StrapiProject } from '~/types/strapi'
import { projects as staticProjects, type Project } from '~/data/projects'

export function useProjects() {
  const config = useRuntimeConfig()
  const strapiConfigured = Boolean(config.strapi?.url)

  async function fetchProjects(category?: string): Promise<Project[]> {
    if (!strapiConfigured) return filterByCategory(staticProjects, category)

    const { find } = useStrapi()
    const params: Record<string, unknown> = {
      populate: '*',
      sort: 'order:asc',
    }
    if (category && category !== 'Tout') {
      params.filters = { category: { $eq: category } }
    }

    const { data } = await find<StrapiProject>('projects', params)
    return data.map(mapStrapiProject)
  }

  async function fetchProjectBySlug(slug: string): Promise<Project | null> {
    if (!strapiConfigured) return staticProjects.find(p => p.slug === slug) ?? null

    const { find } = useStrapi()
    const { data } = await find<StrapiProject>('projects', {
      filters: { slug: { $eq: slug } },
      populate: '*',
    })
    return data[0] ? mapStrapiProject(data[0]) : null
  }

  async function fetchFeaturedProjects(): Promise<Project[]> {
    if (!strapiConfigured) return staticProjects.filter(p => p.featured)

    const { find } = useStrapi()
    const { data } = await find<StrapiProject>('projects', {
      filters: { featured: { $eq: true } },
      populate: '*',
      sort: 'order:asc',
    })
    return data.map(mapStrapiProject)
  }

  return { fetchProjects, fetchProjectBySlug, fetchFeaturedProjects }
}

function filterByCategory(projects: Project[], category?: string): Project[] {
  if (!category || category === 'Tout') return projects
  return projects.filter(p => p.category === category)
}

function mapStrapiProject(sp: StrapiProject): Project {
  const config = useRuntimeConfig()
  const baseURL = config.strapi?.url as string || ''

  return {
    id: sp.id,
    title: sp.title,
    slug: sp.slug,
    description: sp.description,
    category: sp.category,
    date: sp.date,
    featured: sp.featured,
    coverImage: sp.coverImage?.url?.startsWith('http')
      ? sp.coverImage.url
      : `${baseURL}${sp.coverImage?.url}`,
    images: (sp.images || []).map(img =>
      img.url?.startsWith('http') ? img.url : `${baseURL}${img.url}`,
    ),
  }
}
