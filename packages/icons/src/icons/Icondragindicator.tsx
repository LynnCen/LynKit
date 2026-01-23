import React from 'react'

export interface IcondragindicatorProps extends React.SVGProps<SVGSVGElement> {}

/**
 * drag_indicator
 * @source figma
 */
export const Icondragindicator = React.memo((props: IcondragindicatorProps) => {
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
        d="M17 7.75H7V6.25H17V7.75ZM17 12.75H7V11.25H17V12.75ZM7 17.75H17V16.25H7V17.75Z"
        fill="#222529"
      />
    </svg>
  )
})

Icondragindicator.displayName = 'Icondragindicator'

export default Icondragindicator
