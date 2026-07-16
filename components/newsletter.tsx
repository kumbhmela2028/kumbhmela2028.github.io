"use client"

import { type FormEvent, useState } from "react"
import { motion } from "motion/react"
import { CheckCircle2, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RotatingMandala } from "@/components/decorations"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success">("idle")
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmed = email.trim()

    if (!trimmed) {
      setError("Please enter your email address.")
      return
    }
    if (!EMAIL_REGEX.test(trimmed)) {
      setError("Please enter a valid email address.")
      return
    }

    setError(null)
    setStatus("success")
    setEmail("")
  }

  return (
    <section id="newsletter" className="relative overflow-hidden bg-navy py-20 md:py-28">
      {/* Decorative ambient mandala */}
      <RotatingMandala className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] text-gold/10" />
      <RotatingMandala className="pointer-events-none absolute -bottom-40 -right-24 h-[460px] w-[460px] text-primary/10" />

      <div className="relative mx-auto max-w-2xl px-4 text-center md:px-8">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold"
        >
          <Sparkles className="size-3.5" />
          Stay Connected
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-4 text-balance font-serif text-3xl font-bold text-white md:text-4xl"
        >
          Be the First to Know
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-pretty leading-relaxed text-white/70"
        >
          Receive updates about Simhastha Kumbh Mela 2028, travel guidance, announcements, and launch
          notifications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          {status === "success" ? (
            <div
              role="status"
              className="mx-auto flex max-w-md items-center gap-3 rounded-2xl border border-gold/40 bg-white/10 p-5 text-left backdrop-blur-sm"
            >
              <CheckCircle2 className="size-8 shrink-0 text-gold" />
              <div>
                <p className="font-semibold text-white">You&apos;re on the list!</p>
                <p className="text-sm text-white/70">
                  Thank you for subscribing. We&apos;ll keep you posted on Simhastha 2028.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-md">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-white/50" />
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (error) setError(null)
                    }}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "newsletter-error" : undefined}
                    className="h-12 w-full rounded-full border border-white/20 bg-white/10 pl-11 pr-4 text-white placeholder:text-white/50 backdrop-blur-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/40"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 rounded-full bg-primary px-8 font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Subscribe
                </Button>
              </div>
              {error && (
                <p id="newsletter-error" role="alert" className="mt-3 text-sm text-gold">
                  {error}
                </p>
              )}
              <p className="mt-3 text-xs text-white/50">
                We respect your privacy. No spam, only meaningful updates.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
