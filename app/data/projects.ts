export interface Project {
  id: number
  title: string
  slug: string
  description: string
  category: string
  date: string
  featured: boolean
  coverImage: string
  images: string[]
}

export const categories = [
  'Tout',
  'Portrait',
  'Paysage',
  'Architecture',
  'Reportage',
  'Mariage',
] as const

export const projects: Project[] = [
  {
    id: 1,
    title: 'Lumières d\'Automne',
    slug: 'lumieres-automne',
    description: 'Une série capturant les teintes dorées et la lumière rasante des forêts en automne. Chaque image explore le contraste entre l\'ombre et la lumière naturelle.',
    category: 'Paysage',
    date: '2024-10-15',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop',
    ],
  },
  {
    id: 2,
    title: 'Regards Croisés',
    slug: 'regards-croises',
    description: 'Portraits intimistes réalisés en lumière naturelle. Un travail sur l\'expression et la connexion entre le sujet et l\'objectif.',
    category: 'Portrait',
    date: '2024-09-20',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1100&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&h=800&fit=crop',
    ],
  },
  {
    id: 3,
    title: 'Géométries Urbaines',
    slug: 'geometries-urbaines',
    description: 'Exploration des lignes, des courbes et des volumes dans l\'architecture contemporaine. Un regard abstrait sur la ville.',
    category: 'Architecture',
    date: '2024-08-10',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=1000&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=1200&h=800&fit=crop',
    ],
  },
  {
    id: 4,
    title: 'Marie & Thomas',
    slug: 'marie-thomas',
    description: 'Un mariage intime dans un domaine provençal, baigné de lumière méditerranéenne.',
    category: 'Mariage',
    date: '2024-07-05',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&h=800&fit=crop',
    ],
  },
  {
    id: 5,
    title: 'Festival des Arts',
    slug: 'festival-des-arts',
    description: 'Reportage photographique du festival des arts vivants. Des moments de scène aux coulisses.',
    category: 'Reportage',
    date: '2024-06-18',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=1000&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&h=800&fit=crop',
    ],
  },
  {
    id: 6,
    title: 'Côte Sauvage',
    slug: 'cote-sauvage',
    description: 'Exploration des littoraux bretons, entre falaises escarpées et vagues déferlantes.',
    category: 'Paysage',
    date: '2024-05-12',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=1000&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&h=800&fit=crop',
    ],
  },
]
