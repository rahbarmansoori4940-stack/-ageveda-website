import { ArrowLeft, ArrowUpRight, Check, Compass, Layers3, LockKeyhole, ScanSearch } from 'lucide-react';
import { Link } from 'wouter';

const readyItems = [
  {
    id: 'shell',
    number: '01',
    title: 'Application shell',
    description: 'A shared, responsive frame with persistent navigation, semantic landmarks, and a clear mobile path.',
    icon: Layers3,
  },
  {
    id: 'language',
    number: '02',
    title: 'Visual language',
    description: 'A warm mineral canvas, deep peacock ink, and a saffron signal tuned for calm attention rather than clinical neutrality.',
    icon: Compass,
  },
  {
    id: 'boundaries',
    number: '03',
    title: 'Product boundaries',
    description: 'Synthetic content only. No authentication, data integrations, medical claims, or unfinished modules are implied.',
    icon: LockKeyhole,
  },
];

export default function AgevedaFoundation() {
  return (
    <main id="main-content">
      <section className="mx-auto max-w-[1440px] px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12">
        <Link
          href="/"
          data-testid="link-foundation-back"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to overview
        </Link>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div className="max-w-xl">
            <p className="mono-label text-[hsl(var(--accent-foreground))]">Foundation / 00.01</p>
            <h1 className="mt-5 text-5xl leading-[0.94] tracking-[-0.06em] text-[hsl(var(--primary))] sm:text-7xl">
              Ready for the real brief.
            </h1>
            <p className="mt-7 text-base leading-8 text-[hsl(var(--muted-foreground))] sm:text-lg">
               The current AgeVeda surface is a stable starting point, not a finished product. It gives future work a home and makes the unknowns visible.
            </p>
            <div className="mt-9 inline-flex items-center gap-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card)/0.58)] px-4 py-3 text-sm text-[hsl(var(--muted-foreground))]">
              <ScanSearch className="h-4 w-4 text-[hsl(var(--accent))]" />
              <span data-testid="status-foundation-pending">Specification pending</span>
            </div>
          </div>

          <div className="soft-card rounded-[1.75rem] p-6 sm:p-9">
            <div className="flex items-start justify-between border-b border-[hsl(var(--border))] pb-5">
              <div>
                <p className="mono-label text-[hsl(var(--muted-foreground))]">Ready to extend</p>
                <h2 className="mt-2 text-xl font-bold tracking-[-0.025em] text-[hsl(var(--primary))]">
                  A disciplined base layer
                </h2>
              </div>
              <span className="font-mono text-xs text-[hsl(var(--muted-foreground))]">AGE / 25</span>
            </div>
            <div className="divide-y divide-[hsl(var(--border))]">
              {readyItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.id} className="flex gap-4 py-6 first:pt-7 last:pb-2" data-testid={`card-foundation-${item.id}`}>
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[hsl(var(--secondary))] text-[hsl(var(--primary))]">
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[0.65rem] text-[hsl(var(--accent-foreground))]">{item.number}</span>
                        <h3 className="font-bold text-[hsl(var(--primary))]">{item.title}</h3>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{item.description}</p>
                    </div>
                    <Check className="ml-auto mt-1 hidden h-4 w-4 shrink-0 text-[hsl(166_27%_49%)] sm:block" />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[hsl(var(--border)/0.78)] bg-[hsl(var(--primary))] text-[hsl(var(--sidebar-foreground))]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-12">
          <div>
            <p className="mono-label text-[hsl(var(--sidebar-primary))]">Not yet specified</p>
            <h2 className="mt-4 max-w-sm text-3xl leading-tight tracking-[-0.04em] sm:text-4xl">
              We will not fill in the blanks for you.
            </h2>
          </div>
          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            <div className="border-t border-[hsl(var(--sidebar-foreground)/0.2)] pt-4">
              <p className="font-semibold text-[hsl(var(--sidebar-foreground))]">Product model</p>
              <p className="mt-2 text-sm leading-6 text-[hsl(var(--sidebar-foreground)/0.64)]">
                The right journeys, permissions, and information architecture belong to the complete brief.
              </p>
            </div>
            <div className="border-t border-[hsl(var(--sidebar-foreground)/0.2)] pt-4">
              <p className="font-semibold text-[hsl(var(--sidebar-foreground))]">Health content</p>
              <p className="mt-2 text-sm leading-6 text-[hsl(var(--sidebar-foreground)/0.64)]">
                Clinical language, guidance, and evidence standards will be added only when they are supplied and reviewed.
              </p>
            </div>
            <div className="border-t border-[hsl(var(--sidebar-foreground)/0.2)] pt-4">
              <p className="font-semibold text-[hsl(var(--sidebar-foreground))]">Data model</p>
              <p className="mt-2 text-sm leading-6 text-[hsl(var(--sidebar-foreground)/0.64)]">
                There are no records, integrations, dashboards, or metrics hidden behind this surface.
              </p>
            </div>
            <div className="border-t border-[hsl(var(--sidebar-foreground)/0.2)] pt-4">
              <p className="font-semibold text-[hsl(var(--sidebar-foreground))]">India-first details</p>
              <p className="mt-2 text-sm leading-6 text-[hsl(var(--sidebar-foreground)/0.64)]">
                Local context will be specific, not decorative: it will follow the product’s actual use cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-[1440px] flex-col gap-7 px-5 py-14 sm:px-8 sm:py-20 md:flex-row md:items-end md:justify-between lg:px-12">
        <div>
          <p className="mono-label text-[hsl(var(--muted-foreground))]">A clean handoff</p>
          <h2 className="display-serif mt-3 max-w-lg text-4xl leading-tight text-[hsl(var(--primary))] sm:text-5xl">
            Bring the questions. We’ll keep the signal.
          </h2>
        </div>
        <Link
          href="/"
          data-testid="link-foundation-overview"
          className="group inline-flex min-h-12 items-center gap-3 self-start rounded-full border border-[hsl(var(--primary)/0.25)] px-5 text-sm font-bold text-[hsl(var(--primary))] transition-colors hover:bg-[hsl(var(--secondary))] md:self-auto"
        >
          Return to overview
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </section>
    </main>
  );
}