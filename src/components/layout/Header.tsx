import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/use-theme'
import { navSections } from '@/data/portfolio'

export function Header() {
  const { isDark, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur">
      <nav className="mx-auto grid max-w-3xl grid-cols-[1fr_auto_1fr] items-center px-6 py-4">
        <div />
        <div className="flex items-center gap-1 rounded-full border border-border/60 bg-muted/40 p-1">
          {navSections.map((s) => (
            <Button key={s} variant="ghost" size="sm" asChild className="rounded-full capitalize text-muted-foreground hover:text-foreground">
              <a href={`#${s}`}>{s}</a>
            </Button>
          ))}
        </div>
        <div className="flex justify-end">
          <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme" className="rounded-full">
            {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </Button>
        </div>
      </nav>
    </header>
  )
}
