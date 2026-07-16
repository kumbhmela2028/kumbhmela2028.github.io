"use client"

import { motion } from "motion/react"
import { Flame, Landmark, Sparkles, Waves } from "lucide-react"
import { RiverWaves } from "@/components/decorations"

const reasons = [
  {
    icon: Flame,
    title: "Mahakaleshwar Jyotirlinga",
    description: "One of the twelve sacred Jyotirlingas, revered as the eternal guardian of Ujjain.",
  },
  {
    icon: Waves,
    title: "Shipra River",
    description: "The holy river central to Simhastha traditions and the sacred bathing rituals.",
  },
  {
    icon: Landmark,
    title: "Ancient Heritage",
    description: "One of India's oldest continuously inhabited cities, steeped in living history.",
  },
  {
    icon: Sparkles,
    title: "Spiritual Capital",
    description: "A timeless center of astronomy, culture, philosophy, and spirituality.",
  },
]

export function WhyUjjain() {
  return (
    <section id="why-ujjain" className="relative overflow-hidden bg-secondary/40 py-20 md:py-28">
      <RiverWaves className="pointer-events-none absolute inset-x-0 top-0 h-24 w-full text-river/20" />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why Ujjain
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            A city where the sacred and the eternal meet
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <motion.article
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.08 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <reason.icon className="size-7" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-bold text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
