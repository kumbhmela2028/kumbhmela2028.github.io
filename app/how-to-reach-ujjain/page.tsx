import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { pageMetadata } from "@/lib/seo"

const PATH = "/how-to-reach-ujjain"

export const metadata: Metadata = pageMetadata({
  title: "How to Reach Ujjain",
  description:
    "Air, rail, and road options for reaching Ujjain for Kumbh Mela 2028, including the nearest airport and major railway connections.",
  path: PATH,
})

export default function HowToReachUjjainPage() {
  return (
    <PageShell
      eyebrow="Getting Here"
      title="How to Reach Ujjain"
      path={PATH}
      intro="Ujjain is well connected by rail and road, with the nearest major airport in neighboring Indore. Here's an overview of your options for reaching the city."
    >
      <section>
        <h2>By air</h2>
        <p>
          Devi Ahilyabai Holkar Airport in Indore, roughly 55 km from Ujjain, is the nearest
          airport with regular domestic flights and select international connections. From
          Indore, Ujjain is reachable by taxi or bus in about 1.5–2 hours.
        </p>
      </section>
      <section>
        <h2>By rail</h2>
        <p>
          Ujjain Junction is a major railway station on the Western Railway network with direct
          trains from cities including Delhi, Mumbai, Ahmedabad, and Indore. During Kumbh Mela,
          expect special pilgrim trains and additional services to be announced by Indian
          Railways.
        </p>
      </section>
      <section>
        <h2>By road</h2>
        <p>
          Ujjain sits on National Highway 52 and is well linked to Indore, Bhopal, and other
          major cities in Madhya Pradesh by state and private bus services. During the Mela
          period, temporary parking zones and shuttle services are typically set up on the
          outskirts of the city to manage traffic.
        </p>
      </section>
    </PageShell>
  )
}
