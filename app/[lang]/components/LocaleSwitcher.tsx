"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { Icons } from './global/Icons';
import { useLanguage } from '@/context/LanguageContext';
import { i18n, getFlagIcon } from '@/i18n.config';
import { motion, AnimatePresence } from 'framer-motion';

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const { lang, changeLang } = useLanguage();
  const [isDropdownOpen, setDropdownOpen] = React.useState(false);

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const currentLocale = lang;
  const dropdownIcon: React.ReactNode = isDropdownOpen ? (
    <Icons.arrowUp />
  ) : (
    <Icons.arrowDown />
  );

  return (
    <div className='relative'>
      <motion.button
        onClick={toggleDropdown}
        // className='text-md flex h-[49px] w-[98px] flex-row items-center justify-center gap-2 px-3 py-2 text-center font-semibold uppercase text-white'
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        className='text-md flex h-[49px] w-[98px] flex-row items-center justify-center gap-2 px-3 py-2 text-center font-semibold uppercase text-white'
      >
        {currentLocale}
        <span>{getFlagIcon(currentLocale)}</span>
        {dropdownIcon}
      </motion.button>
      <AnimatePresence>

      
      {isDropdownOpen && (
        <motion.ul 
         // Add motion attributes for animation
         initial={{ opacity: 0, y: -5 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -5 }}
        className='absolute left-0 top-full mt-1 w-[98px] rounded-md border bg-white font-semibold'>
          {i18n.locales.map(locale => (
            <li key={locale}
            >
              <a
                href={redirectedPathName(locale)}
                className='flex flex-row gap-2 px-4 py-2 text-sm text-black uppercase hover:bg-gray-200'
                onClick={() => {
                  changeLang(locale);
                  setDropdownOpen(false);
                }}
              >
                {getFlagIcon(locale)}
                <span>{locale}</span>
              </a>
            </li>
          ))}
        </motion.ul>
      )}
      </AnimatePresence>
    </div>
  );
}