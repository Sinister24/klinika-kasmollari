import { useRef, useState, useCallback } from 'react'

interface BeforeAfterSliderProps {
  beforeSrc: string
  afterSrc:  string
  beforeLabel?: string
  afterLabel?:  string
  className?: string
}

export function BeforeAfterSlider({ beforeSrc, afterSrc, beforeLabel = 'Before', afterLabel = 'After', className = '' }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const onMouseDown = () => { dragging.current = true }
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) updatePosition(e.clientX) }
  const onMouseUp   = () => { dragging.current = false }
  const onTouchMove = (e: React.TouchEvent) => { updatePosition(e.touches[0].clientX) }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl cursor-col-resize select-none ${className}`}
      style={{ aspectRatio: '1 / 1' }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
    >
      {/* After (base layer) */}
      <img src={afterSrc} alt="After" className="absolute inset-0 w-full h-full object-cover" draggable={false} />

      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img src={beforeSrc} alt="Before" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${10000 / position}%`, maxWidth: 'none' }} draggable={false} />
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-teal-500 shadow-[0_0_15px_rgba(43,196,180,0.8)] z-10"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-teal-500 shadow-[0_0_20px_rgba(43,196,180,0.7)] flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
            <path d="M6 10l-4-4v8l4-4zm8 0l4 4V6l-4 4z"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 glass text-white text-xs font-semibold px-3 py-1 rounded-full z-10">{beforeLabel}</span>
      <span className="absolute top-3 right-3 glass text-teal-400 text-xs font-semibold px-3 py-1 rounded-full z-10">{afterLabel}</span>
    </div>
  )
}
