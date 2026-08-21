import { type ReactNode, useState } from 'react';
import { ArrowUpRight, Menu, MoveRight, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

type AgevedaShellProps = {
  children: ReactNode;
};

function AgevedaMark() {
  return (
    <span
      aria-hidden="true"
      className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--primary)/0.2)] bg-[hsl(var(--secondary)/0.72)]"
    >
      <span className="absolute h-5 w-5 rounded-full border border-[hsl(var(--primary))]" />
      <span className="absolute h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" />
    </span>
  );
}

export function AgevedaShell({ children }: AgevedaShellProps) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = location === '/';
  const isFoundation = location === '/foundation';

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="ageveda-shell min-h-[100dvh] text-[hsl(var(--foreground))]">
      <a
        href="#main-content"
        data-testid="link-skip-to-content"
        className="sr-only absolute left-4 top-4 z-50 rounded-md bg-[hsl(var(--primary))] px-4 py-3 text-sm font-semibold text-[hsl(var(--primary-foreground))] focus:not-sr-only"
      >
        Skip to content
      </a>

      <header className="relative z-20 border-b border-[hsl(var(--border)/0.78)] bg-[hsl(var(--background)/0.72)] backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            onClick={closeMenu}
            data-testid="link-ageveda-home"
            className="group flex items-center gap-3 rounded-md"
            aria-label="AgeVeda home"
          >
            <AgevedaMark />
            <span className="flex flex-col leading-none">
              <span className="text-[0.95rem] font-extrabold tracking-[0.22em] text-[hsl(var(--primary))]">
                AgeVeda
              </span>
              <span className="mt-1 font-mono text-[0.54rem] uppercase tracking-[0.17em] text-[hsl(var(--muted-foreground))]">
                health intelligence
              </span>
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
            <Link
              href="/"
              data-testid="link-nav-overview"
              aria-current={isHome ? 'page' : undefined}
              className={`nav-link rounded-md px-4 py-3 text-sm font-semibold ${
                isHome
                  ? 'text-[hsl(var(--primary))]'
                  : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]'
              }`}
            >
              Overview
            </Link>
            <Link
              href="/foundation"
              data-testid="link-nav-foundation"
              aria-current={isFoundation ? 'page' : undefined}
              className={`nav-link rounded-md px-4 py-3 text-sm font-semibold ${
                isFoundation
                  ? 'text-[hsl(var(--primary))]'
                  : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]'
              }`}
            >
              Foundation
            </Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <span className="mono-label hidden text-[hsl(var(--muted-foreground))] lg:block">
              India / 2026
            </span>
            <Link
              href="/foundation"
              data-testid="link-header-specification"
              className="group inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full bg-[hsl(var(--primary))] px-4 text-sm font-bold text-[hsl(var(--primary-foreground))] transition-transform duration-200 ease-out hover:-translate-y-0.5"
            >
              Read the brief
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            data-testid="button-toggle-mobile-menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[hsl(var(--border))] text-[hsl(var(--primary))] transition-colors hover:bg-[hsl(var(--secondary))] md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen ? (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-[hsl(var(--border)/0.78)] bg-[hsl(var(--card)/0.96)] px-5 py-4 md:hidden"
          >
            <div className="mx-auto flex max-w-[1440px] flex-col gap-1">
              <Link
                href="/"
                onClick={closeMenu}
                data-testid="link-mobile-overview"
                className="flex min-h-12 items-center justify-between rounded-lg px-3 text-sm font-bold text-[hsl(var(--primary))] hover:bg-[hsl(var(--secondary))]"
              >
                Overview
                <MoveRight className="h-4 w-4" />
              </Link>
              <Link
                href="/foundation"
                onClick={closeMenu}
                data-testid="link-mobile-foundation"
                className="flex min-h-12 items-center justify-between rounded-lg px-3 text-sm font-bold text-[hsl(var(--primary))] hover:bg-[hsl(var(--secondary))]"
              >
                Foundation
                <MoveRight className="h-4 w-4" />
              </Link>
              <div className="mt-3 border-t border-[hsl(var(--border))] px-3 pt-4">
                <span className="mono-label text-[hsl(var(--muted-foreground))]">India / 2026</span>
              </div>
            </div>
          </nav>
        ) : null}
      </header>

      {children}

      {isHome ? (
        <footer
          className="border-t border-[hsl(var(--border)/0.78)] bg-[hsl(var(--primary))] text-[hsl(var(--sidebar-foreground))]"
          aria-labelledby="footer-heading"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
            <div className="grid gap-12 md:grid-cols-[1.15fr_1fr_0.75fr] md:gap-10 lg:gap-20">
              <div>
                <a href="#main-content" className="inline-flex items-center gap-3 rounded-md" aria-label="AgeVeda home">
                  <AgevedaMark />
                  <span id="footer-heading" className="text-sm font-bold tracking-[0.12em]">
                    AgeVeda
                  </span>
                </a>
                <p className="mt-6 max-w-xs text-sm leading-7 text-[hsl(var(--sidebar-foreground)/0.72)]">
                  Thoughtful, personalized and sustainable wellness for healthier ageing.
                </p>
              </div>

              <nav aria-label="Footer navigation">
                <p className="mono-label text-[hsl(var(--sidebar-primary))]">Quick Links</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                  {[
                    ['Home', '#main-content'],
                    ['What is AgeVeda?', '#what-is-ageveda-heading'],
                    ['Our Approach', '#our-approach-heading'],
                    ['What We Offer', '#what-we-offer-heading'],
                    ['How It Works', '#how-it-works-heading'],
                    ['Why AgeVeda?', '#why-ageveda-heading'],
                  ].map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      className="w-fit text-sm text-[hsl(var(--sidebar-foreground)/0.78)] transition-colors duration-200 hover:text-[hsl(var(--sidebar-primary))]"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </nav>

              <div>
                <p className="mono-label text-[hsl(var(--sidebar-primary))]">Contact</p>
                <h2 className="mt-5 text-lg font-semibold text-[hsl(var(--sidebar-foreground))]">Contact Us</h2>
                <p className="mt-3 text-sm leading-7 text-[hsl(var(--sidebar-foreground)/0.68)]">
                  Contact details coming soon.
                </p>
              </div>
            </div>

            <div className="mt-14 border-t border-[hsl(var(--sidebar-foreground)/0.16)] pt-6">
              <p className="max-w-3xl text-xs leading-6 text-[hsl(var(--sidebar-foreground)/0.62)] sm:text-sm">
                AgeVeda provides general wellness information and guidance. It is not a substitute for professional medical advice, diagnosis or treatment.
              </p>
              <p className="mt-5 text-xs text-[hsl(var(--sidebar-foreground)/0.62)]">
                © 2026 AgeVeda. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ) : (
        <footer className="border-t border-[hsl(var(--border)/0.78)] bg-[hsl(var(--primary))] text-[hsl(var(--sidebar-foreground))]">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
            <div className="flex items-center gap-3">
              <AgevedaMark />
              <div>
                <p className="text-sm font-bold tracking-[0.12em]">AgeVeda</p>
                <p className="mt-1 text-xs text-[hsl(var(--sidebar-foreground)/0.64)]">
                  A considered beginning.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[hsl(var(--sidebar-foreground)/0.7)]">
              <span data-testid="text-footer-status">Specification pending</span>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[hsl(var(--sidebar-primary))]" />
              <span data-testid="text-footer-label">Synthetic foundation surface</span>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}