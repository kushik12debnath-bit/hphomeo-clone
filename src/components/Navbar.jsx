import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { navLinks } from '../data/mockData'
import useScrollLock from '../hooks/useScrollLock'

export default function Navbar({ onOpenDirectory, onLogin, onBook }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useScrollLock(menuOpen)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const handleNavClick = (link) => (event) => {
    closeMenu()
    if (link.type === 'directory') {
      event.preventDefault()
      onOpenDirectory()
    }
  }

  const handleBook = () => {
    closeMenu()
    onBook()
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="h-14 sm:h-16 md:h-[68px]" aria-hidden="true" />

      <nav
        aria-label="Main navigation"
        className={`absolute left-1/2 top-3 flex h-12 w-[calc(100%-1.5rem)] max-w-[820px] -translate-x-1/2 items-center justify-between rounded-full px-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:top-4 sm:h-[52px] sm:w-[calc(100%-2rem)] sm:px-4 ${
          scrolled || menuOpen
            ? 'border border-border/50 bg-white/75 shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-2xl'
            : 'border border-white/60 bg-white/40 shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md'
        }`}
      >
        <a href="#home" className="flex shrink-0 items-center" onClick={closeMenu} aria-label="hpHomeo home">
          <img
            src="/images/logo.svg"
            alt="hpHomeo Logo"
            width="120"
            height="40"
            className="h-7 w-auto sm:h-8"
          />
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={handleNavClick(link)}
                className="rounded-full px-3 py-1.5 text-[13px] font-medium text-brand-ink-soft transition-all duration-200 hover:bg-brand-dark/[0.04] hover:text-brand-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2.5 md:flex">
          <div className="flex items-center text-[13px] font-medium">
            <button
              type="button"
              onClick={() => onLogin('patient')}
              className="rounded-full px-2.5 py-1.5 text-brand-ink-soft transition-colors duration-200 hover:text-brand-dark"
            >
              Patient
            </button>
            <span className="select-none text-border" aria-hidden="true">
              /
            </span>
            <button
              type="button"
              onClick={() => onLogin('doctor')}
              className="rounded-full px-2.5 py-1.5 text-brand-ink-soft transition-colors duration-200 hover:text-brand-dark"
            >
              Doctor
            </button>
          </div>

          <button
            type="button"
            onClick={handleBook}
            className="group inline-flex items-center gap-1.5 rounded-full bg-brand-accent py-1.5 pl-4 pr-3 text-[13px] font-semibold text-brand-dark transition-all duration-200 hover:bg-[#d0e64b]"
          >
            Start Healing
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-brand-dark/[0.05] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          menuOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-brand-dark/20 backdrop-blur-sm" onClick={closeMenu} aria-hidden="true" />

        <div
          className={`absolute left-1/2 top-3 w-[calc(100%-1.5rem)] -translate-x-1/2 rounded-2xl border border-border/40 bg-white/95 shadow-[0_16px_48px_rgba(0,0,0,0.12)] backdrop-blur-2xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            menuOpen ? 'translate-y-0 scale-100' : '-translate-y-3 scale-[0.97]'
          }`}
        >
          <div className="flex h-14 items-center justify-between border-b border-border/30 px-5">
            <a href="#home" className="flex items-center" onClick={closeMenu} aria-label="hpHomeo home">
              <img src="/images/logo.svg" alt="hpHomeo Logo" width="120" height="40" className="h-7 w-auto" />
            </a>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-brand-bg"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X className="h-[18px] w-[18px]" />
            </button>
          </div>

          <div className="flex flex-col gap-0.5 px-3 py-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick(link)}
                className="rounded-xl px-3 py-3 text-[15px] font-medium text-brand-ink-soft transition-colors hover:bg-brand-bg active:bg-brand-bg"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mx-3 flex flex-col gap-2 border-t border-border/30 px-0 pb-4 pt-1">
            <div className="flex gap-2 pt-3">
              <button
                type="button"
                onClick={() => {
                  closeMenu()
                  onLogin('patient')
                }}
                className="flex-1 rounded-xl border border-border/60 px-4 py-3 text-center text-[14px] font-semibold text-brand-ink-soft transition-colors hover:bg-brand-bg"
              >
                Patient login
              </button>
              <button
                type="button"
                onClick={() => {
                  closeMenu()
                  onLogin('doctor')
                }}
                className="flex-1 rounded-xl border border-border/60 px-4 py-3 text-center text-[14px] font-semibold text-brand-ink-soft transition-colors hover:bg-brand-bg"
              >
                Doctor login
              </button>
            </div>

            <button
              type="button"
              onClick={handleBook}
              className="group flex items-center justify-center gap-2 rounded-xl bg-brand-accent px-4 py-3 text-[14px] font-semibold text-brand-dark transition-colors active:bg-[#d0e64b]"
            >
              Start Healing
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
