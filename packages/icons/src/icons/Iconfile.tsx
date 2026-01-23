import React from 'react'

export interface IconfileProps extends React.SVGProps<SVGSVGElement> {}

/**
 * file
 * @source figma
 */
export const Iconfile = React.memo((props: IconfileProps) => {
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
        d="M18 20.5C18.2761 20.5 18.5 20.2761 18.5 20V9H13V3.5H6C5.72386 3.5 5.5 3.72386 5.5 4V20C5.5 20.2761 5.72386 20.5 6 20.5H18ZM20 9V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H13H14L20 8V9Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconfile.displayName = 'Iconfile'

export default Iconfile
