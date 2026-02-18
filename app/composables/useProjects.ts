import { projects as staticProjects, type Project } from '~/data/projects'

export function useProjects() {
  function fetchProjects(category?: string): Promise<Project[]> {
    if (!category || category === 'Tout') return Promise.resolve(staticProjects)
    return Promise.resolve(staticProjects.filter(p => p.category === category))
  }

  function fetchProjectBySlug(slug: string): Promise<Project | null> {
    return Promise.resolve(staticProjects.find(p => p.slug === slug) ?? null)
  }

  return { fetchProjects, fetchProjectBySlug }
}
