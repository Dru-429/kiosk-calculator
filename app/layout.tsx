import type { Metadata } from 'next'
import "./globals.css"

export const metadata: Metadata = {
  title: 'Kiosk Product Calculator',
  description: 'Parking Kiosk Product Calculator',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
