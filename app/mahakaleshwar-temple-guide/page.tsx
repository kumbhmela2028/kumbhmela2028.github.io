import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { pageMetadata } from "@/lib/seo"

const PATH = "/mahakaleshwar-temple-guide"

export const metadata: Metadata = pageMetadata({
  title: "Mahakaleshwar Temple Guide",
  description:
    "A visitor's guide to the Mahakaleshwar Jyotirlinga temple in Ujjain, including the Bhasma Aarti ritual and darshan etiquette.",
  path: PATH,
})

export default function MahakaleshwarTempleGuidePage() {
  return (
    <PageShell
      eyebrow="Temple Guide"
      title="Mahakaleshwar Temple Guide"
      path={PATH}
      intro="The Mahakaleshwar Jyotirlinga is the spiritual heart of Ujjain and one of the twelve Jyotirlingas of Lord Shiva, revered as a swayambhu (self-manifested) deity facing south."
    >
      <section>
        <h2>Significance</h2>
        <p>
          Mahakaleshwar is unique among the Jyotirlingas as the presiding deity of time itself,
          and the temple has been a center of devotion for centuries, drawing pilgrims from across
          India throughout the year — with numbers rising significantly during Simhastha Kumbh
          Mela.
        </p>
      </section>
      <section>
        <h2>The Bhasma Aarti</h2>
        <p>
          The temple's signature ritual is the pre-dawn Bhasma Aarti, in which the lingam is
          adorned with sacred ash. It is one of the most sought-after darshan experiences in
          Ujjain, and typically requires advance booking or arriving very early given the volume
          of devotees.
        </p>
      </section>
      <section>
        <h2>Visitor etiquette</h2>
        <ul>
          <li>Dress modestly and remove footwear before entering the sanctum areas</li>
          <li>Follow queue and security guidance from temple staff, especially during peak hours</li>
          <li>Photography restrictions may apply inside the sanctum — look for posted signage</li>
          <li>Expect longer wait times during festivals and the Simhastha period</li>
        </ul>
      </section>
    </PageShell>
  )
}
