import './globals.css'
import { Noto_Sans } from 'next/font/google'

const noto = Noto_Sans({
  weight: "300",
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Lichi',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  )
}
