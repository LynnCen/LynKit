import React from 'react'

export interface IconpausefillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * pause_fill
 * @source figma
 */
export const Iconpausefill = React.memo((props: IconpausefillProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M4.25 4V20H6.75V4H4.25Z" fill="#222529" />
      <path fillRule="evenodd" clipRule="evenodd" d="M17.25 4V20H19.75V4H17.25Z" fill="#222529" />
    </svg>
  )
})

Iconpausefill.displayName = 'Iconpausefill'

export default Iconpausefill
