import React from 'react'

export interface IconplateProps extends React.SVGProps<SVGSVGElement> {}

/**
 * plate
 * @source figma
 */
export const Iconplate = React.memo((props: IconplateProps) => {
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
        d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V6ZM5 5.5H19C19.2761 5.5 19.5 5.72386 19.5 6V14.5H4.5V6C4.5 5.72386 4.72386 5.5 5 5.5ZM14.25 16H9.75V18.5H14.25V16ZM15.75 18.5H19C19.2761 18.5 19.5 18.2761 19.5 18V16H15.75V18.5ZM4.5 16H8.25V18.5H5C4.72386 18.5 4.5 18.2761 4.5 18V16Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconplate.displayName = 'Iconplate'

export default Iconplate
