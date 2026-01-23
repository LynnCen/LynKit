import React from 'react'

export interface IconleftalignedProps extends React.SVGProps<SVGSVGElement> {}

/**
 * left_aligned
 * @source figma
 */
export const Iconleftaligned = React.memo((props: IconleftalignedProps) => {
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
        d="M20 4.5C20.2761 4.5 20.5 4.72386 20.5 5V19C20.5 19.2761 20.2761 19.5 20 19.5H4C3.72386 19.5 3.5 19.2761 3.5 19V5C3.5 4.72386 3.72386 4.5 4 4.5H20ZM4 3C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V5C22 3.89543 21.1046 3 20 3H4Z"
        fill="#222529"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M5.5 17H11.5V7H5.5V17Z" fill="#222529" />
    </svg>
  )
})

Iconleftaligned.displayName = 'Iconleftaligned'

export default Iconleftaligned
