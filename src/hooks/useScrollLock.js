import { useEffect, useState } from 'react'

let lockCount = 0
let originalOverflow = ''

export default function useScrollLock(locked) {
  useEffect(() => {
    if (!locked) return undefined

    if (lockCount === 0) {
      originalOverflow = document.body.style.overflow
    }
    lockCount += 1
    document.body.style.overflow = 'hidden'

    return () => {
      lockCount -= 1
      if (lockCount === 0) {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [locked])
}
