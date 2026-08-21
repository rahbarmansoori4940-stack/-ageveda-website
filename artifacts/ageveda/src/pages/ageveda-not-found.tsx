import { ArrowLeft, Compass, SearchX } from 'lucide-react';
import { Link } from 'wouter';

export default function AgevedaNotFound() {
  return (
    <main id="main-content" className="mx-auto flex min-h-[calc(100dvh-9.5rem)] max-w-[1440px] items-center px-5 py-16 sm:px-8 lg:px-12">
      <div className="grid w-full gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-24">
        <div className="relative mx-auto flex h-56 w-56 items-center justify-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--secondary)/0.42)] sm:h-72 sm:w-72 lg:mx-0">
          <div className="absolute inset-7 rounded-full border border-dashed border-[hsl(var(--accent)/0.62)]" />
          <div className="absolute inset-16 rounded-full border border-[hsl(var(--primary)/0.2)]" />
          <SearchX className="relative h-10 w-10 text-[hsl(var(--accent))]" strokeWidth={1.3} />
          <span className="absolute bottom-7 font-mono text-[0.62rem] tracking-[0.15em] text-[hsl(var(--muted-foreground))]">404 / NOT FOUND</span>
        </div>
        <div className="max-w-xl">
          <p className="mono-label text-[hsl(var(--accent-foreground))]">A quiet detour</p>
          <h1 className="mt-4 text-5xl leading-[0.95] tracking-[-0.06em] text-[hsl(var(--primary))] sm:text-7xl">
            This path has not been mapped.
          </h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-[hsl(var(--muted-foreground))]">
             The page you’re looking for is not part of the current AgeVeda foundation. That is okay; the map is still being drawn.
          </p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/"
              data-testid="link-not-found-home"
              className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[hsl(var(--primary))] px-5 text-sm font-bold text-[hsl(var(--primary-foreground))] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <ArrowLeft className="h-4 w-4" />
              Go to overview
            </Link>
            <Link
              href="/foundation"
              data-testid="link-not-found-foundation"
              className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-[hsl(var(--primary))] hover:text-[hsl(var(--accent-foreground))]"
            >
              View foundation
              <Compass className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}