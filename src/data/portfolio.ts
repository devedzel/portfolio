import type { Profile, Project, Post, Experience } from '@/types'

export const profile: Profile = {
    name: 'Edzel Dacanay',
    role: 'Full-Stack Developer',
    tagline: 'I build fast, accessible web applications with Laravel, Vue, React, and a sharp eye for detail.',
    email: 'dev.edzeldacanay@gmail.com',
    avatar: '/avatar.jpeg',
    socials: {
        github: 'https://github.com/devedzel',
        linkedin: 'https://www.linkedin.com/in/edzel-dacanay-aa82a2264',
    },
    cv: '/edzel-dacanay-cv.pdf',
};

export const about =
    "I'm a full-stack developer focused on the frontend, currently working on Toyota Philippines' digital properties. I care about clean, maintainable code and interfaces that feel effortless to use.";

export const skills = [
  { name: 'Laravel', icon: 'SiLaravel' },
  { name: 'PHP', icon: 'SiPhp' },
  { name: 'Vue.js', icon: 'SiVuedotjs' },
  { name: 'React', icon: 'SiReact' },
  { name: 'JavaScript', icon: 'SiJavascript' },
  { name: 'TypeScript', icon: 'SiTypescript' },
  { name: 'Go', icon: 'SiGo' },
  { name: 'Spring Boot', icon: 'SiSpringboot' },
  { name: 'WordPress', icon: 'SiWordpress' },
  { name: 'Debian', icon: 'SiDebian' },
  { name: 'Vite', icon: 'SiVite' },
  { name: 'MySQL', icon: 'SiMysql' },
] as const

export const tools = [
  { name: 'VS Code', icon: 'Code2', lib: 'lucide' },
  { name: 'JetBrains', icon: 'SiJetbrains' },
  { name: 'Debian', icon: 'SiDebian' },
  { name: 'Docker', icon: 'SiDocker' },
  { name: 'Git', icon: 'SiGit' },
  { name: 'Claude Code', icon: 'SiClaude' },
] as const

export const projects: Project[] = [
    {
        title: 'Toyota PH Portal',
        description:
            'Unified web portal for Toyota Motor Philippines. Full-stack feature and bug work across a large Laravel + Vue codebase.',
        tags: ['Laravel', 'Vue 3', 'SCSS'],
        link: '#',
    },
    {
        title: 'Project Two',
        description:
            'A short description of what this project does and the problem it solves. Swap this out for something real.',
        tags: ['React', 'Vite', 'Tailwind'],
        link: '#',
    },
    {
        title: 'Project Three',
        description:
            'Another placeholder project. Describe the stack, your role, and the outcome in a sentence or two.',
        tags: ['TypeScript', 'API'],
        link: '#',
    },
];

export const posts: Post[] = [
    {
        title: 'Running Vite inside DDEV',
        date: '2026-09-01',
        excerpt: 'How I set up a containerized frontend dev environment with DDEV and Vite.',
        link: '#',
    },
    {
        title: 'Why I still reach for Blade',
        date: '2026-08-15',
        excerpt: 'Server-rendered templates are not dead. A few cases where Blade beats a SPA.',
        link: '#',
    },
];

export const experiences: Experience[] = [
  {
    role: 'Web Developer',
    company: 'SVEN - The Digital 1st Agency',
    type: 'Full-time',
    period: 'May 2026 - Present',
    location: 'Quezon City, Philippines · Remote',
  },
  {
    role: 'Back-end Developer',
    company: 'Pisopay.com Inc.',
    type: 'Full-time',
    period: 'Jun 2023 - May 2026 · 3 yrs',
    location: 'Makati City, Philippines · On-site',
  },
  {
    role: 'Web Developer',
    company: 'Sharp Philippines',
    type: 'Internship',
    period: 'Feb 2023 - Mar 2023 · 2 mos',
    location: 'Muntinlupa City, Philippines · On-site',
  },
]

// export const navSections = ['about', 'skills', 'projects', 'writing', 'contact'] as const;
export const navSections = ['skills', 'experience', 'contact'] as const;
