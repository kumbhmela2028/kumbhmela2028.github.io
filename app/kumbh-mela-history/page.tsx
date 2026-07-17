import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { pageMetadata } from "@/lib/seo"

const PATH = "/kumbh-mela-history"

export const metadata: Metadata = pageMetadata({
  title: "History of Kumbh Mela",
  description:
    "The mythological origins and living history of Kumbh Mela, from the Samudra Manthan legend to its recognition as a UNESCO Intangible Cultural Heritage.",
  path: PATH,
})

export default function KumbhMelaHistoryPage() {
  return (
    <PageShell
      eyebrow="History & Heritage"
      title="History of Kumbh Mela"
      path={PATH}
      intro="Kumbh Mela is among the oldest continuously observed pilgrimage traditions in the world, with roots in mythology and a documented history spanning many centuries."
    >
      <section>
        <h2>The Samudra Manthan legend</h2>
        <p>
          According to Hindu mythology, gods and demons churned the cosmic ocean in search of
          amrita, the nectar of immortality. During the struggle that followed, drops of the
          nectar are believed to have fallen at four earthly locations — Prayagraj, Haridwar,
          Nashik, and Ujjain — which is why these four cities host the Kumbh Mela in rotation.
        </p>
      </section>
      <section>
        <h2>Simhastha in Ujjain</h2>
        <p>
          Ujjain's edition of the Kumbh Mela is called Simhastha, timed to the period when Jupiter
          resides in Simha (Leo) rashi according to Vedic astrology. Ujjain's association with
          astronomy and timekeeping — it has historically served as a reference meridian in Indian
          astronomy — adds particular significance to the festival held here.
        </p>
      </section>
      <section>
        <h2>A living heritage</h2>
        <p>
          In 2017, UNESCO inscribed Kumbh Mela on its Representative List of the Intangible
          Cultural Heritage of Humanity, recognizing it as the largest peaceful gathering of
          pilgrims on earth and a vital expression of India's cultural and spiritual continuity.
        </p>
      </section>
    </PageShell>
  )
}
