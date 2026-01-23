import React from 'react'

export interface IcondemoProps extends React.SVGProps<SVGSVGElement> {}

/**
 * demo
 * @source figma
 */
export const Icondemo = React.memo((props: IcondemoProps) => {
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
        d="M10.5 8V12C10.5 12.412 10.9704 12.6472 11.3 12.4L13.9667 10.4C14.2333 10.2 14.2333 9.8 13.9667 9.6L11.3 7.6C10.9704 7.35279 10.5 7.58798 10.5 8Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H16.0885L17.6708 20.1646L16.3292 20.8354L14.4115 17H9.58853L7.67082 20.8354L6.32918 20.1646L7.91147 17H5C3.89543 17 3 16.1046 3 15V5ZM5 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V15C19.5 15.2761 19.2761 15.5 19 15.5H5C4.72386 15.5 4.5 15.2761 4.5 15V5C4.5 4.72386 4.72386 4.5 5 4.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Icondemo.displayName = 'Icondemo'

export default Icondemo
