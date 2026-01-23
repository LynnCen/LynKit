import React from 'react'

export interface IconminuscircleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * minus_circle
 * @source figma
 */
export const Iconminuscircle = React.memo((props: IconminuscircleProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M7.75736 12.75V11.25H16.2426V12.75H7.75736Z" fill="#222529" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.0711 19.0711C15.1658 22.9763 8.83418 22.9763 4.92893 19.0711C1.02369 15.1658 1.02369 8.83418 4.92893 4.92893C8.83418 1.02369 15.1658 1.02369 19.0711 4.92893C22.9763 8.83418 22.9763 15.1658 19.0711 19.0711ZM18.0104 18.0104C14.6909 21.3299 9.30905 21.3299 5.98959 18.0104C2.67014 14.691 2.67014 9.30905 5.98959 5.98959C9.30905 2.67014 14.691 2.67014 18.0104 5.98959C21.3299 9.30905 21.3299 14.691 18.0104 18.0104Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconminuscircle.displayName = 'Iconminuscircle'

export default Iconminuscircle
