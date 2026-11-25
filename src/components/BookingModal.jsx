import { useEffect, useMemo, useState } from 'react'
import { CalendarDays, CheckCircle2, Clock3, MapPin, ShieldCheck, Video } from 'lucide-react'
import { consultationTypes, timeSlots } from '../data/mockData'
import Modal from './Modal'

function buildDates() {
  return Array.from({ length: 4 }, (_, index) => {
    const date = new Date()
    date.setDate(date.getDate() + index)
    return {
      id: date.toISOString().slice(0, 10),
      weekday: date.toLocaleDateString('en-IN', { weekday: 'short' }),
      day: date.toLocaleDateString('en-IN', { day: '2-digit' }),
      month: date.toLocaleDateString('en-IN', { month: 'short' }),
      full: date.toLocaleDateString('en-IN', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
      }),
    }
  })
}

export default function BookingModal({ doctor, onClose }) {
  const dates = useMemo(buildDates, [])
  const [type, setType] = useState('video')
  const [dateId, setDateId] = useState(dates[0].id)
  const [slot, setSlot] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', notes: '' })
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setType('video')
    setDateId(dates[0].id)
    setSlot('')
    setForm({ name: '', phone: '', notes: '' })
    setError('')
    setSubmitted(false)
  }, [doctor?.id, dates])

  if (!doctor) return null

  const selectedDate = dates.find((date) => date.id === dateId) ?? dates[0]
  const selectedType = consultationTypes.find((item) => item.id === type)

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
    if (error) setError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!slot) {
      setError('Please choose a time slot to continue.')
      return
    }
    if (!form.name.trim() || !form.phone.trim()) {
      setError('Please add your name and phone number.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <Modal open={Boolean(doctor)} onClose={onClose} labelledBy="booking-title" className="max-w-2xl">
      {submitted ? (
        <div className="px-6 pb-8 pt-12 text-center sm:px-10 sm:pb-10 sm:pt-14">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
            <CheckCircle2 className="h-9 w-9" />
          </div>
          <h2 id="booking-title" className="mt-5 text-[22px] font-bold text-brand-dark">
            Appointment requested
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-[13.5px] leading-relaxed text-brand-subtext">
            We&apos;ve received your request. The clinic will confirm your slot on WhatsApp
            shortly.
          </p>

          <div className="mx-auto mt-6 max-w-md rounded-2xl border border-border/60 bg-brand-bg/60 p-4 text-left">
            <div className="flex items-center gap-3">
              <img
                src={doctor.photo}
                alt={doctor.name}
                width="48"
                height="48"
                className="h-12 w-12 rounded-xl object-cover"
              />
              <div>
                <p className="text-[14px] font-semibold text-brand-dark">{doctor.name}</p>
                <p className="text-[11.5px] text-brand-subtext">{doctor.specialization}</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-2 text-[12.5px] text-brand-subtext sm:grid-cols-2">
              <p className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-brand" />
                {selectedDate.full}
              </p>
              <p className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-brand" />
                {slot}
              </p>
              <p className="flex items-center gap-2">
                {type === 'video' ? (
                  <Video className="h-4 w-4 text-brand" />
                ) : (
                  <MapPin className="h-4 w-4 text-brand" />
                )}
                {selectedType?.label}
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand" />₹{doctor.fee} consultation
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-brand-dark px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-brand-dark/90 sm:w-auto sm:px-10"
          >
            Done
          </button>
        </div>
      ) : (
        <>
          <div className="border-b border-border/50 px-5 pb-5 pt-6 pr-14 sm:px-7 sm:pb-6">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.15em] text-brand">
              Book a consultation
            </p>
            <h2 id="booking-title" className="mt-1 text-[20px] font-bold text-brand-dark sm:text-[23px]">
              Choose a time with {doctor.name}
            </h2>

            <div className="mt-4 flex items-center gap-3 rounded-2xl bg-brand-bg/70 p-3">
              <img
                src={doctor.photo}
                alt={doctor.name}
                width="56"
                height="56"
                className="h-14 w-14 rounded-xl object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13.5px] font-semibold text-brand-dark">
                  {doctor.name}
                </p>
                <p className="text-[11.5px] text-brand-subtext">
                  {doctor.specialization} · {doctor.experience} yrs · {doctor.qualification}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[15px] font-bold text-brand-dark">₹{doctor.fee}</p>
                <p className="text-[10.5px] text-brand-subtext">per session</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="px-5 pb-7 pt-5 sm:px-7 sm:pb-8">
            <fieldset>
              <legend className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-subtext/70">
                Consultation type
              </legend>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {consultationTypes.map((item) => {
                  const active = type === item.id
                  const Icon = item.id === 'video' ? Video : MapPin
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setType(item.id)}
                      aria-pressed={active}
                      className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-[12.5px] font-semibold transition-all ${
                        active
                          ? 'border-brand bg-brand text-white shadow-[0_6px_18px_rgba(88,155,255,0.22)]'
                          : 'border-border/70 bg-white text-brand-ink-soft hover:border-brand/40 hover:bg-brand-bg/60'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </button>
                  )
                })}
              </div>
            </fieldset>

            <fieldset className="mt-5">
              <legend className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-subtext/70">
                Pick a date
              </legend>
              <div className="mt-2 grid grid-cols-4 gap-2">
                {dates.map((date) => {
                  const active = date.id === dateId
                  return (
                    <button
                      key={date.id}
                      type="button"
                      onClick={() => setDateId(date.id)}
                      aria-pressed={active}
                      className={`rounded-xl border px-1 py-2.5 text-center transition-all ${
                        active
                          ? 'border-brand bg-brand/[0.08] text-brand'
                          : 'border-border/70 bg-white text-brand-subtext hover:border-brand/40'
                      }`}
                    >
                      <span className="block text-[10.5px] font-medium uppercase">{date.weekday}</span>
                      <span className="mt-0.5 block text-[15px] font-bold leading-none">{date.day}</span>
                      <span className="mt-1 block text-[10px]">{date.month}</span>
                    </button>
                  )
                })}
              </div>
            </fieldset>

            <fieldset className="mt-5">
              <legend className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-subtext/70">
                Available time slots
              </legend>
              <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-4">
                {timeSlots.map((time) => {
                  const active = slot === time
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => {
                        setSlot(time)
                        if (error) setError('')
                      }}
                      aria-pressed={active}
                      className={`rounded-lg border px-2 py-2 text-[11.5px] font-medium transition-all ${
                        active
                          ? 'border-brand bg-brand text-white'
                          : 'border-border/70 bg-white text-brand-ink-soft hover:border-brand/40 hover:bg-brand-bg/60'
                      }`}
                    >
                      {time}
                    </button>
                  )
                })}
              </div>
            </fieldset>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="booking-name" className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-subtext/70">
                  Your name
                </label>
                <input
                  id="booking-name"
                  type="text"
                  value={form.name}
                  onChange={updateField('name')}
                  placeholder="Full name"
                  className="mt-1.5 w-full rounded-xl border border-border/70 bg-white px-3.5 py-2.5 text-[13px] text-brand-dark placeholder:text-brand-subtext/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                />
              </div>
              <div>
                <label htmlFor="booking-phone" className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-subtext/70">
                  Phone number
                </label>
                <input
                  id="booking-phone"
                  type="tel"
                  value={form.phone}
                  onChange={updateField('phone')}
                  placeholder="+91 98xxx xxxxx"
                  className="mt-1.5 w-full rounded-xl border border-border/70 bg-white px-3.5 py-2.5 text-[13px] text-brand-dark placeholder:text-brand-subtext/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                />
              </div>
            </div>

            <div className="mt-3">
              <label htmlFor="booking-notes" className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-subtext/70">
                What would you like help with? <span className="normal-case tracking-normal text-brand-subtext/50">(optional)</span>
              </label>
              <textarea
                id="booking-notes"
                rows="2"
                value={form.notes}
                onChange={updateField('notes')}
                placeholder="Briefly describe your symptoms"
                className="mt-1.5 w-full resize-none rounded-xl border border-border/70 bg-white px-3.5 py-2.5 text-[13px] text-brand-dark placeholder:text-brand-subtext/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
              />
            </div>

            {error && (
              <p role="alert" className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-[12px] font-medium text-red-600">
                {error}
              </p>
            )}

            <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-center gap-1.5 text-[11px] text-brand-subtext">
                <ShieldCheck className="h-3.5 w-3.5 text-green-600" />
                No payment now. Pay after your consultation.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-brand-dark px-6 py-3 text-[13.5px] font-semibold text-white transition-all hover:bg-brand-dark/90 active:scale-[0.99]"
              >
                Confirm appointment
              </button>
            </div>
          </form>
        </>
      )}
    </Modal>
  )
}
