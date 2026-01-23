import React from 'react'

export interface IconstrokesolidfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * stroke_solid_fill
 * @source figma
 */
export const Iconstrokesolidfill = React.memo((props: IconstrokesolidfillProps) => {
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
        d="M1 11.75C1 11.3358 1.33579 11 1.75 11L22.25 11C22.6642 11 23 11.3358 23 11.75C23 12.1642 22.6642 12.5 22.25 12.5L1.75 12.5C1.33579 12.5 1 12.1642 1 11.75Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconstrokesolidfill.displayName = 'Iconstrokesolidfill'

export default Iconstrokesolidfill
