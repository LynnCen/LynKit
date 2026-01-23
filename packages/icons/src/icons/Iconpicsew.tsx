import React from 'react'

export interface IconpicsewProps extends React.SVGProps<SVGSVGElement> {}

/**
 * picsew
 * @source figma
 */
export const Iconpicsew = React.memo((props: IconpicsewProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 9.5H6C5.72386 9.5 5.5 9.72386 5.5 10V17C5.5 17.2761 5.72386 17.5 6 17.5H18C18.2761 17.5 18.5 17.2761 18.5 17V10C18.5 9.72386 18.2761 9.5 18 9.5ZM6 8C4.89543 8 4 8.89543 4 10V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V10C20 8.89543 19.1046 8 18 8H6Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 3.5H6C5.72386 3.5 5.5 3.72386 5.5 4V5C5.5 5.27614 5.72386 5.5 6 5.5H18C18.2761 5.5 18.5 5.27614 18.5 5V4C18.5 3.72386 18.2761 3.5 18 3.5ZM6 2C4.89543 2 4 2.89543 4 4V5C4 6.10457 4.89543 7 6 7H18C19.1046 7 20 6.10457 20 5V4C20 2.89543 19.1046 2 18 2H6Z"
        fill="#222529"
      />
      <path d="M4 20H20V21.5H4V20Z" fill="#222529" />
    </svg>
  )
})

Iconpicsew.displayName = 'Iconpicsew'

export default Iconpicsew
