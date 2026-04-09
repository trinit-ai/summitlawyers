import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Wait a tick for the new route's DOM to mount
    const setupId = setTimeout(() => {
      const els = document.querySelectorAll('.reveal:not(.visible)')
      if (!els.length) return

      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add('visible')
              io.unobserve(e.target)
            }
          }
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.01 },
      )
      els.forEach(el => io.observe(el))

      // Failsafe — if anything is still hidden after 1.2s, force-show it.
      // Keeps content from getting stuck if the observer misses an element.
      const failsafe = setTimeout(() => {
        document.querySelectorAll('.reveal:not(.visible)').forEach(el => el.classList.add('visible'))
      }, 1200)

      // Stash cleanup on the observer for the outer return
      io._failsafe = failsafe
      window.__revealIO = io
    }, 30)

    return () => {
      clearTimeout(setupId)
      const io = window.__revealIO
      if (io) {
        clearTimeout(io._failsafe)
        io.disconnect()
        window.__revealIO = null
      }
    }
  }, [pathname])
}
