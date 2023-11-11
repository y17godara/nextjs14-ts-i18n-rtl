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
          <nav className='flex items-center justify-between bg-[#005085] px-12 text-gray-200 shadow-sm'>
            <div>
              <LocaleSwitcher />
            </div>
          </nav>
          <nav className=' flex items-center justify-between bg-[#f2f2f2] p-6 px-12 shadow-sm'>
            <div>
              <Link
                href={`/${lang}`}
                className='text-2xl font-bold text-gray-800 hover:text-black'
              >
                LOGO
              </Link>
            </div>
            <div className='flex flex-row gap-x-8'>
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
              <div>
                <Icons.menu />
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
