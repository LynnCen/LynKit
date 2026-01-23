import React from 'react'

export interface IconstrokedashfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * stroke_dash_fill
 * @source figma
 */
export const Iconstrokedashfill = React.memo((props: IconstrokedashfillProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M6.5 12.75H1V11.25H6.5V12.75Z" fill="#222529" />
      <path d="M17.5 11.25H23V12.75H17.5V11.25Z" fill="#222529" />
      <path d="M9.5 12.75H14.5V11.25H9.5V12.75Z" fill="#222529" />
    </svg>
  )
})

Iconstrokedashfill.displayName = 'Iconstrokedashfill'

export default Iconstrokedashfill
