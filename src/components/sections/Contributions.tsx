import { GitHubCalendar } from 'react-github-calendar'
import { profile } from '@/data/portfolio'

const username = profile.socials.github.split('/').filter(Boolean).pop() ?? ''

const theme = {
  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
}

export function Contributions() {
  return (
    <section id="contributions" className="py-16 scroll-mt-20">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight">Contributions</h2>
      <div className="rounded-lg border border-border/60 bg-muted/20 p-6 overflow-x-auto">
        <GitHubCalendar
          username={username}
          theme={theme}
          colorScheme="dark"
          fontSize={12}
          blockSize={11}
          blockMargin={4}
        />
      </div>
    </section>
  )
}
