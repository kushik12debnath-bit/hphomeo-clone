import { CalendarCheck, CreditCard, FileText, Video } from 'lucide-react'
import { whyChooseUs } from '../data/mockData'
import Reveal from './Reveal'

const icons = {
  video: Video,
  card: CreditCard,
  calendar: CalendarCheck,
  file: FileText,
}

export default function HealSection() {
  return (
    <section className="bg-noise relative overflow-hidden bg-brand-dark py-12 text-white sm:py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(88,155,255,0.08),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <Reveal className="mx-auto mb-12 flex max-w-xl flex-col items-center text-center sm:mb-16">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] font-semibold tracking-wide text-brand-accent sm:text-[12px]">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-display text-[clamp(1.4rem,3vw,2.25rem)] font-bold leading-[1.1] text-white">
            Built for Modern Healthcare
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[13.5px] leading-relaxed text-white/70 sm:text-[14.5px]">
            Access expert homeopathic care digitally — from home, while travelling, or anywhere
            else.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 text-center sm:grid-cols-4 sm:gap-x-8 lg:gap-x-12">
          {whyChooseUs.map((item, index) => {
            const Icon = icons[item.icon]
            return (
              <Reveal key={item.title} delay={index * 70} className="group flex flex-col items-center">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                  <Icon className="h-[18px] w-[18px] text-brand-accent" strokeWidth={1.8} />
                </div>
                <h3 className="mt-3 text-[13.5px] font-semibold tracking-[-0.01em] text-white sm:text-[14.5px]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[12px] leading-[1.55] text-white/70 sm:text-[13px]">
                  {item.description}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
