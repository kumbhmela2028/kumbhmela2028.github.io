import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { pageMetadata } from "@/lib/seo"

const PATH = "/best-hotels-near-kumbh-mela"

export const metadata: Metadata = pageMetadata({
  title: "Best Hotels Near Kumbh Mela",
  description:
    "An overview of accommodation options near Kumbh Mela 2028 in Ujjain, from dharamshalas and tent cities to mid-range and premium hotels.",
  path: PATH,
})

export default function BestHotelsNearKumbhMelaPage() {
  return (
    <PageShell
      eyebrow="Accommodation"
      title="Best Hotels Near Kumbh Mela"
      path={PATH}
      intro="Accommodation near Simhastha Kumbh Mela 2028 will span everything from traditional dharamshalas to organized tent cities and hotels across Ujjain. Here's how to think about your options."
    >
      <section>
        <h2>Dharamshalas and ashrams</h2>
        <p>
          Many temple trusts and religious organizations operate dharamshalas near the ghats,
          offering simple, affordable lodging that's popular with pilgrims. These typically fill
          up quickly during peak bathing dates, so early booking or arrangement through your
          group's organization is advisable.
        </p>
      </section>
      <section>
        <h2>Tent cities</h2>
        <p>
          For major Kumbh Melas, authorities and private operators set up temporary tent cities
          offering a range of comfort levels, from basic shared tents to furnished en-suite
          options. Expect official tent city bookings to open closer to the event.
        </p>
      </section>
      <section>
        <h2>Hotels in Ujjain and Indore</h2>
        <p>
          Ujjain has a growing number of budget and mid-range hotels, while nearby Indore offers a
          wider selection including premium properties, roughly 1.5–2 hours away. Booking well in
          advance is strongly recommended as availability tightens significantly during the Mela
          period.
        </p>
      </section>
    </PageShell>
  )
}
