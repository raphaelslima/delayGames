import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400','700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'DalyGames',
  description: 'Procure os melhores jogos do momento',
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
        <Header/>
        {children}
      </body>
    </html>
  )
}
