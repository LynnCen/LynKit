import React from 'react'

export interface IconaddartboardProps extends React.SVGProps<SVGSVGElement> {}

/**
 * add_artboard
 * @source figma
 */
export const Iconaddartboard = React.memo((props: IconaddartboardProps) => {
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
        d="M18.5 17H22V18.5H18.5V22H17V18.5H13.5V17H17V13.5H18.5V17ZM7 5.5H17V3H18.5V5.5H21V7H18.5V11H17V7H7V17H11V18.5H7V21H5.5V18.5H3V17H5.5V7H3V5.5H5.5V3H7V5.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconaddartboard.displayName = 'Iconaddartboard'

export default Iconaddartboard
