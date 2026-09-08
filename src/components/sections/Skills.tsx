import * as SimpleIcons from '@icons-pack/react-simple-icons'
import * as LucideIcons from 'lucide-react'
import { skills, tools } from '@/data/portfolio'

type Item = { name: string; icon: string; lib?: string }

function resolveIcon(item: Item) {
  if (item.lib === 'lucide') {
    return LucideIcons[item.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>
  }
  return SimpleIcons[item.icon as keyof typeof SimpleIcons] as React.ComponentType<{ className?: string }>
}

function IconGrid({ items }: { items: readonly Item[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {items.map((item) => {
        const Icon = resolveIcon(item)
        return (
          <div
            key={item.name}
            className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:bg-muted"
          >
            <span className="flex size-6 shrink-0 items-center justify-center">
              {Icon && <Icon className="size-6 text-foreground" />}
            </span>
            <span className="text-sm font-medium text-foreground">{item.name}</span>
          </div>
        )
      })}
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-16 scroll-mt-20">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight">Tech Stack</h2>
      <IconGrid items={skills} />

      <h3 className="mb-4 mt-10 text-sm font-medium uppercase tracking-wider text-muted-foreground">
        Tools
      </h3>
      <IconGrid items={tools} />
    </section>
  )
}
