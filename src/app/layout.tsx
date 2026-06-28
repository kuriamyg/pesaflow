import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'PesaFlow — Track Every Shilling',
  description: 'The smart personal finance app for Kenya. Track spending, save with purpose, grow with AI coaching.',
  keywords: ['budget', 'Kenya', 'M-Pesa', 'finance', 'savings', 'KES'],
  authors: [{ name: 'PesaFlow' }],
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}