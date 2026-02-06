import { defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async () => {
  const config = useRuntimeConfig()
  const strapiUrl = config.strapi?.url as string
  const strapiToken = config.strapi?.token as string

  if (!strapiUrl || !strapiToken) return []

  try {
    const res = await fetch(`${strapiUrl}/api/projects?fields[0]=slug&fields[1]=updatedAt`, {
      headers: { Authorization: `Bearer ${strapiToken}` },
    })
    const { data } = await res.json() as { data: { slug: string; updatedAt: string }[] }

    return data.map(project => ({
      loc: `/portfolio/${project.slug}`,
      lastmod: project.updatedAt,
    }))
  }
  catch {
    return []
  }
})
