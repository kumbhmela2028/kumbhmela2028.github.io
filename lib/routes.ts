/**
 * Single source of truth for indexable routes. app/sitemap.ts reads this list,
 * so adding a new page here is enough to get it into sitemap.xml automatically.
 */
export const SITE_ROUTES: { path: string; priority: number; changeFrequency: 'daily' | 'weekly' | 'monthly' }[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/about-kumbh-mela-2028', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/ujjain-travel-guide', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/how-to-reach-ujjain', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/best-hotels-near-kumbh-mela', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/mahakaleshwar-temple-guide', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/kumbh-mela-history', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.6, changeFrequency: 'weekly' },
]
