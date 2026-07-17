import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { JsonLd } from "@/components/json-ld"
import { pageMetadata } from "@/lib/seo"
import { faqSchema } from "@/lib/structured-data"

const PATH = "/faq"

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about Kumbh Mela 2028 in Ujjain — dates, location, travel, accommodation, and how to stay updated.",
  path: PATH,
})

const faqs = [
  {
    question: "When is Kumbh Mela 2028 in Ujjain?",
    answer:
      "Simhastha Kumbh Mela 2028 in Ujjain is expected around April 2028, based on the astrological alignment of Jupiter in Simha (Leo) rashi. Official dates will be confirmed by the Madhya Pradesh government closer to the event, and this site will be updated as soon as they're announced.",
  },
  {
    question: "Where does Kumbh Mela 2028 take place?",
    answer:
      "The 2028 edition takes place in Ujjain, Madhya Pradesh, on the banks of the sacred Shipra River, centered around the Mahakaleshwar Jyotirlinga temple and the city's ghats.",
  },
  {
    question: "How do I get to Ujjain?",
    answer:
      "Ujjain is reachable by rail via Ujjain Junction, by road via National Highway 52, and by air through Indore's Devi Ahilyabai Holkar Airport, about 55 km away. See our how-to-reach-ujjain guide for details.",
  },
  {
    question: "Where can I stay during Kumbh Mela?",
    answer:
      "Options range from dharamshalas and ashrams to organized tent cities and hotels in Ujjain and nearby Indore. Availability tightens significantly during peak bathing dates, so early planning is recommended.",
  },
  {
    question: "How can I get official updates about Kumbh Mela 2028?",
    answer:
      "Subscribe from the homepage to receive updates as official dates, travel advisories, and pilgrim resources are announced.",
  },
]

export default function FaqPage() {
  return (
    <PageShell
      eyebrow="Support"
      title="Frequently Asked Questions"
      path={PATH}
      intro="Answers to common questions about Simhastha Kumbh Mela 2028 in Ujjain. This list will grow as official details are confirmed."
    >
      <JsonLd data={faqSchema(faqs)} />
      <div className="space-y-8">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <h2 className="font-serif text-xl font-bold text-foreground">{faq.question}</h2>
            <p className="mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
