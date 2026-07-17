"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"

// Placeholder launch/event date — easily modified later.
// Simhastha Kumbh Mela is expected in April 2028.
export const EVENT_DATE = new Date("2028-04-01T00:00:00+05:30")

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number }

function getTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now())
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

export function Countdown({ target = EVENT_DATE }: { target?: Date }) {
  // Start null to avoid hydration mismatch, then hydrate on the client.
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTimeLeft(getTimeLeft(target))
    const id = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units: { label: string; value: number }[] = [
    { label: "Days", value: timeLeft?.days ?? 0 },
    { label: "Hours", value: timeLeft?.hours ?? 0 },
    { label: "Minutes", value: timeLeft?.minutes ?? 0 },
    { label: "Seconds", value: timeLeft?.seconds ?? 0 },
  ]

  return (
    <div
      className="grid grid-cols-4 gap-2 sm:gap-4"
      role="timer"
      aria-label="Countdown to Kumbh Mela 2028 Ujjain"
    >
      {units.map((unit, i) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * i, duration: 0.5 }}
          className="flex flex-col items-center rounded-2xl border border-border/70 bg-card/70 px-2 py-3 backdrop-blur-sm sm:px-4 sm:py-5"
        >
          <span className="font-serif text-2xl font-bold tabular-nums text-foreground sm:text-4xl md:text-5xl">
            {timeLeft ? String(unit.value).padStart(2, "0") : "--"}
          </span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
