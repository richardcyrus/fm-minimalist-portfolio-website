import '../styles/globals.scss'

import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Minimalist Portfolio | Frontend Mentor'
}

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
