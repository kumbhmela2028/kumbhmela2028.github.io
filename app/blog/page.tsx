import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { pageMetadata } from "@/lib/seo"

const PATH = "/blog"

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Articles, travel tips, and updates about Kumbh Mela 2028 in Ujjain — coming soon.",
  path: PATH,
})

export default function BlogPage() {
  return (
    <PageShell
      eyebrow="Blog"
      title="Kumbh Mela 2028 Blog"
      path={PATH}
      intro="Our blog will feature travel tips, historical deep-dives, ritual guides, and on-the-ground updates as Ujjain prepares to host Simhastha Kumbh Mela 2028."
    >
      <section>
        <h2>What to expect</h2>
        <p>
          Planned coverage includes practical travel planning guides, explainers on Kumbh Mela
          rituals and traditions, spotlights on Ujjain's heritage sites, and timely updates as
          official announcements are made. The first articles will be published as our editorial
          calendar comes together.
        </p>
      </section>
    </PageShell>
  )
}
