import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'
import logoImage from '@/public/default.jpg'

export default async function About({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <section className='py-24'>
      <div className='container'>
        <div>
          <h1 className='text-3xl font-bold'>{page.about.title}</h1>
          <p className='text-gray-500'>{page.about.description}</p>
        </div>
        <div className='my-4'></div>
        <div className='flex item-rows-center group'>
          <Image
            className='w-12 h-12 rounded-full shrink-0'
            src={logoImage}
            width={100}
            height={100}
            alt='image'
          />
          <div className='flex flex-col group ltr:ml-3 rtl:mr-3'>
            <p className='text-sm font-medium text-slate-400 group-hover:text-slate-500'>
              User Name
            </p>
            <p className='text-sm font-medium text-slate-500 group-hover:text-slate-300'>
              example@mail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
