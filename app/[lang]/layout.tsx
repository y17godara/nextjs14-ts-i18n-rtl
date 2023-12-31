import './globals.css'
import type { Metadata } from 'next'
import { Locale, i18n } from '@/i18n.config'
import Header from './components/Header'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html
    lang={params.lang}
    dir={params.lang === 'ar' ? 'rtl' : 'ltr'} // for ar only
    >
      <body className={' bg-[#f6f6f6] text-gray-700'}>
        <Header lang={params.lang} />
        <main>{children}</main>
      </body>
    </html>
  )
}
