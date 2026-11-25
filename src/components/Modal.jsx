import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import useScrollLock from '../hooks/useScrollLock'

export default function Modal({
  open,
  onClose,
  children,
  className = '',
  labelledBy,
  hideClose = false,
}) {
  const panelRef = useRef(null)
  const lastFocused = useRef(null)
  useScrollLock(open)

  useEffect(() => {
    if (!open) return undefined

    lastFocused.current = document.activeElement

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    const focusTimer = window.setTimeout(() => panelRef.current?.focus(), 30)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      window.clearTimeout(focusTimer)
      if (lastFocused.current instanceof HTMLElement) lastFocused.current.focus()
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="absolute inset-0 animate-fade-in bg-brand-dark/50 backdrop-blur-sm" aria-hidden="true" />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        className={`relative max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-white shadow-[0_30px_90px_rgba(0,0,0,0.28)] outline-none animate-modal-in sm:rounded-3xl ${className}`}
      >
        {!hideClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-subtext shadow-sm ring-1 ring-border/60 backdrop-blur transition-colors hover:bg-brand-bg hover:text-brand-dark"
          >
            <X className="h-[18px] w-[18px]" />
          </button>
        )}
        {children}
      </div>
    </div>,
    document.body,
  )
}
