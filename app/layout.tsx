import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'
import Script from 'next/script'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import Chat from '@/components/Chat'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Algobasket',
  description: 'A Hub for Open-Source Enthusiasts & Makers',
  robots: { index: false, follow: false },
  icons: {
    icon: '/assets/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} d-flex flex-column h-100`}>
        <Menu />
        <main className="flex-shrink-0">
          {children}
        </main>
        <Chat />
        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}

