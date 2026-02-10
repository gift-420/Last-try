import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tech Innovator | 3D Electronics Portfolio',
  description: 'Interactive 3D portfolio showcasing electronics and web development projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
