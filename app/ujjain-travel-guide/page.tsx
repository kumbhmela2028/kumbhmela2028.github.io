import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { pageMetadata } from "@/lib/seo"

const PATH = "/ujjain-travel-guide"

export const metadata: Metadata = pageMetadata({
  title: "Ujjain Travel Guide",
  description:
    "Plan your visit to Ujjain for Kumbh Mela 2028 with tips on when to go, getting around the city, and what to pack for the pilgrimage.",
  path: PATH,
})

export default function UjjainTravelGuidePage() {
  return (
    <PageShell
      eyebrow="Travel Guide"
      title="Ujjain Travel Guide"
      path={PATH}
      intro="Ujjain is one of India's oldest continuously inhabited cities and one of the seven sacred Sapta Puri cities of Hinduism. Here's what to know before you plan your trip for Kumbh Mela 2028."
    >
      <section>
        <h2>Best time to visit</h2>
        <p>
          The main Simhastha Kumbh Mela events will draw the largest crowds around the principal
          bathing dates, while the shoulder periods before and after offer a calmer experience of
          the city's temples and ghats. Ujjain's summers are hot, so early morning and evening
          hours are generally the most comfortable for sightseeing.
        </p>
      </section>
      <section>
        <h2>Getting around the city</h2>
        <p>
          Central Ujjain, including the Mahakaleshwar Temple and the Shipra ghats, is compact and
          largely walkable. Auto-rickshaws and app-based cabs cover longer distances, and during
          the Mela period, expect temporary traffic diversions and dedicated pilgrim walking
          routes managed by local authorities.
        </p>
      </section>
      <section>
        <h2>What to pack</h2>
        <ul>
          <li>Comfortable, weather-appropriate clothing and sturdy walking footwear</li>
          <li>A reusable water bottle and basic first-aid essentials</li>
          <li>Modest attire suitable for temple visits</li>
          <li>A copy of valid ID for travel and accommodation check-ins</li>
        </ul>
      </section>
    </PageShell>
  )
}
