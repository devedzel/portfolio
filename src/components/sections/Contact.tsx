import { Mail, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/portfolio'

export function Contact() {
  return (
    <section id="contact" className="py-16 scroll-mt-20">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight">Get in touch</h2>
      <p className="mb-6 max-w-xl text-muted-foreground">
        Open to interesting projects and conversations. Reach out anytime.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <a href={`mailto:${profile.email}`}><Mail className="mr-2 size-4" /> Email me</a>
        </Button>
        <Button variant="outline" asChild>
          <a href={profile.socials.github} target="_blank" rel="noopener">
            GitHub <ArrowUpRight className="ml-2 size-4" />
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener">
            LinkedIn <ArrowUpRight className="ml-2 size-4" />
          </a>
        </Button>
      </div>
    </section>
  )
}
