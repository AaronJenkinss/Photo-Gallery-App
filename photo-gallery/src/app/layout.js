import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navigation/navbar'

import styles from './rootLayout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Photo Gallery',
  description: 'A photo gallery app.',
  icon: "/favicon.ico"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className={styles.main_content}>
          {children}
        </div>
      </body>
    </html>
  )
}
