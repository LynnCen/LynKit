import React from 'react'

export interface IconstrokecenterfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * stroke_center_fill
 * @source figma
 */
export const Iconstrokecenterfill = React.memo((props: IconstrokecenterfillProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M3 3H7V7H3V3Z" fill="#222529" />
      <path d="M4.5 8.99999V15H5.74995V8.99999H4.5Z" fill="#222529" />
      <path d="M9.00005 5.5V4.5H15V5.5H9.00005Z" fill="#222529" />
      <path d="M18.5 8.99999V15H19.5V8.99999H18.5Z" fill="#222529" />
      <path d="M15 19.5V18.5H9.00005V19.5H15Z" fill="#222529" />
      <path d="M7 17H3V21H7V17Z" fill="#222529" />
      <path d="M17 3H21V7H17V3Z" fill="#222529" />
      <path d="M21 17H17V21H21V17Z" fill="#222529" />
    </svg>
  )
})

Iconstrokecenterfill.displayName = 'Iconstrokecenterfill'

export default Iconstrokecenterfill
