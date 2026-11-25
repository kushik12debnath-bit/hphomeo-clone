import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyHomeopathy from './components/WhyHomeopathy'
import Journey from './components/Journey'
import DoctorsPreview from './components/DoctorsPreview'
import HealSection from './components/HealSection'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import DoctorsDirectoryModal from './components/DoctorsDirectoryModal'
import AuthModal from './components/AuthModal'

export default function App() {
  const [directoryOpen, setDirectoryOpen] = useState(false)
  const [bookingDoctor, setBookingDoctor] = useState(null)
  const [authRole, setAuthRole] = useState(null)

  const scrollToDoctors = () => {
    document.getElementById('doctors')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const openDirectory = () => setDirectoryOpen(true)

  const openBooking = (doctor) => {
    setDirectoryOpen(false)
    setBookingDoctor(doctor)
  }

  const openAuth = (role) => setAuthRole(role)

  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-brand-dark focus:px-4 focus:py-2 focus:text-[13px] focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar onOpenDirectory={openDirectory} onLogin={openAuth} onBook={scrollToDoctors} />

      <main id="main">
        <Hero onBook={scrollToDoctors} />
        <WhyHomeopathy />
        <Journey />
        <DoctorsPreview onOpenDirectory={openDirectory} onBook={openBooking} />
        <HealSection />
      </main>

      <Footer onBook={scrollToDoctors} onLogin={openAuth} onOpenDirectory={openDirectory} />

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/40 bg-white/80 px-4 pt-3 pb-[calc(env(safe-area-inset-bottom)+12px)] backdrop-blur-md sm:hidden">
        <button
          type="button"
          onClick={scrollToDoctors}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#D8EE53] py-3.5 text-[15px] font-semibold text-brand-dark shadow-[0_8px_24px_rgba(216,238,83,0.35)] transition-all duration-300 active:scale-[0.98] active:bg-[#C5DA40]"
        >
          Book Consultation
          <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      <DoctorsDirectoryModal
        open={directoryOpen}
        onClose={() => setDirectoryOpen(false)}
        onBook={openBooking}
      />
      <BookingModal doctor={bookingDoctor} onClose={() => setBookingDoctor(null)} />
      <AuthModal initialRole={authRole} onClose={() => setAuthRole(null)} />
    </div>
  )
}
