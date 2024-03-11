import NavMenuMain from './nav-menu-dash'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <header>
          <NavMenuMain></NavMenuMain>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
