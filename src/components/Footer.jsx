import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { contact, footerLinks } from '../data/mockData'

export default function Footer({ onBook, onLogin, onOpenDirectory }) {
  return (
    <footer className="bg-[#111]">
      <div className="container-main pb-12 pt-14 text-center sm:pb-16 sm:pt-20 md:pt-24">
        <h3 className="text-[clamp(1.4rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
          Ready to get started?
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[13.5px] leading-relaxed text-white/40 sm:text-[15px]">
          Book an appointment with our expert homeopaths and experience natural healthcare from
          home.
        </p>
        <button
          type="button"
          onClick={onBook}
          className="group mt-7 inline-flex items-center justify-center gap-2.5 rounded-2xl bg-brand-accent px-8 py-3.5 text-[14px] font-semibold text-brand-dark shadow-[0_12px_40px_rgba(216,238,83,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_50px_rgba(216,238,83,0.25)] sm:mt-8 sm:px-9 sm:py-4 sm:text-[15px]"
        >
          Book an Appointment
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      <div className="container-main">
        <div className="border-t border-white/[0.06]" />
      </div>

      <div className="container-main py-10 sm:py-14">
        <div className="mb-8 sm:mb-10">
          <img
            src="/images/logo.svg"
            alt="hpHomeo"
            width="120"
            height="40"
            loading="lazy"
            className="h-7 w-auto brightness-0 invert sm:h-8"
          />
          <p className="mt-3 max-w-xs text-[12px] leading-relaxed text-white/35 sm:text-[13px]">
            Expert homeopathic healthcare, delivered digitally.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12">
          <div>
            <h4 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25 sm:text-[11px]">
              Quick Links
            </h4>
            <div className="flex flex-col items-start gap-2.5">
              <button
                type="button"
                onClick={onOpenDirectory}
                className="text-[12px] text-white/40 transition-colors hover:text-white/80 sm:text-[13px]"
              >
                Find Doctors
              </button>
              <a
                href="#how-it-works"
                className="text-[12px] text-white/40 transition-colors hover:text-white/80 sm:text-[13px]"
              >
                How It Works
              </a>
              <button
                type="button"
                onClick={() => onLogin('patient')}
                className="text-[12px] text-white/40 transition-colors hover:text-white/80 sm:text-[13px]"
              >
                Patient Login
              </button>
              <button
                type="button"
                onClick={() => onLogin('doctor')}
                className="text-[12px] text-white/40 transition-colors hover:text-white/80 sm:text-[13px]"
              >
                Doctor Login
              </button>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25 sm:text-[11px]">
              Legal
            </h4>
            <div className="flex flex-col items-start gap-2.5">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[12px] text-white/40 transition-colors hover:text-white/80 sm:text-[13px]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25 sm:text-[11px]">
              Contact
            </h4>
            <div className="flex flex-col gap-2.5">
              <p className="text-[12px] leading-[1.7] text-white/40 sm:text-[13px]">
                {contact.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-[12px] text-white/40 transition-colors hover:text-white/80 sm:text-[13px]"
              >
                <Mail className="h-3.5 w-3.5" />
                {contact.email}
              </a>
              <a
                href={contact.phoneHref}
                className="inline-flex items-center gap-2 text-[12px] text-white/40 transition-colors hover:text-white/80 sm:text-[13px]"
              >
                <Phone className="h-3.5 w-3.5" />
                {contact.phone}
              </a>
              <span className="inline-flex items-center gap-2 text-[12px] text-white/40 sm:text-[13px]">
                <MapPin className="h-3.5 w-3.5" />
                Kolkata, West Bengal
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-main">
        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/[0.06] pb-24 pt-6 sm:flex-row sm:pb-6">
          <p className="text-[11px] text-white/20 sm:text-[12px]">
            © {new Date().getFullYear()} hpHomeo. All rights reserved.
          </p>
          <p className="text-[11px] text-white/20 sm:text-[12px]">
            Made with care in Kolkata · Designed &amp; built by{' '}
            <a
              href="https://github.com/kushik12debnath-bit"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-white/40 transition-colors hover:text-brand-accent"
            >
              Kaushik Debnath
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
