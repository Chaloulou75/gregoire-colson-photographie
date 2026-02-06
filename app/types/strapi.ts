export interface StrapiMedia {
  id: number
  url: string
  alternativeText: string | null
  width: number
  height: number
  formats?: {
    thumbnail?: StrapiMediaFormat
    small?: StrapiMediaFormat
    medium?: StrapiMediaFormat
    large?: StrapiMediaFormat
  }
}

export interface StrapiMediaFormat {
  url: string
  width: number
  height: number
}

export interface StrapiProject {
  id: number
  documentId: string
  title: string
  slug: string
  description: string
  category: 'Portrait' | 'Paysage' | 'Architecture' | 'Reportage' | 'Mariage'
  date: string
  featured: boolean
  order: number
  coverImage: StrapiMedia
  images: StrapiMedia[]
}

export interface StrapiAbout {
  title: string
  biography: string
  portrait: StrapiMedia
  skills: string[]
}

export interface StrapiHomePage {
  heroTitle: string
  heroSubtitle: string
  heroImage: StrapiMedia
  introText: string
  featuredProjects: StrapiProject[]
}

export interface StrapiSiteSettings {
  siteName: string
  seoDescription: string
  socialLinks: {
    instagram?: string
    linkedin?: string
  }
  contactEmail: string
}

export interface StrapiResponse<T> {
  data: T
  meta: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}
