import React from 'react'

export interface IconstrokedotfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * stroke_dot_fill
 * @source figma
 */
export const Iconstrokedotfill = React.memo((props: IconstrokedotfillProps) => {
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
        d="M2 13C2.55228 13 3 12.5523 3 12C3 11.4477 2.55228 11 2 11C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13Z"
        fill="#222529"
      />
      <path
        d="M6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13Z"
        fill="#222529"
      />
      <path
        d="M11 12C11 12.5523 10.5523 13 10 13C9.44771 13 9 12.5523 9 12C9 11.4477 9.44771 11 10 11C10.5523 11 11 11.4477 11 12Z"
        fill="#222529"
      />
      <path
        d="M14 13C14.5523 13 15 12.5523 15 12C15 11.4477 14.5523 11 14 11C13.4477 11 13 11.4477 13 12C13 12.5523 13.4477 13 14 13Z"
        fill="#222529"
      />
      <path
        d="M19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12Z"
        fill="#222529"
      />
      <path
        d="M22 13C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11C21.4477 11 21 11.4477 21 12C21 12.5523 21.4477 13 22 13Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconstrokedotfill.displayName = 'Iconstrokedotfill'

export default Iconstrokedotfill
