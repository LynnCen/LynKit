import React from 'react'

export interface IconstrokefillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * stroke_fill
 * @source figma
 */
export const Iconstrokefill = React.memo((props: IconstrokefillProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M3 5V6.5H21V5H3ZM3 9.5V12H21V9.5H3ZM3 15V19H21V15H3Z" fill="#222529" />
    </svg>
  )
})

Iconstrokefill.displayName = 'Iconstrokefill'

export default Iconstrokefill
