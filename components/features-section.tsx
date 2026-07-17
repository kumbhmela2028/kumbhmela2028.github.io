"use client"

import { motion } from "motion/react"
import {
  Bell,
  BedDouble,
  HeartHandshake,
  LifeBuoy,
  Map,
  MapPinned,
  ShoppingBag,
  Users,
} from "lucide-react"

const features = [
  { icon: Bell, title: "Event Updates", description: "Official announcements, schedules, and key dates as they are confirmed." },
  { icon: Map, title: "Travel Guides", description: "Routes, transport options, and planning tips for a smooth pilgrimage." },
  { icon: BedDouble, title: "Accommodation", description: "Verified stays, tent cities, and lodging information near the ghats." },
  { icon: LifeBuoy, title: "Pilgrim Assistance", description: "Guidance, safety information, and on-ground help for every visitor." },
  { icon: ShoppingBag, title: "Merchandise Store", description: "Authentic souvenirs and keepsakes celebrating Simhastha 2028." },
  { icon: MapPinned, title: "Local Attractions", description: "Temples, heritage sites, and cultural experiences around Ujjain." },
  { icon: Users, title: "Volunteer Opportunities", description: "Ways to contribute and serve during this historic gathering." },
  { icon: HeartHandshake, title: "Support Center", description: "A dedicated helpdesk for questions, resources, and visitor care." },
]

export function FeaturesSection() {
  return (
    <section id="platform" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            What You&apos;ll Find Here
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Everything you need for your journey, in one place
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            The full portal is on its way. Here&apos;s a preview of the resources that will support
            pilgrims and visitors ahead of Kumbh Mela 2028.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.05 * (i % 4), duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/20 text-primary">
                <feature.icon className="size-6" />
              </span>
              <h3 className="mt-4 font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
