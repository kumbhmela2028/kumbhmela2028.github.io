import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Simhastha Kumbh Mela Ujjain 2028 | Coming Soon',
  description:
    'Official information portal for Simhastha Kumbh Mela Ujjain 2028. Get updates, travel guidance, accommodation information, pilgrim support, and more.',
  keywords: [
    'Simhastha 2028',
    'Kumbh Mela Ujjain',
    'Ujjain Kumbh',
    'Mahakal',
    'Shipra River',
    'Ujjain Tourism',
    'Simhastha Kumbh Mela',
  ],
  authors: [{ name: 'Simhastha Kumbh Ujjain' }],
  openGraph: {
    title: 'Simhastha Kumbh Mela Ujjain 2028 | Coming Soon',
    description:
      'Official information portal for Simhastha Kumbh Mela Ujjain 2028. Get updates, travel guidance, accommodation information, pilgrim support, and more.',
    type: 'website',
    locale: 'en_IN',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf8f3' },
    { media: '(prefers-color-scheme: dark)', color: '#0a1420' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
