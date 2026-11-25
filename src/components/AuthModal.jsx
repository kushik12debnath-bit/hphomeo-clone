import { useEffect, useState } from 'react'
import { CheckCircle2, Lock, Mail, Stethoscope, User } from 'lucide-react'
import Modal from './Modal'

export default function AuthModal({ initialRole, onClose }) {
  const [role, setRole] = useState(initialRole || 'patient')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (initialRole) {
      setRole(initialRole)
      setSubmitted(false)
      setEmail('')
      setPassword('')
    }
  }, [initialRole])

  const isPatient = role === 'patient'

  return (
    <Modal open={Boolean(initialRole)} onClose={onClose} labelledBy="auth-title" className="max-w-md">
      {submitted ? (
        <div className="px-7 pb-9 pt-12 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h2 id="auth-title" className="mt-4 text-[21px] font-bold text-brand-dark">
            You&apos;re all set
          </h2>
          <p className="mx-auto mt-2 max-w-xs text-[13px] leading-relaxed text-brand-subtext">
            This is a UI demo, so authentication isn&apos;t connected. In the live product you
            would now be inside your {isPatient ? 'patient' : 'doctor'} dashboard.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-brand-dark px-6 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-brand-dark/90"
          >
            Back to browsing
          </button>
        </div>
      ) : (
        <>
          <div className="border-b border-border/50 px-6 pb-5 pt-6 pr-14">
            <h2 id="auth-title" className="text-[21px] font-bold text-brand-dark">
              Welcome back
            </h2>
            <p className="mt-1 text-[12.5px] leading-relaxed text-brand-subtext">
              Sign in to manage appointments, prescriptions and follow-ups.
            </p>
          </div>

          <div className="px-6 pb-7 pt-5">
            <div className="grid grid-cols-2 gap-2 rounded-xl bg-brand-bg p-1">
              {[
                { id: 'patient', label: 'Patient', Icon: User },
                { id: 'doctor', label: 'Doctor', Icon: Stethoscope },
              ].map((item) => {
                const active = role === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRole(item.id)}
                    aria-pressed={active}
                    className={`inline-flex items-center justify-center gap-1.5 rounded-lg py-2.5 text-[12.5px] font-semibold transition-all ${
                      active
                        ? 'bg-white text-brand-dark shadow-sm'
                        : 'text-brand-subtext hover:text-brand-dark'
                    }`}
                  >
                    <item.Icon className="h-3.5 w-3.5" />
                    {item.label}
                  </button>
                )
              })}
            </div>

            <form
              className="mt-5 space-y-3.5"
              onSubmit={(event) => {
                event.preventDefault()
                setSubmitted(true)
              }}
            >
              <div>
                <label htmlFor="auth-email" className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-subtext/70">
                  Email address
                </label>
                <div className="relative mt-1.5">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-subtext/40" />
                  <input
                    id="auth-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={isPatient ? 'you@example.com' : 'doctor@clinic.com'}
                    className="w-full rounded-xl border border-border/70 bg-white py-2.5 pl-10 pr-3.5 text-[13px] text-brand-dark placeholder:text-brand-subtext/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="auth-password" className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-subtext/70">
                  Password
                </label>
                <div className="relative mt-1.5">
                  <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-subtext/40" />
                  <input
                    id="auth-password"
                    type="password"
                    required
                    minLength={6}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-border/70 bg-white py-2.5 pl-10 pr-3.5 text-[13px] text-brand-dark placeholder:text-brand-subtext/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-1 inline-flex w-full items-center justify-center rounded-xl bg-brand-dark px-6 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-brand-dark/90"
              >
                Continue as {isPatient ? 'patient' : 'doctor'}
              </button>
            </form>

            <p className="mt-4 text-center text-[10.5px] leading-relaxed text-brand-subtext/60">
              Demo interface only — no credentials are sent or stored.
            </p>
          </div>
        </>
      )}
    </Modal>
  )
}
