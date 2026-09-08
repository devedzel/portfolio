import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
// import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
// import { Projects } from '@/components/sections/Projects';
// import { Writing } from '@/components/sections/Writing';
import { Contact } from '@/components/sections/Contact';
import { Separator } from '@/components/ui/separator';
import { Experience } from '@/components/sections/Experience';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Contributions } from '@/components/sections/Contributions';

function App() {
    return (
        <div className="relative min-h-screen text-foreground">
            <div
                className="pointer-events-none fixed inset-0 -z-10"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
                }}
            />
            <Header />
            <main className="mx-auto max-w-3xl px-6">
                <Hero />
                <Separator />
                {/* <About /> */}
                <Separator />
                <Experience />
                <Separator />
                <Skills />
                {/* <Projects /> */}
                {/* <Writing /> */}
                <Separator />
                <Contributions />
                <Separator />
                <Contact />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default App;
