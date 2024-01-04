import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


// components 
import SIde_Nav from "@/src/components/ui/Navbar/SIde_Nav";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Notes',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} grid grid-cols-1 gap-8`}>
        <SIde_Nav />
        {children}
      </body>
    </html>
  )
}
