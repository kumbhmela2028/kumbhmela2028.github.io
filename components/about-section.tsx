"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { CalendarDays, Droplets, Users } from "lucide-react"

const stats = [
  { icon: CalendarDays, value: "Every 12 Years", label: "Sacred cycle in Ujjain" },
  { icon: Users, value: "Millions", label: "Pilgrims from across the world" },
  { icon: Droplets, value: "Shipra River", label: "The holy bathing ritual" },
]

export function AboutSection() {
  return (
    <section id="about" className="relative bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8 lg:gap-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src="/images/shipra-ghats.png"
              alt="Diya lamps floating on the sacred Shipra river ghats at dawn in Ujjain"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-card px-6 py-4 shadow-lg sm:block">
            <p className="font-serif text-2xl font-bold text-primary">2028</p>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              The Next Kumbh Mela
            </p>
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            About Kumbh Mela 2028
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            A timeless confluence of devotion and heritage
          </h2>
          <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Once every twelve years, the ancient city of Ujjain hosts Kumbh Mela — known locally
              as Simhastha — a sacred gathering that draws millions of pilgrims, saints, and
              seekers to the banks of the holy Shipra River.
            </p>
            <p>
              The ritual bath in the Shipra is believed to cleanse the spirit and mark a moment of
              profound renewal. Beyond the rituals, Simhastha is a living celebration of India&apos;s
              rich cultural, philosophical, and religious traditions.
            </p>
            <p>
              As Ujjain prepares to welcome the world in 2028, this portal will grow into a trusted
              companion for every visitor and pilgrim.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="rounded-2xl border border-border bg-secondary/50 p-4"
              >
                <stat.icon className="size-5 text-primary" />
                <p className="mt-2 font-serif text-lg font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
