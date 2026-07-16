"use client"

import { useMemo } from "react"
import { motion } from "motion/react"

/**
 * Mandala — a rotationally symmetric sacred-geometry motif built procedurally.
 * Rendered as a subtle, decorative background element.
 */
export function Mandala({ className = "", petals = 16 }: { className?: string; petals?: number }) {
  const petalArray = useMemo(() => Array.from({ length: petals }), [petals])
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
    >
      <circle cx="100" cy="100" r="20" />
      <circle cx="100" cy="100" r="42" />
      <circle cx="100" cy="100" r="70" />
      <circle cx="100" cy="100" r="94" />
      {petalArray.map((_, i) => {
        const angle = (360 / petals) * i
        return (
          <g key={i} transform={`rotate(${angle} 100 100)`}>
            <path d="M100 6 C 118 40, 118 60, 100 82 C 82 60, 82 40, 100 6 Z" />
            <line x1="100" y1="82" x2="100" y2="30" />
          </g>
        )
      })}
    </svg>
  )
}

/**
 * Shipra-inspired flowing wave lines used as section dividers / accents.
 */
export function RiverWaves({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 160"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {[0, 18, 36].map((offset, i) => (
        <path
          key={i}
          d={`M0 ${80 + offset} C 240 ${40 + offset}, 480 ${120 + offset}, 720 ${80 + offset} S 1200 ${40 + offset}, 1440 ${80 + offset}`}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeOpacity={0.5 - i * 0.12}
        />
      ))}
    </svg>
  )
}

/**
 * Temple skyline silhouette (stylized shikhara spires) for footer / hero base.
 */
export function TempleSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 220"
      preserveAspectRatio="xMidYMax meet"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M0 220 V150 H60 L90 120 L110 150 H150 V90 L200 40 L250 90 V150 H300 L330 110 L360 150 H420 V70 L500 10 L580 70 V150 H630 L660 115 L690 150 H760 V95 L820 45 L880 95 V150 H930 L960 120 L985 150 H1050 V130 L1090 100 L1130 130 V150 H1200 V220 Z" />
    </svg>
  )
}

/**
 * Floating light particles — evokes drifting diya embers over the river.
 */
export function FloatingParticles({ count = 18 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: `${(i * 53) % 100}%`,
        size: 2 + ((i * 7) % 5),
        delay: (i % 6) * 1.5,
        duration: 14 + ((i * 3) % 10),
      })),
    [count],
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full bg-gold shadow-[0_0_8px_2px] shadow-gold/40"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

/**
 * Slowly rotating mandala wrapper used as an ambient hero backdrop.
 */
export function RotatingMandala({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ rotate: 360 }}
      transition={{ duration: 120, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    >
      <Mandala className="h-full w-full" petals={24} />
    </motion.div>
  )
}
