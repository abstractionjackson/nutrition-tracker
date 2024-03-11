import type { Metadata } from 'next'
import './globals.css'
import NavMenuMain from './nav-menu-main'

export const metadata: Metadata = {
  title: 'Nutrition Tracker',
  description: 'Track your nutrition and improve your health',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <header className='w-full flex'>
          <h1 className='text-3xl m-auto my-4 mt-24'>
            {metadata.title as string}
          </h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
