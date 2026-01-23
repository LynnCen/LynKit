import React from 'react'

export interface IconpauseProps extends React.SVGProps<SVGSVGElement> {}

/**
 * pause
 * @source figma
 */
export const Iconpause = React.memo((props: IconpauseProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M5.25 4V20H6.75V4H5.25Z" fill="#222529" />
      <path fillRule="evenodd" clipRule="evenodd" d="M17.25 4V20H18.75V4H17.25Z" fill="#222529" />
    </svg>
  )
})

Iconpause.displayName = 'Iconpause'

export default Iconpause
