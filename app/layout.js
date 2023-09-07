import './globals.css'
import { Poppins } from 'next/font/google'
 
const poppins = Poppins({
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
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
