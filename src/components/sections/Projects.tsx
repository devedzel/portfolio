import { ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/portfolio';

export function Projects() {
    return (
        <section id="projects" className="py-16 scroll-mt-20">
            <h2 className="mb-6 text-2xl font-semibold tracking-tight">Projects</h2>
            <div className="grid gap-4 sm:grid-cols-2">
                {projects.map((project) => (
                    <Card key={project.title} className="flex flex-col">
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="mt-auto">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="outline">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <a
                                href={project.link}
                                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                            >
                                View project <ArrowUpRight className="ml-1 size-4" />
                            </a>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}
