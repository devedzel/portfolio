import { about } from '@/data/portfolio'

export function About() {
  return (
    <section id="about" className="py-16 scroll-mt-20">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight">About</h2>
      <p className="text-muted-foreground leading-relaxed">{about}</p>
    </section>
  )
}
