import React from 'react'

export interface IconplatehbfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * plate_hb_fill
 * @source figma
 */
export const Iconplatehbfill = React.memo((props: IconplatehbfillProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M5 3C3.89543 3 3 3.89543 3 5V14H21V5C21 3.89543 20.1046 3 19 3H5Z" fill="#222529" />
      <path d="M8 16H3V19C3 20.1046 3.89543 21 5 21H8V16Z" fill="#222529" />
      <path d="M10 16H14V21H10V16Z" fill="#222529" />
      <path d="M21 16H16V21H19C20.1046 21 21 20.1046 21 19V16Z" fill="#222529" />
    </svg>
  )
})

Iconplatehbfill.displayName = 'Iconplatehbfill'

export default Iconplatehbfill
