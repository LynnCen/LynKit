import React from 'react'

export interface IcongroupProps extends React.SVGProps<SVGSVGElement> {}

/**
 * group
 * @source figma
 */
export const Icongroup = React.memo((props: IcongroupProps) => {
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
        d="M17 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V7H21V5C21 3.89543 20.1046 3 19 3H17V4.5Z"
        fill="#222529"
      />
      <path d="M14 4.5V3H10V4.5H14Z" fill="#222529" />
      <path
        d="M7 4.5V3H5C3.89543 3 3 3.89543 3 5V7H4.5V5C4.5 4.72386 4.72386 4.5 5 4.5H7Z"
        fill="#222529"
      />
      <path d="M4.5 10H3V14H4.5V10Z" fill="#222529" />
      <path
        d="M4.5 17H3V19C3 20.1046 3.89543 21 5 21H7V19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V17Z"
        fill="#222529"
      />
      <path d="M10 19.5V21H14V19.5H10Z" fill="#222529" />
      <path
        d="M17 19.5V21H19C20.1046 21 21 20.1046 21 19V17H19.5V19C19.5 19.2761 19.2761 19.5 19 19.5H17Z"
        fill="#222529"
      />
      <path d="M19.5 14H21V10H19.5V14Z" fill="#222529" />
    </svg>
  )
})

Icongroup.displayName = 'Icongroup'

export default Icongroup
