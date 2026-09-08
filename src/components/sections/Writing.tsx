import { posts } from '@/data/portfolio'

export function Writing() {
  return (
    <section id="writing" className="py-16 scroll-mt-20">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight">Writing</h2>
      <div className="flex flex-col divide-y divide-border">
        {posts.map((post) => (
          <a key={post.title} href={post.link} className="group flex flex-col gap-1 py-4 first:pt-0">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-medium transition-colors group-hover:text-primary">{post.title}</h3>
              <time className="shrink-0 text-sm text-muted-foreground">{post.date}</time>
            </div>
            <p className="text-sm text-muted-foreground">{post.excerpt}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
