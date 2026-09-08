import { ArrowUpRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/portfolio'

export function Hero() {
  return (
    <section className="py-16">
      <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-3 text-sm font-medium text-muted-foreground">{profile.role}</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{profile.name}</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href={`mailto:${profile.email}`}>Get in touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={profile.socials.github} target="_blank" rel="noopener">
                GitHub <ArrowUpRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={profile.cv} download>
                <Download className="mr-2 size-4" /> Download CV
              </a>
            </Button>
          </div>
        </div>
        <img
          src={profile.avatar}
          alt={profile.name}
          className="size-28 shrink-0 rounded-full border border-border object-cover sm:size-36"
        />
      </div>
    </section>
  )
}
