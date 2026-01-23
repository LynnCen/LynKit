import React from 'react'

export interface IconuncategorizedProps extends React.SVGProps<SVGSVGElement> {}

/**
 * uncategorized
 * @source figma
 */
export const Iconuncategorized = React.memo((props: IconuncategorizedProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M3 5.5H21V4H3V5.5Z" fill="#222529" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 10C3 8.89543 3.89543 8 5 8H19C20.1046 8 21 8.89543 21 10V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V10ZM5 9.5H19C19.2761 9.5 19.5 9.72386 19.5 10V18C19.5 18.2761 19.2761 18.5 19 18.5H5C4.72386 18.5 4.5 18.2761 4.5 18V10C4.5 9.72386 4.72386 9.5 5 9.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconuncategorized.displayName = 'Iconuncategorized'

export default Iconuncategorized
