import type { ReactNode } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/structured-data"

export function PageShell({
  eyebrow,
  title,
  path,
  intro,
  children,
  afterMain,
  showFooter = true,
}: {
  eyebrow: string
  title: string
  path: string
  intro: string
  children?: ReactNode
  afterMain?: ReactNode
  showFooter?: boolean
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: title, path },
        ])}
      />
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 pb-24 pt-32 md:px-8 md:pt-40">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{title}</span>
        </nav>

        <span className="mt-6 block text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </span>
        <h1 className="mt-3 text-balance font-serif text-3xl font-bold text-foreground md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {intro}
        </p>

        <div className="mt-10 space-y-6 leading-relaxed text-muted-foreground [&_h2]:mt-8 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>

        {!afterMain && (
          <div className="mt-14 rounded-2xl border border-border bg-secondary/40 p-6">
            <p className="text-sm font-medium text-foreground">
              This page will be expanded with detailed, official information as Kumbh Mela 2028
              preparations progress.{" "}
              <Link href="/#newsletter" className="text-primary underline underline-offset-4">
                Subscribe from the homepage
              </Link>{" "}
              to get notified as updates are published.
            </p>
          </div>
        )}
      </main>
      {afterMain}
      {showFooter && <SiteFooter />}
    </>
  )
}
