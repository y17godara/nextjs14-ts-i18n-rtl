import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './LocaleSwitcher'
import { Icons } from './global/Icons'

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)

  return (
    <>
      <header>
        <div className='relative'>
          <nav className='flex px-12 items-center justify-between bg-[#005085] text-gray-200 shadow-sm'>
            <div>
              <Icons.menu />
            </div>
            <div><LocaleSwitcher /></div>
          </nav>
          <nav className=' px-12 flex items-center justify-between bg-[#f2f2f2] p-6 shadow-sm'>
            <ul className='flex gap-x-8'>
              <li>
                <Link className='hover:text-black' href={`/${lang}`}>
                  {navigation.home}
                </Link>
              </li>
              <li>
                <Link className='hover:text-black' href={`/${lang}/about`}>
                  {navigation.about}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
