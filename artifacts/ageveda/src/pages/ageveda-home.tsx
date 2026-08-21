import {
  ArrowDown,
  ArrowUpRight,
  BookOpenText,
  CircleDot,
  Clock3,
  Compass,
  HeartHandshake,
  Orbit,
  ShieldCheck,
  Sparkles,
  Sprout,
} from 'lucide-react';
import { Link } from 'wouter';

function ConstellationFigure() {
  return (
    <div
      className="relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-[hsl(var(--primary)/0.18)] bg-[hsl(var(--primary))] p-6 text-[hsl(var(--sidebar-foreground))] sm:min-h-[30rem] sm:p-9"
      data-testid="figure-ageveda-constellation"
      aria-label="Abstract illustration of a connected health timeline"
      role="img"
    >
      <div className="absolute inset-0 opacity-30 quiet-grid" />
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[hsl(var(--sidebar-primary)/0.3)]" />
      <div className="absolute -right-10 top-0 h-44 w-44 rounded-full border border-[hsl(var(--sidebar-primary)/0.2)]" />
      <div className="absolute bottom-[-7rem] left-[-5rem] h-72 w-72 rounded-full border border-[hsl(var(--sidebar-primary)/0.2)]" />

      <div className="relative flex h-full min-h-[20rem] flex-col justify-between sm:min-h-[25rem]">
        <div className="flex items-start justify-between">
          <div>
            <p className="mono-label text-[hsl(var(--sidebar-primary))]">Visual study / 00.01</p>
            <p className="mt-2 max-w-[12rem] text-sm leading-relaxed text-[hsl(var(--sidebar-foreground)/0.72)]">
              A living frame for the context around health.
            </p>
          </div>
          <Orbit className="orbit-mark h-8 w-8 text-[hsl(var(--sidebar-primary))]" strokeWidth={1.2} />
        </div>

        <div className="relative mx-auto h-52 w-52 sm:h-64 sm:w-64">
          <div className="absolute inset-0 rounded-full border border-[hsl(var(--sidebar-primary)/0.34)]" />
          <div className="absolute inset-8 rounded-full border border-dashed border-[hsl(var(--sidebar-primary)/0.48)]" />
          <div className="absolute inset-[4.5rem] rounded-full bg-[hsl(var(--sidebar-primary)/0.9)] shadow-[0_0_0_1rem_hsl(var(--sidebar-primary)/0.08)]" />
          <span className="absolute left-[16%] top-[25%] h-3 w-3 rounded-full bg-[hsl(var(--accent))] shadow-[0_0_0_6px_hsl(var(--accent)/0.16)]" />
          <span className="absolute right-[12%] top-[42%] h-2.5 w-2.5 rounded-full bg-[hsl(var(--sidebar-primary))]" />
          <span className="absolute bottom-[19%] left-[27%] h-2.5 w-2.5 rounded-full bg-[hsl(var(--sidebar-primary))]" />
          <div className="absolute left-[18%] top-[29%] h-px w-[58%] rotate-[16deg] bg-[hsl(var(--sidebar-primary)/0.48)]" />
          <div className="absolute bottom-[28%] left-[29%] h-px w-[44%] -rotate-[32deg] bg-[hsl(var(--sidebar-primary)/0.48)]" />
        </div>

        <div className="flex items-end justify-between border-t border-[hsl(var(--sidebar-foreground)/0.16)] pt-4">
          <span className="text-xs text-[hsl(var(--sidebar-foreground)/0.55)]">Observe · orient · continue</span>
           <span className="font-mono text-xs text-[hsl(var(--sidebar-primary))]">AgeVeda</span>
        </div>
      </div>
    </div>
  );
}

