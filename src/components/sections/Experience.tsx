import { experiences } from '@/data/portfolio'

export function Experience() {
  return (
    <section id="experience" className="py-16 scroll-mt-20">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight">Experience</h2>
      <div className="flex flex-col gap-8">
        {experiences.map((exp) => (
          <div key={exp.company + exp.period} className="relative border-l border-border pl-6">
            <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-primary" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-medium">{exp.role}</h3>
              <time className="text-sm text-muted-foreground">{exp.period}</time>
            </div>
            <p className="text-sm text-muted-foreground">
              {exp.company} · {exp.type}
            </p>
            <p className="text-sm text-muted-foreground">{exp.location}</p>
            {exp.highlights && (
              <p className="mt-2 text-sm text-muted-foreground">{exp.highlights.join(" · ")}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
