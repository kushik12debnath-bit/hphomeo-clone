import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, Search, Star } from 'lucide-react'
import { doctors, specialties } from '../data/mockData'
import Modal from './Modal'

export default function DoctorsDirectoryModal({ open, onClose, onBook }) {
  const [query, setQuery] = useState('')
  const [specialty, setSpecialty] = useState('All')

  useEffect(() => {
    if (open) {
      setQuery('')
      setSpecialty('All')
    }
  }, [open])

  const filteredDoctors = useMemo(() => {
    const search = query.trim().toLowerCase()

    return doctors.filter((doctor) => {
      const matchesSpecialty = specialty === 'All' || doctor.specialization === specialty
      const haystack = [
        doctor.name,
        doctor.specialization,
        doctor.qualification,
        ...doctor.languages,
      ]
        .join(' ')
        .toLowerCase()

      return matchesSpecialty && (!search || haystack.includes(search))
    })
  }, [query, specialty])

  return (
    <Modal open={open} onClose={onClose} labelledBy="directory-title" className="max-w-4xl">
      <div className="border-b border-border/50 px-5 pb-5 pt-6 pr-14 sm:px-7 sm:pb-6">
        <span className="inline-flex items-center rounded-full border border-brand/15 bg-brand/[0.06] px-3 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-brand">
          Our Doctors
        </span>
        <h2 id="directory-title" className="mt-3 text-[22px] font-bold leading-tight text-brand-dark sm:text-[26px]">
          Find your homeopath
        </h2>
        <p className="mt-1.5 max-w-lg text-[13px] leading-relaxed text-brand-subtext">
          Search by name or concern, then pick a doctor to see their next available slots.
        </p>

        <div className="relative mt-4">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-subtext/50" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search doctors, specialities or languages…"
            aria-label="Search doctors"
            className="w-full rounded-xl border border-border/70 bg-brand-bg/40 py-3 pl-10 pr-4 text-[13px] text-brand-dark placeholder:text-brand-subtext/45 focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/15"
          />
        </div>

        <div className="no-scrollbar -mx-1 mt-3 flex gap-1.5 overflow-x-auto px-1 pb-1">
          {specialties.map((item) => {
            const active = specialty === item
            return (
              <button
                key={item}
                type="button"
                onClick={() => setSpecialty(item)}
                aria-pressed={active}
                className={`shrink-0 rounded-full border px-3 py-1.5 text-[11.5px] font-medium transition-all ${
                  active
                    ? 'border-brand bg-brand text-white shadow-[0_4px_12px_rgba(88,155,255,0.25)]'
                    : 'border-border/70 bg-white text-brand-subtext hover:border-brand/35 hover:text-brand-dark'
                }`}
              >
                {item}
              </button>
            )
          })}
        </div>
      </div>

      <div className="px-5 py-5 sm:px-7 sm:py-6">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[11.5px] font-medium text-brand-subtext">
            {filteredDoctors.length} {filteredDoctors.length === 1 ? 'doctor' : 'doctors'} available
          </p>
          <p className="hidden text-[11px] text-brand-subtext/60 sm:block">
            Verified credentials · Secure booking
          </p>
        </div>

        {filteredDoctors.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-brand-bg/40 px-6 py-14 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand">
              <Search className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-[15px] font-semibold text-brand-dark">No doctors found</h3>
            <p className="mt-1 max-w-xs text-[12.5px] leading-relaxed text-brand-subtext">
              Try a different name or clear the speciality filter to see everyone.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setSpecialty('All')
              }}
              className="mt-4 rounded-full bg-brand px-4 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-brand/90"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {filteredDoctors.map((doctor) => (
              <button
                key={doctor.id}
                type="button"
                onClick={() => onBook(doctor)}
                className="group flex items-start gap-3.5 rounded-2xl border border-border/60 bg-white p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[0_10px_28px_rgba(88,155,255,0.1)]"
              >
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  width="56"
                  height="56"
                  loading="lazy"
                  className="h-14 w-14 shrink-0 rounded-xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="truncate text-[13.5px] font-semibold text-brand-dark">
                        {doctor.name}
                      </h3>
                      <p className="mt-0.5 truncate text-[11.5px] text-brand-subtext">
                        {doctor.specialization} · {doctor.experience} yrs
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-brand-bg px-2 py-1 text-[11px] font-semibold text-brand-dark">
                      ₹{doctor.fee}
                    </span>
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10.5px] text-brand-subtext">
                    <span className="inline-flex items-center gap-1 font-medium text-brand-dark">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      {doctor.rating.toFixed(1)}
                      <span className="font-normal text-brand-subtext">({doctor.reviews})</span>
                    </span>
                    <span className="truncate">{doctor.qualification}</span>
                  </div>

                  <span className="mt-2.5 inline-flex items-center gap-1 text-[11.5px] font-semibold text-brand">
                    Book appointment
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </Modal>
  )
}
