import type { Metadata } from 'next'

export const SITE_URL = 'https://kumbhmela2028.com'
export const SITE_NAME = 'Kumbh Mela 2028'

export const DEFAULT_TITLE =
  'Kumbh Mela 2028 Ujjain | Travel Guide, Pilgrim Information & Updates'

export const DEFAULT_DESCRIPTION =
  'Get the latest information about Ujjain Kumbh Mela 2028 including dates, travel guides, accommodation, rituals, events, merchandise and pilgrim support.'

export const DEFAULT_KEYWORDS = [
  'Kumbh Mela 2028',
  'Ujjain Kumbh Mela',
  'Simhastha 2028',
  'Ujjain Pilgrimage',
  'Mahakaleshwar Temple',
  'Kumbh Mela Travel Guide',
  'Kumbh Mela Ujjain',
  'Ujjain Tourism',
]

export const DEFAULT_OG_IMAGE = '/og-image.jpg'

/**
 * Builds page-level Metadata (title, description, canonical, OG, Twitter).
 * Child pages should always call this rather than hand-rolling openGraph/twitter,
 * since Next does not deep-merge those objects with the root layout's defaults.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_OG_IMAGE,
}: {
  title: string
  description: string
  path: string
  keywords?: string[]
  image?: string
}): Metadata {
  const url = `${SITE_URL}${path}`

  return {
    title,
    description,
    keywords: keywords ?? DEFAULT_KEYWORDS,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_IN',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
