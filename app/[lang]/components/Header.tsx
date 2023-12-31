import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './LocaleSwitcher'
import { Icons } from './global/Icons'
import { routes } from '@/constants';

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
              {Object.values(routes).map((route) => (
                  <li key={route.label}>
                    <Link href={route.path(lang)} className='hover:text-black'>
                    {(navigation as any)[route.label.toLowerCase()]}
                    </Link>
                  </li>
                ))}
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
