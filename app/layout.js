import './globals.css'
import { Inter } from 'next/font/google'
 
const inter = Inter({
  weight: '300',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Lars Werner | Hoofdpagina',
  description: 'Mijn portofolio site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
