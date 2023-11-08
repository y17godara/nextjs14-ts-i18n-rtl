type IconProps = React.HTMLAttributes<SVGElement> & {
  variant?: string // Adding the variant prop to IconProps
}

export const Icons = {
  arrowDown: (props: IconProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-chevron-down'
    >
      <path d='m6 9 6 6 6-6' />
    </svg>
  ),
  arrowUp: (props: IconProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-chevron-up'
    >
      <path d='m18 15-6-6-6 6' />
    </svg>
  ),
  menu: (props: IconProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-menu-square'
    >
      <rect width='18' height='18' x='3' y='3' rx='2' />
      <path d='M7 8h10' />
      <path d='M7 12h10' />
      <path d='M7 16h10' />
    </svg>
  )
}
