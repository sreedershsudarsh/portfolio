import { useEffect } from 'react'

// Watches every element with class reveal / reveal-left / reveal-right
// inside the given ref and adds "reveal-visible" once it scrolls into view.
export function useReveal(containerRef) {
  useEffect(() => {
    const root = containerRef?.current || document
    const els = root.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('reveal-visible')
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [containerRef])
}
