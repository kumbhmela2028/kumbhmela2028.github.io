import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { Newsletter } from "@/components/newsletter"
import { pageMetadata } from "@/lib/seo"

const PATH = "/contact"

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch about Kumbh Mela 2028 in Ujjain. Subscribe for updates and official announcements as they're published.",
  path: PATH,
})

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Get in Touch"
      title="Contact"
      path={PATH}
      intro="This portal is in its early, pre-launch stage. Official contact channels — helpdesk numbers, email support, and social media accounts — will be published here as they go live ahead of Kumbh Mela 2028."
      afterMain={<Newsletter />}
    >
      <section>
        <h2>Stay updated in the meantime</h2>
        <p>
          The fastest way to hear from us is to subscribe below. We&apos;ll send announcements
          about official dates, travel guidance, and new resources as this site grows.
        </p>
      </section>
    </PageShell>
  )
}
