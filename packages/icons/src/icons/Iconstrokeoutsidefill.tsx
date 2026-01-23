import React from 'react'

export interface IconstrokeoutsidefillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * stroke_outside_fill
 * @source figma
 */
export const Iconstrokeoutsidefill = React.memo((props: IconstrokeoutsidefillProps) => {
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
        d="M3 3H21V21H3V3ZM4 16H8V20H16V16H20V8H16V4L8 4V8H4L4 16Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconstrokeoutsidefill.displayName = 'Iconstrokeoutsidefill'

export default Iconstrokeoutsidefill
