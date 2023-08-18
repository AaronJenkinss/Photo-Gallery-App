import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </head>

      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
