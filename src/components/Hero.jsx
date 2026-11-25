import { ArrowRight } from 'lucide-react'
import { heroContent } from '../data/mockData'

export default function Hero({ onBook }) {
  const { title, description, primaryCta, secondaryCta, trust, badges, image } = heroContent

  return (
    <section
      id="home"
      className="section-glow relative overflow-hidden bg-noise pb-10 pt-12 scroll-mt-24 sm:pb-14 sm:pt-16 md:pb-16 md:pt-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand/[0.04] blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/10 to-transparent" />
      </div>

      <div className="container-main px-4 sm:px-6">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <h1 className="animate-fade-up text-center font-display text-[clamp(2.2rem,7vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.01em] text-brand-dark motion-reduce:animate-none sm:text-[clamp(2.6rem,5.5vw,3.8rem)] lg:text-[4.2rem]">
            <span className="text-[#D8EE53]">{title.lead}</span>{' '}
            <span className="bg-gradient-to-r from-[#D8EE53] to-[#589BFF] bg-clip-text text-transparent">
              {title.middle}
            </span>{' '}
            <span className="inline-flex flex-wrap items-center justify-center gap-2">
              <span className="text-[#589BFF]">{title.accent}</span>
              <img
                src="/images/icons8-homeopathy-100.svg"
                alt=""
                width="80"
                height="80"
                className="inline-block h-[24px] w-[24px] object-contain align-middle sm:h-[32px] sm:w-[32px] md:h-[44px] md:w-[44px] lg:h-[64px] lg:w-[64px] xl:h-[80px] xl:w-[80px]"
              />
            </span>
          </h1>

          <p
            className="mt-8 max-w-[26rem] animate-fade-up px-2 text-[14.5px] leading-relaxed text-brand-ink-soft motion-reduce:animate-none sm:mt-10 sm:max-w-[30rem] sm:text-[16px]"
            style={{ animationDelay: '100ms' }}
          >
            {description}
          </p>

          <div
            className="mt-8 flex w-full animate-fade-up-sm flex-col items-center gap-3 motion-reduce:animate-none sm:mt-12"
            style={{ animationDelay: '180ms' }}
          >
            <button
              type="button"
              onClick={onBook}
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#D8EE53] px-5 py-3 text-[14.5px] font-semibold text-brand-dark shadow-[0_6px_18px_rgba(216,238,83,0.28)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#C5DA40] active:scale-[0.98] sm:w-auto sm:px-8 sm:py-4 sm:text-[16px]"
            >
              {primaryCta}
              <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href="#how-it-works"
              className="text-[13px] font-medium text-brand-subtext transition-colors duration-200 hover:text-brand-dark"
            >
              {secondaryCta}
            </a>
          </div>

          <div
            className="mt-5 flex animate-fade-up-sm items-center justify-center gap-2 text-[13px] text-brand-subtext motion-reduce:animate-none sm:mt-6 sm:text-[14px]"
            style={{ animationDelay: '250ms' }}
          >
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span>{trust.label}</span>{' '}
            <span className="font-semibold text-brand-dark">{trust.count}</span>{' '}
            <span>{trust.suffix}</span>
          </div>

          <div
            className="mt-8 grid animate-fade-up-sm grid-cols-2 justify-center gap-x-4 gap-y-2 text-[12.5px] text-brand-subtext motion-reduce:animate-none sm:mt-12 sm:flex sm:flex-wrap sm:text-[13px]"
            style={{ animationDelay: '300ms' }}
          >
            {badges.map((badge, index) => (
              <span key={badge.label} className="flex items-center justify-center gap-1.5">
                <span
                  className={`h-1.5 w-1.5 animate-soft-pulse rounded-full ${badge.color}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        <div
          className="relative mx-auto mt-12 max-w-4xl animate-hero-in motion-reduce:animate-none sm:mt-16"
          style={{ animationDelay: '300ms' }}
        >
          <div
            className="absolute left-1/2 top-1/2 -z-10 h-[70%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.06] blur-[80px]"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-2xl border border-border/30 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:rounded-3xl">
            <img
              src={image.src}
              alt={image.alt}
              width="1120"
              height="900"
              className="w-full"
              fetchpriority="high"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent sm:h-32" />
          </div>
        </div>
      </div>
    </section>
  )
}