export default function AgevedaHome() {
  return (
    <main id="main-content" className="overflow-hidden">
      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(27rem,0.95fr)] lg:items-center lg:gap-20 lg:px-12 lg:pb-28 lg:pt-24">
        <div className="max-w-3xl">
          <div className="reveal-up inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card)/0.6)] px-3 py-2 text-[hsl(var(--muted-foreground))]">
            <span className="status-pip h-2 w-2 rounded-full bg-[hsl(166_27%_49%)]" />
            <span className="mono-label">
              <span className="normal-case">AgeVeda</span> / specification pending
            </span>
          </div>
          <p className="reveal-up reveal-delay-1 mono-label mt-12 text-[hsl(var(--accent-foreground))]">
            India-first · preventive health intelligence
          </p>
          <h1 className="reveal-up reveal-delay-1 mt-4 max-w-2xl text-[clamp(3.65rem,9vw,7.8rem)] leading-[0.9] tracking-[-0.065em] text-[hsl(var(--primary))]">
            A longer view
            <span className="display-serif block pl-[0.08em] italic text-[hsl(var(--accent))]">of being well.</span>
          </h1>
          <p className="reveal-up reveal-delay-2 mt-8 max-w-xl text-base leading-8 text-[hsl(var(--muted-foreground))] sm:text-lg">
             AgeVeda is being shaped as a considered space for understanding health over time — grounded in Indian context, and precise enough to earn trust.
          </p>
          <div className="reveal-up reveal-delay-3 mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/foundation"
              data-testid="link-home-foundation"
              className="group inline-flex min-h-12 items-center gap-3 whitespace-nowrap rounded-full bg-[hsl(var(--primary))] px-5 text-sm font-bold text-[hsl(var(--primary-foreground))] transition-transform duration-200 ease-out hover:-translate-y-0.5"
            >
              See the foundation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <span className="inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]">
              <ShieldCheck className="h-4 w-4 text-[hsl(166_27%_49%)]" />
              No live data. No sign-in.
            </span>
          </div>
        </div>

        <div className="reveal-up reveal-delay-2 lg:pt-8">
          <ConstellationFigure />
        </div>
      </section>

      <section className="border-y border-[hsl(var(--border)/0.78)] bg-[hsl(var(--secondary)/0.43)]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-12">
          <div>
            <p className="mono-label text-[hsl(var(--muted-foreground))]">A deliberate pause</p>
            <h2 className="mt-4 max-w-sm text-4xl leading-[1.02] tracking-[-0.05em] text-[hsl(var(--primary))] sm:text-5xl">
              The foundation is intentionally quiet.
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="border-l-2 border-[hsl(var(--accent))] pl-5">
              <p className="mono-label text-[hsl(var(--accent-foreground))]">01 / Context</p>
              <p className="mt-3 text-sm leading-7 text-[hsl(var(--muted-foreground))]">
                Health does not happen in a vacuum. The system will be designed to respect place, time, and the person behind the pattern.
              </p>
            </div>
            <div className="border-l-2 border-[hsl(166_27%_49%)] pl-5">
              <p className="mono-label text-[hsl(var(--accent-foreground))]">02 / Continuity</p>
              <p className="mt-3 text-sm leading-7 text-[hsl(var(--muted-foreground))]">
                The important signal is often the one that becomes visible slowly. We are making room for a longer, clearer view.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1.38fr_0.62fr]">
          <div className="soft-card quiet-grid rounded-[1.75rem] p-7 sm:p-10">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="mono-label text-[hsl(var(--muted-foreground))]">The starting surface</p>
                <h2 className="mt-4 max-w-xl text-3xl leading-tight tracking-[-0.04em] text-[hsl(var(--primary))] sm:text-5xl">
                  Specificity before spectacle.
                </h2>
              </div>
              <CircleDot className="hidden h-8 w-8 shrink-0 text-[hsl(var(--accent))] sm:block" strokeWidth={1.4} />
            </div>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-[hsl(var(--muted-foreground))] sm:text-base">
               This is a synthetic foundation surface while the complete AgeVeda specification is pending. It establishes the language, rhythm, navigation, and boundaries — without pretending the product is further along than it is.
            </p>
            <div className="mt-10 border-t border-[hsl(var(--border))] pt-5">
              <Link
                href="/foundation"
                data-testid="link-home-boundaries"
                className="group inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--primary))]"
              >
                What is ready to extend
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-[hsl(var(--accent)/0.17)] p-7 sm:p-10">
            <p className="mono-label text-[hsl(var(--accent-foreground))]">Boundary note</p>
            <p className="display-serif mt-5 text-3xl leading-[1.05] text-[hsl(var(--primary))]">
              No patient records. No medical advice. No invented outcomes.
            </p>
            <p className="mt-7 text-sm leading-7 text-[hsl(var(--muted-foreground))]">
              Every example on this surface is synthetic and clearly marked as such.
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-y border-[hsl(var(--border)/0.78)] bg-[hsl(var(--secondary)/0.43)]"
        aria-labelledby="what-is-ageveda-heading"
      >
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-12 lg:py-24">
          <div>
            <p className="mono-label text-[hsl(var(--muted-foreground))]">The idea</p>
            <h2
              id="what-is-ageveda-heading"
              className="mt-4 max-w-sm text-4xl leading-[1.02] tracking-[-0.05em] text-[hsl(var(--primary))] sm:text-5xl"
            >
              What is AgeVeda?
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-xl leading-relaxed tracking-[-0.02em] text-[hsl(var(--primary))] sm:text-2xl">
              AgeVeda is focused on Ayurveda-inspired wellness, healthy ageing, and preventive lifestyle.
            </p>
            <p className="mt-6 text-sm leading-7 text-[hsl(var(--muted-foreground))] sm:text-base">
              We help people make sense of the everyday choices that shape how they feel over time, and build healthier daily habits with more clarity, consistency, and care.
            </p>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
        aria-labelledby="our-approach-heading"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mono-label text-[hsl(var(--muted-foreground))]">A considered path</p>
            <h2
              id="our-approach-heading"
              className="mt-4 max-w-xl text-4xl leading-[1.02] tracking-[-0.05em] text-[hsl(var(--primary))] sm:text-5xl"
            >
              Our Approach
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[hsl(var(--muted-foreground))]">
            A grounded way to make wellbeing part of everyday life, one considered step at a time.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: BookOpenText,
              index: '01',
              title: 'Ayurveda & Traditional Wisdom',
              description:
                'We draw from Ayurveda-inspired principles and traditional wisdom, interpreted with care for modern life.',
            },
            {
              icon: Sprout,
              index: '02',
              title: 'Healthy Lifestyle & Prevention',
              description:
                'We make everyday choices easier to notice and practise through simple, sustainable lifestyle habits.',
            },
            {
              icon: HeartHandshake,
              index: '03',
              title: 'Long-Term Wellness',
              description:
                'We keep the focus on steady progress and a healthier relationship with wellbeing over time.',
            },
          ].map(({ icon: Icon, index, title, description }) => (
            <article
              key={title}
              className="soft-card group h-full rounded-[1.5rem] p-6 transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-8"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[hsl(var(--accent)/0.17)] text-[hsl(var(--accent-foreground))]">
                  <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <span className="mono-label text-[hsl(var(--muted-foreground))]">{index}</span>
              </div>
              <h3 className="mt-10 max-w-xs text-2xl leading-tight tracking-[-0.04em] text-[hsl(var(--primary))]">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[hsl(var(--muted-foreground))]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="border-y border-[hsl(var(--border)/0.78)] bg-[hsl(var(--secondary)/0.43)]"
        aria-labelledby="what-we-offer-heading"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mono-label text-[hsl(var(--muted-foreground))]">A practical beginning</p>
              <h2
                id="what-we-offer-heading"
                className="mt-4 max-w-xl text-4xl leading-[1.02] tracking-[-0.05em] text-[hsl(var(--primary))] sm:text-5xl"
              >
                What We Offer
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[hsl(var(--muted-foreground))]">
              Thoughtful support for building a more intentional relationship with everyday wellbeing.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Compass,
                index: '01',
                title: 'Personalized Wellness Guidance',
                description:
                  'Practical guidance shaped around healthy lifestyle, daily habits, Ayurveda-inspired wellness, and long-term wellbeing.',
              },
              {
                icon: Sparkles,
                index: '02',
                title: 'Preventive Wellness',
                description:
                  'A clearer way to notice health and lifestyle patterns, and encourage proactive habits for everyday wellbeing.',
              },
              {
                icon: Clock3,
                index: '03',
                title: 'Healthy Ageing',
                description:
                  'A focus on sustainable habits and wellness practices that support quality of life over the long term.',
              },
            ].map(({ icon: Icon, index, title, description }) => (
              <article
                key={title}
                className="soft-card group h-full rounded-[1.5rem] p-6 transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[hsl(var(--accent)/0.17)] text-[hsl(var(--accent-foreground))]">
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="mono-label text-[hsl(var(--muted-foreground))]">{index}</span>
                </div>
                <h3 className="mt-10 max-w-xs text-2xl leading-tight tracking-[-0.04em] text-[hsl(var(--primary))]">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[hsl(var(--muted-foreground))]">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/foundation"
              data-testid="link-home-wellness-journey"
              className="group inline-flex min-h-12 items-center gap-3 whitespace-nowrap rounded-full border border-[hsl(var(--primary)/0.22)] bg-[hsl(var(--card)/0.62)] px-5 text-sm font-bold text-[hsl(var(--primary))] transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))]"
            >
              Start Your Wellness Journey
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
        aria-labelledby="how-it-works-heading"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mono-label text-[hsl(var(--muted-foreground))]">A clear next step</p>
            <h2
              id="how-it-works-heading"
              className="mt-4 max-w-xl text-4xl leading-[1.02] tracking-[-0.05em] text-[hsl(var(--primary))] sm:text-5xl"
            >
              How It Works
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[hsl(var(--muted-foreground))]">
            A simple rhythm for turning intention into lasting everyday practice.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              number: '01',
              title: 'Understand',
              description:
                'Start by understanding the person’s lifestyle, daily habits, wellness goals and overall needs.',
            },
            {
              number: '02',
              title: 'Personalize',
              description:
                'Create practical, personalized wellness guidance based on their individual needs and goals.',
            },
            {
              number: '03',
              title: 'Improve',
              description:
                'Follow the guidance, build sustainable habits, and continuously work toward better long-term wellbeing.',
            },
          ].map(({ number, title, description }) => (
            <article
              key={number}
              className="soft-card group h-full rounded-[1.5rem] p-6 transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-8"
            >
              <span className="mono-label text-[hsl(var(--accent-foreground))]">{number} —</span>
              <h3 className="mt-10 text-2xl leading-tight tracking-[-0.04em] text-[hsl(var(--primary))]">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[hsl(var(--muted-foreground))]">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-6 text-center">
          <p className="text-base leading-7 text-[hsl(var(--muted-foreground))]">
            Simple, personalized and focused on long-term wellness.
          </p>
          <Link
            href="/foundation"
            data-testid="link-home-how-it-works-journey"
            className="group inline-flex min-h-12 items-center gap-3 whitespace-nowrap rounded-full bg-[hsl(var(--primary))] px-5 text-sm font-bold text-[hsl(var(--primary-foreground))] transition-transform duration-200 ease-out hover:-translate-y-0.5"
          >
            Start Your Wellness Journey
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>

      <section
        className="border-y border-[hsl(var(--border)/0.78)] bg-[hsl(var(--secondary)/0.43)]"
        aria-labelledby="who-is-ageveda-for-heading"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mono-label text-[hsl(var(--muted-foreground))]">A shared intention</p>
              <h2
                id="who-is-ageveda-for-heading"
                className="mt-4 max-w-xl text-4xl leading-[1.02] tracking-[-0.05em] text-[hsl(var(--primary))] sm:text-5xl"
              >
                Who Is AgeVeda For?
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[hsl(var(--muted-foreground))]">
              For people ready to make their everyday wellbeing more intentional.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: '01',
                title: 'People Looking to Improve Their Lifestyle',
                description: 'For people who want to build healthier, more sustainable daily habits.',
              },
              {
                number: '02',
                title: 'People Interested in Preventive Wellness',
                description: 'For people who want to take a proactive approach to their long-term wellbeing.',
              },
              {
                number: '03',
                title: 'People Seeking Personalized Guidance',
                description:
                  'For people who prefer wellness guidance that considers their individual lifestyle, goals and needs.',
              },
              {
                number: '04',
                title: 'People Focused on Healthy Ageing',
                description:
                  'For people who want to support their long-term wellbeing and maintain a healthy, active lifestyle as they age.',
              },
            ].map(({ number, title, description }) => (
              <article
                key={number}
                className="soft-card group h-full rounded-[1.5rem] p-6 transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-8"
              >
                <span className="mono-label text-[hsl(var(--accent-foreground))]">{number}</span>
                <h3 className="mt-10 text-2xl leading-tight tracking-[-0.04em] text-[hsl(var(--primary))]">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[hsl(var(--muted-foreground))]">{description}</p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-7 text-[hsl(var(--muted-foreground))] sm:text-lg">
            AgeVeda is designed for people who want to take a more proactive and personalized approach to their long-term wellbeing.
          </p>
        </div>
      </section>

      <section
        className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
        aria-labelledby="why-ageveda-heading"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mono-label text-[hsl(var(--muted-foreground))]">A considered difference</p>
            <h2
              id="why-ageveda-heading"
              className="mt-4 max-w-xl text-4xl leading-[1.02] tracking-[-0.05em] text-[hsl(var(--primary))] sm:text-5xl"
            >
              Why AgeVeda?
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[hsl(var(--muted-foreground))]">
            A thoughtful foundation for making wellbeing part of everyday life.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: '01',
              title: 'Personalized',
              description:
                'Wellness guidance designed around individual lifestyle, needs and goals.',
            },
            {
              number: '02',
              title: 'Proactive',
              description:
                'Encourages people to take an active approach to their long-term wellbeing.',
            },
            {
              number: '03',
              title: 'Practical',
              description:
                'Focuses on simple, realistic habits that can be incorporated into everyday life.',
            },
            {
              number: '04',
              title: 'Long-Term',
              description:
                'Designed around sustainable wellness and healthy ageing rather than short-term solutions.',
            },
          ].map(({ number, title, description }) => (
            <article
              key={number}
              className="soft-card group h-full rounded-[1.5rem] p-6 transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-8"
            >
              <span className="mono-label text-[hsl(var(--accent-foreground))]">{number}</span>
              <h3 className="mt-10 text-2xl leading-tight tracking-[-0.04em] text-[hsl(var(--primary))]">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[hsl(var(--muted-foreground))]">{description}</p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-7 text-[hsl(var(--muted-foreground))] sm:text-lg">
          Because better wellbeing is built through consistent, personalized and sustainable choices.
        </p>
      </section>

      <section
        className="border-y border-[hsl(var(--border)/0.78)] bg-[hsl(var(--secondary)/0.43)]"
        aria-labelledby="built-on-trust-heading"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mono-label text-[hsl(var(--muted-foreground))]">A trusted foundation</p>
              <h2
                id="built-on-trust-heading"
                className="mt-4 max-w-xl text-4xl leading-[1.02] tracking-[-0.05em] text-[hsl(var(--primary))] sm:text-5xl"
              >
                Built on Trust
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[hsl(var(--muted-foreground))]">
              Clear principles for a more thoughtful relationship with everyday wellbeing.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Thoughtful & Personalized',
                description:
                  'Wellness guidance designed around individual needs, lifestyle and long-term goals.',
              },
              {
                number: '02',
                title: 'Simple & Practical',
                description:
                  'Clear, easy-to-understand wellness information focused on realistic everyday habits.',
              },
              {
                number: '03',
                title: 'Long-Term Mindset',
                description:
                  'A sustainable approach to wellbeing and healthy ageing, focused on consistency rather than quick fixes.',
              },
            ].map(({ number, title, description }) => (
              <article
                key={number}
                className="soft-card group h-full rounded-[1.5rem] p-6 transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-8"
              >
                <span className="mono-label text-[hsl(var(--accent-foreground))]">{number}</span>
                <h3 className="mt-10 text-2xl leading-tight tracking-[-0.04em] text-[hsl(var(--primary))]">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[hsl(var(--muted-foreground))]">{description}</p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-7 text-[hsl(var(--muted-foreground))] sm:text-lg">
            Your wellbeing deserves a thoughtful, transparent and sustainable approach.
          </p>

          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-6 text-[hsl(var(--muted-foreground))] sm:text-sm">
            AgeVeda provides general wellness information and guidance. It is not a substitute for professional medical advice, diagnosis or treatment.
          </p>
        </div>
      </section>

      <section
        className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
        aria-labelledby="start-wellness-journey-heading"
      >
        <div className="soft-card mx-auto max-w-5xl rounded-[1.75rem] px-7 py-12 text-center sm:px-12 sm:py-16">
          <p className="mono-label text-[hsl(var(--muted-foreground))]">A gentle beginning</p>
          <h2
            id="start-wellness-journey-heading"
            className="mx-auto mt-4 max-w-3xl text-4xl leading-[1.02] tracking-[-0.05em] text-[hsl(var(--primary))] sm:text-6xl"
          >
            Start Your Wellness Journey
          </h2>
          <p className="display-serif mx-auto mt-6 max-w-2xl text-3xl leading-[1.08] text-[hsl(var(--accent))] sm:text-4xl">
            Small choices today can shape a healthier tomorrow.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[hsl(var(--muted-foreground))] sm:text-base">
            Explore a more thoughtful, personalized and sustainable approach to wellbeing with AgeVeda.
          </p>
          <a
            href="#main-content"
            data-testid="link-home-explore-ageveda"
            className="group mt-9 inline-flex min-h-12 items-center gap-3 whitespace-nowrap rounded-full bg-[hsl(var(--primary))] px-6 text-sm font-bold text-[hsl(var(--primary-foreground))] transition-transform duration-200 ease-out hover:-translate-y-0.5"
          >
            Explore AgeVeda
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>

      <div className="flex justify-center pb-14 text-[hsl(var(--muted-foreground))]">
        <a href="#main-content" data-testid="link-return-to-top" className="inline-flex items-center gap-2 text-xs font-semibold hover:text-[hsl(var(--primary))]">
          <ArrowDown className="h-4 w-4 rotate-180" />
          Return to the beginning
        </a>
      </div>
    </main>
  );
}