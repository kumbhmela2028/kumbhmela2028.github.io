// Regenerates the placeholder brand icon mark + OG image as PNGs.
// Usage:
//   node scripts/generate-brand-images.mjs
//   sips -s format jpeg -s formatOptions 88 /tmp/og-image-source.png --out public/og-image.jpg
//   sips -z 512 512 /tmp/icon-mark-512.png --out public/android-chrome-512x512.png
//   sips -z 192 192 /tmp/icon-mark-512.png --out public/android-chrome-192x192.png
//   sips -z 180 180 /tmp/icon-mark-512.png --out public/apple-icon.png
//   sips -z 32 32 /tmp/icon-mark-512.png --out /tmp/favicon-32.png && sips -s format ico /tmp/favicon-32.png --out public/favicon.ico
// Replace with real photography/artwork when available — this is a code-generated placeholder.
import { ImageResponse } from 'next/dist/server/og/image-response.js'
import { writeFile } from 'node:fs/promises'

const NAVY = '#0d1b2a'
const SAFFRON = '#ff7a00'
const GOLD = '#f5c542'

function mandalaRays(count, radius) {
  return Array.from({ length: count }).map((_, i) => {
    const angle = (360 / count) * i
    return {
      type: 'div',
      key: i,
      props: {
        style: {
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: 3,
          height: radius,
          background: GOLD,
          transformOrigin: 'top left',
          transform: `rotate(${angle}deg)`,
          borderRadius: 3,
        },
      },
    }
  })
}

async function generateIcon() {
  const size = 512
  const rayLen = size * 0.36
  const res = new ImageResponse(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: NAVY,
          borderRadius: size * 0.2,
        },
        children: {
          type: 'div',
          props: {
            style: {
              position: 'relative',
              width: rayLen * 2,
              height: rayLen * 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            children: [
              ...mandalaRays(8, rayLen),
              {
                type: 'div',
                props: {
                  style: {
                    width: size * 0.26,
                    height: size * 0.26,
                    borderRadius: '50%',
                    background: SAFFRON,
                    display: 'flex',
                  },
                },
              },
            ],
          },
        },
      },
    },
    { width: size, height: size },
  )
  await writeFile('/tmp/icon-mark-512.png', Buffer.from(await res.arrayBuffer()))
}

async function generateOgImage() {
  const width = 1200
  const height = 630
  const rayLen = 90
  const res = new ImageResponse(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '0 90px',
          background: `linear-gradient(135deg, ${NAVY} 0%, #132842 60%, ${NAVY} 100%)`,
          position: 'relative',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                top: 64,
                right: 90,
                width: rayLen * 2,
                height: rayLen * 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
              children: [
                ...mandalaRays(8, rayLen),
                {
                  type: 'div',
                  props: {
                    style: {
                      width: 46,
                      height: 46,
                      borderRadius: '50%',
                      background: SAFFRON,
                      display: 'flex',
                    },
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                fontSize: 30,
                fontWeight: 700,
                letterSpacing: 6,
                textTransform: 'uppercase',
                color: GOLD,
              },
              children: 'Ujjain • Madhya Pradesh • India',
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                marginTop: 22,
                fontSize: 88,
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.05,
              },
              children: 'Kumbh Mela 2028',
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                marginTop: 8,
                fontSize: 52,
                fontWeight: 700,
                color: SAFFRON,
              },
              children: 'Ujjain',
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                marginTop: 28,
                fontSize: 30,
                color: '#e7ddca',
                maxWidth: 820,
              },
              children: 'Travel Guide, Pilgrim Information & Updates',
            },
          },
        ],
      },
    },
    { width, height },
  )
  await writeFile('/tmp/og-image-source.png', Buffer.from(await res.arrayBuffer()))
}

await generateIcon()
await generateOgImage()
console.log('Generated /tmp/icon-mark-512.png and /tmp/og-image-source.png')
