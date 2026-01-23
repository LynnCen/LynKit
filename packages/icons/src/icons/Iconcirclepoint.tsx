import React from 'react'

export interface IconcirclepointProps extends React.SVGProps<SVGSVGElement> {}

/**
 * circle_point
 * @source figma
 */
export const Iconcirclepoint = React.memo((props: IconcirclepointProps) => {
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
        d="M9.99998 9L14.0001 9.00001C14.5523 9.00003 15 9.44774 15 10V14C15 14.5523 14.5523 15 14 15H10C9.44772 15 9.00001 14.5523 9 14V9.99998C9.00001 9.44771 9.44771 9.00001 9.99998 9Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5.5C3 4.11929 4.11929 3 5.5 3H18.5C19.8807 3 21 4.11929 21 5.5V18.5C21 19.8807 19.8807 21 18.5 21H5.5C4.11929 21 3 19.8807 3 18.5V5.5ZM5.5 4.5H18.5C19.0523 4.5 19.5 4.94772 19.5 5.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H5.5C4.94772 19.5 4.5 19.0523 4.5 18.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconcirclepoint.displayName = 'Iconcirclepoint'

export default Iconcirclepoint
