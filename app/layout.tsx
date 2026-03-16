import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lakshmi Krishna Sanjay — Full Stack Developer',
  description:
    'Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js. Building performant, accessible, and beautiful web applications.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Portfolio'],
  authors: [{ name: 'Lakshmi Krishna Sanjay' }],
  openGraph: {
    title: 'Lakshmi Krishna Sanjay — Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js.',
    type: 'website',
  },
  themeColor: '#0a0f1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
