import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Carlos Eduardo Lopes de Andrade | Tech Lead & Software Engineer',
  description: 'Tech Lead e Software Engineer com experiência em .NET, React e arquiteturas cloud-native. Especializado em microservices, Kubernetes e soluções AI.',
  keywords: ['Tech Lead', 'Software Engineer', '.NET', 'React', 'Cloud-native', 'Microservices', 'Kubernetes', 'AI'],
  authors: [{ name: 'Carlos Eduardo Lopes de Andrade' }],
  generator: 'v0.app',
  openGraph: {
    title: 'Carlos Eduardo Lopes de Andrade | Tech Lead & Software Engineer',
    description: 'Tech Lead e Software Engineer com experiência em .NET, React e arquiteturas cloud-native.',
    type: 'profile',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carlos Eduardo Lopes de Andrade',
    description: 'Tech Lead & Software Engineer',
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
