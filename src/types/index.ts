export interface Profile {
  name: string
  role: string
  tagline: string
  email: string
  avatar: string
  socials: {
    github: string
    linkedin: string
  },
  cv: string
}

export interface Project {
  title: string
  description: string
  tags: string[]
  link: string
}

export interface Post {
  title: string
  date: string
  excerpt: string
  link: string
}

export interface Experience {
  role: string
  company: string
  type: string
  period: string
  location: string
  highlights?: string[]
}
