import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { pageMetadata } from "@/lib/seo"

const PATH = "/about-kumbh-mela-2028"

export const metadata: Metadata = pageMetadata({
  title: "About Kumbh Mela 2028",
  description:
    "Learn what Kumbh Mela is, why it rotates between four sacred cities, and why Ujjain hosts the Simhastha Kumbh Mela in 2028.",
  path: PATH,
})

export default function AboutKumbhMela2028Page() {
  return (
    <PageShell
      eyebrow="About Kumbh Mela"
      title="About Kumbh Mela 2028"
      path={PATH}
      intro="Kumbh Mela is one of the world's largest peaceful gatherings — a sacred festival rooted in Hindu mythology and centuries of tradition, drawing pilgrims, sadhus, and seekers to bathe in holy rivers at auspicious astrological moments."
    >
      <section>
        <h2>What is Kumbh Mela?</h2>
        <p>
          Kumbh Mela traces its origins to the legend of the Samudra Manthan, the churning of the
          cosmic ocean, during which drops of the nectar of immortality are said to have fallen at
          four locations on earth: Prayagraj, Haridwar, Nashik, and Ujjain. Bathing in the sacred
          waters at these sites during the Kumbh is believed to cleanse sins and bring spiritual
          liberation.
        </p>
      </section>
      <section>
        <h2>Why Ujjain, and why 2028?</h2>
        <p>
          The Kumbh Mela rotates among the four sites roughly every three years, with each city
          hosting its own edition once every twelve years based on specific planetary
          positions. In Ujjain, the festival is known as Simhastha — held when Jupiter enters
          Simha (Leo) rashi — and the next edition is expected in 2028 on the banks of the sacred
          Shipra River.
        </p>
      </section>
      <section>
        <h2>What to expect</h2>
        <p>
          Simhastha Kumbh Mela 2028 in Ujjain is expected to bring together millions of pilgrims
          for ritual bathing, processions of akharas (monastic orders), religious discourses, and
          cultural events across several weeks. This portal will publish official dates, rituals,
          and visitor information as they are confirmed by the authorities.
        </p>
      </section>
    </PageShell>
  )
}
