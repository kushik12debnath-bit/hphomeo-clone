import { ArrowRight } from 'lucide-react'
import { doctors } from '../data/mockData'
import Reveal from './Reveal'

function DoctorCard({ doctor, onBook }) {
  return (
    <button
      type="button"
      onClick={() => onBook(doctor)}
      className="group flex w-[320px] shrink-0 items-start gap-4 rounded-2xl p-5 text-left glass-card hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-[0_10px_30px_rgba(88,155,255,0.1)] sm:w-[340px] sm:p-6"
      aria-label={`Book an appointment with ${doctor.name}`}
    >
      <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-brand-bg sm:h-20 sm:w-20">
        <img
          src={doctor.photo}
          alt={doctor.name}
          width="80"
          height="80"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[13.5px] font-semibold tracking-[-0.01em] text-brand-dark sm:text-[14.5px]">
          {doctor.name}
        </h3>
        <p className="mt-0.5 text-[10.5px] font-medium tracking-wide text-brand-subtext/45 sm:text-[11px]">
          Reg. {doctor.registrationNo}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-[11.5px] text-brand-subtext sm:text-[12px]">
          <span className="max-w-[140px] truncate">{doctor.specialization}</span>
          <span className="select-none text-border" aria-hidden="true">
            ·
          </span>
          <span className="whitespace-nowrap">{doctor.experience} yrs</span>
        </div>

        {doctor.availableToday ? (
          <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-full bg-green-50/80 px-2.5 py-1 text-[11px] font-medium text-green-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
            Available today
          </div>
        ) : (
          <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-full bg-brand-bg px-2.5 py-1 text-[11px] font-medium text-brand-subtext">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-subtext/40" />
            Next slot tomorrow
          </div>
        )}
      </div>
    </button>
  )
}

export default function DoctorsPreview({ onOpenDirectory, onBook }) {
  return (
    <section id="doctors" className="scroll-mt-24 bg-brand-bg py-12 sm:py-16 md:py-20">
      <div className="container-main">
        <Reveal className="mb-12 flex flex-col items-center text-center sm:mb-16">
          <span className="inline-flex items-center rounded-full border border-brand/15 bg-white px-3.5 py-1 text-[11px] font-semibold tracking-wide text-brand sm:text-[12px]">
            Our Doctors
          </span>
          <h2 className="mt-4 font-display text-[clamp(1.4rem,3vw,2.25rem)] font-bold leading-[1.1] text-brand-dark">
            Meet the Experts
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[13px] leading-relaxed text-brand-subtext sm:text-[14px]">
            Experienced homeopaths, verified credentials, and care that fits around your life.
          </p>
        </Reveal>
      </div>

      <Reveal delay={80} className="flex items-center gap-3 overflow-x-auto scroll-smooth px-4 pb-2 no-scrollbar sm:gap-4 sm:px-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} onBook={onBook} />
        ))}

        <button
          type="button"
          onClick={onOpenDirectory}
          className="group hidden shrink-0 items-center gap-1.5 whitespace-nowrap px-4 text-[13px] font-medium text-brand-subtext transition-colors duration-200 hover:text-brand-dark sm:inline-flex"
        >
          View all
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </Reveal>

      <div className="container-main mt-6 sm:hidden">
        <button
          type="button"
          onClick={onOpenDirectory}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand-dark py-3.5 text-[14px] font-semibold text-white transition-colors active:bg-brand-dark/80"
        >
          View All Doctors
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>
    </section>
  )
}
