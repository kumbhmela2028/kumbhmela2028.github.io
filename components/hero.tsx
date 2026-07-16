"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { ArrowRight, Bell, MapPin, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Countdown } from "@/components/countdown"
import { FloatingParticles, RotatingMandala, TempleSilhouette } from "@/components/decorations"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Background image + overlays */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-ujjain.png"
          alt="Mahakaleshwar temple and the sacred Shipra river in Ujjain at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/50 to-transparent" />
        {/* Extra darkening behind the fixed header so the top blends smoothly */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-navy to-transparent" />
      </div>

      {/* Ambient decorations */}
      <RotatingMandala className="pointer-events-none absolute -right-24 top-24 -z-10 hidden h-[520px] w-[520px] text-gold/20 md:block" />
      <FloatingParticles count={20} />

      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pb-28 pt-32 text-center md:px-8 md:pt-40">
        {/* Location badge */}
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold backdrop-blur-sm"
        >
          <MapPin className="size-3.5" />
          Ujjain • Madhya Pradesh • India
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-4xl text-balance font-serif text-4xl font-bold leading-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Simhastha Kumbh Mela{" "}
          <span className="bg-gradient-to-r from-gold via-primary to-gold bg-clip-text text-transparent">
            Ujjain 2028
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
          className="mt-5 max-w-2xl text-pretty text-lg font-medium text-white/90 md:text-xl"
        >
          The Sacred Gathering of Faith, Culture &amp; Spirituality
        </motion.p>

        {/* Supporting paragraph */}
        <motion.p
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="show"
          className="mt-4 max-w-2xl text-pretty leading-relaxed text-white/75"
        >
          Preparations are underway for one of the world&apos;s largest spiritual gatherings. Stay
          connected for official updates, travel information, pilgrim resources, and much more.
        </motion.p>

        {/* Launching soon + countdown */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="show"
          className="mt-10 w-full max-w-xl rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md sm:p-7"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground shadow-lg shadow-primary/30">
            <Sparkles className="size-3.5" />
            Launching Soon
          </span>
          <p className="mt-4 text-sm font-medium text-white/70">Countdown to April 2028</p>
          <div className="mt-4">
            <Countdown />
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate="show"
          className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            render={<a href="#newsletter" />}
            size="lg"
            className="h-12 w-full rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 sm:w-auto"
          >
            <Bell className="size-4" />
            Notify Me
          </Button>
          <Button
            render={<a href="#about" />}
            size="lg"
            variant="outline"
            className="h-12 w-full rounded-full border-white/40 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:text-white sm:w-auto"
          >
            Learn About Ujjain
            <ArrowRight className="size-4" />
          </Button>
        </motion.div>
      </div>

      {/* Temple silhouette base */}
      <TempleSilhouette className="pointer-events-none absolute bottom-0 left-0 h-24 w-full text-background md:h-32" />
    </section>
  )
}
