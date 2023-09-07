import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Providers from '@/components/providers/providers'

const poppins = Poppins({
  weight: ['400','700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'DalyGames',
  description: 'Procure os melhores jogos do momento',
  keywords: ['jogos', 'games', 'videoGames'],
  openGraph: {
    images: [`${process.env.PROJECT_URL}/preview.png`]
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
      googleBot:{
        index: true,
        follow: true,
        noimageindex:true
      }
  }
}

import Header from '@/components/header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
