import { journeySteps } from '../data/mockData'
import Reveal from './Reveal'

export default function Journey() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-16 sm:py-20 md:py-28">
      <div className="container-main">
        <Reveal className="mx-auto mb-12 max-w-xl text-center sm:mb-16">
          <span className="inline-flex items-center rounded-full border border-brand/15 bg-brand/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-brand sm:text-[12px]">
            How It Works
          </span>
          <h2 className="mt-5 text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-brand-dark">
            Your Healing Journey, <br className="hidden sm:block" />
            Step by Step
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[14px] leading-relaxed text-brand-subtext sm:text-[15px]">
            From finding the right doctor to your follow-up — every step is simple and seamless.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {journeySteps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={index * 90}
              className={`group relative flex flex-col items-center rounded-2xl border px-6 py-10 text-center transition-all duration-300 hover:-translate-y-1 sm:px-7 sm:py-12 ${
                step.highlight
                  ? 'border-brand/30 bg-brand shadow-[0_8px_30px_rgba(88,155,255,0.2)] hover:shadow-[0_12px_40px_rgba(88,155,255,0.3)]'
                  : 'border-border/40 bg-white hover:border-brand/20 hover:shadow-[0_8px_30px_rgba(88,155,255,0.08)]'
              }`}
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-[14px] font-bold transition-all duration-300 group-hover:scale-110 sm:h-10 sm:w-10 sm:text-[15px] ${
                  step.highlight
                    ? 'border-2 border-white bg-white text-brand'
                    : 'border-2 border-brand text-brand'
                }`}
              >
                {step.number}
              </div>

              <div className="transition-all duration-300 group-hover:rotate-[-5deg] group-hover:scale-110">
                <img
                  src={step.icon}
                  alt=""
                  width="36"
                  height="36"
                  className={`mt-5 object-contain transition-all duration-300 group-hover:rotate-[-3deg] group-hover:scale-110 sm:h-11 sm:w-11 ${
                    step.highlight ? 'brightness-0 invert' : ''
                  }`}
                />
              </div>

              <h3
                className={`mt-6 text-[14px] font-semibold tracking-[-0.01em] sm:text-[15.5px] ${
                  step.highlight ? 'text-white' : 'text-brand-dark'
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`mt-3 text-[12.5px] leading-[1.6] sm:text-[13.5px] ${
                  step.highlight ? 'text-white/80' : 'text-brand-subtext'
                }`}
              >
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
