import { profile } from '@/data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="mx-auto max-w-3xl px-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}.
      </div>
    </footer>
  )
}
