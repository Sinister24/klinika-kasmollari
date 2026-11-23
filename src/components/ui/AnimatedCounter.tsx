import { useEffect, useRef } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

interface AnimatedCounterProps {
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function AnimatedCounter({ to, duration = 2, suffix = '', prefix = '', className = '' }: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const count = useMotionValue(0)
  const rounded = useSpring(count, { duration: duration * 1000, bounce: 0 })

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = prefix + Math.round(v).toLocaleString() + suffix
      }
    })
    return unsubscribe
  }, [rounded, prefix, suffix])

  useEffect(() => {
    count.set(to)
  }, [to, count])

  return (
    <span ref={nodeRef} className={className}>
      {prefix}0{suffix}
    </span>
  )
}
