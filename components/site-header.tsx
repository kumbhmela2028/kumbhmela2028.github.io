"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Menu, Moon, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Why Ujjain", href: "#why-ujjain" },
  { label: "Platform", href: "#platform" },
  { label: "Updates", href: "#newsletter" },
]

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle color theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="rounded-full text-foreground hover:bg-secondary"
    >
      {mounted && resolvedTheme === "dark" ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </Button>
  )
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md shadow-primary/30">
            <MandalaMark />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-base font-bold text-foreground md:text-lg">
              Simhastha Kumbh
            </span>
            <span className="text-[11px] font-medium uppercase tracking-widest text-primary">
              Ujjain 2028
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            className="hidden rounded-full bg-primary text-primary-foreground hover:bg-primary/90 sm:inline-flex"
          >
            <a href="#newsletter">Notify Me</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground/85 hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="#newsletter" onClick={() => setOpen(false)}>
                Notify Me
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

function MandalaMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="3" />
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={i}
          x1="12"
          y1="12"
          x2="12"
          y2="2"
          transform={`rotate(${i * 45} 12 12)`}
          strokeLinecap="round"
        />
      ))}
    </svg>
  )
}
