import { TempleSilhouette } from "@/components/decorations"

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Kumbh Mela", href: "/about-kumbh-mela-2028" },
  { label: "Ujjain Travel Guide", href: "/ujjain-travel-guide" },
  { label: "How to Reach Ujjain", href: "/how-to-reach-ujjain" },
  { label: "Hotels Near Kumbh Mela", href: "/best-hotels-near-kumbh-mela" },
  { label: "Mahakaleshwar Temple", href: "/mahakaleshwar-temple-guide" },
  { label: "History", href: "/kumbh-mela-history" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

const socials = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
  { label: "X", href: "#", icon: XIcon },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white/80">
      <TempleSilhouette className="pointer-events-none absolute inset-x-0 top-0 h-16 w-full text-navy opacity-0" />
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <MandalaMark />
              </span>
              <span className="font-serif text-lg font-bold text-white">
                Kumbh Mela 2028 Ujjain
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              The official pre-launch portal for one of the world&apos;s largest spiritual gatherings,
              on the sacred banks of the Shipra River.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer" className="flex flex-col items-center gap-3 md:items-start">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Explore</span>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Socials */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Follow</span>
            <div className="flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Development note */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-xs leading-relaxed text-white/55">
          This website is currently under development. Information displayed may be updated as
          official announcements become available.
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/50">
        © 2026 Kumbh Mela 2028 Ujjain. All Rights Reserved.
          {/* © 2028 Simhastha Kumbh Ujjain. All Rights Reserved. Designed and developed by{" "}
          <a
            href="https://www.linkedin.com/in/tanishqrawat17/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white/70 transition-colors hover:text-white"
          >
            Tanishq Rawat
          </a>
          . */}
        </div>
      </div>
    </footer>
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

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.57V8.43L15.82 12 9.6 15.57Z" />
    </svg>
  )
}
