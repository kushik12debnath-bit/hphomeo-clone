import { whyHomeopathy } from '../data/mockData'
import Reveal from './Reveal'

export default function WhyHomeopathy() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-brand-bg py-16 sm:py-20 md:py-28">
      <div className="container-main">
        <Reveal className="mb-12 text-center sm:mb-16">
          <span className="inline-flex items-center rounded-full border border-brand/15 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-brand sm:text-[12px]">
            Why Homeopathy
          </span>
          <h2 className="mt-5 text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-[1.1] text-brand-dark">
            Natural Healing That{' '}
            <span className="bg-gradient-to-r from-brand to-blue-500 bg-clip-text text-transparent">
              Actually Works
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[14px] leading-relaxed text-brand-subtext sm:text-[15px]">
            Backed by 200+ years of practice — a system that treats the root cause, not just
            symptoms.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {whyHomeopathy.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 80}
              className="group flex flex-col items-center rounded-2xl px-6 py-8 text-center transition-all duration-300 glass-card hover:-translate-y-1.5 hover:border-brand/35 hover:shadow-[0_12px_30px_rgba(88,155,255,0.08)] sm:px-7 sm:py-9"
            >
              <div className="transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                <img
                  src={item.icon}
                  alt=""
                  width="48"
                  height="48"
                  className="h-10 w-10 object-contain transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 sm:h-12 sm:w-12"
                />
              </div>
              <h3 className="mt-6 text-[14px] font-semibold tracking-[-0.01em] text-brand-dark sm:text-[15.5px]">
                {item.title}
              </h3>
              <p className="mt-3 text-[12.5px] leading-[1.6] text-brand-subtext sm:text-[13.5px]">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
