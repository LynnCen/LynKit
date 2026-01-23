import React from 'react'

export interface IconduplicateProps extends React.SVGProps<SVGSVGElement> {}

/**
 * duplicate
 * @source figma
 */
export const Iconduplicate = React.memo((props: IconduplicateProps) => {
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
        d="M16 14.5H20C20.2761 14.5 20.5 14.2761 20.5 14V4C20.5 3.72386 20.2761 3.5 20 3.5H11.5C11.2239 3.5 11 3.72386 11 4V6.5H9.5V4C9.5 2.89543 10.3954 2 11.5 2H20C21.1046 2 22 2.89543 22 4V14C22 15.1046 21.1046 16 20 16H16V14.5Z"
        fill="#222529"
      />
      <path
        d="M5.25008 15.75H7.50008V18H9.00008V15.75H11.2501V14.25H9.00009V12H7.50009V14.25H5.25008V15.75Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8C2.89543 8 2 8.89543 2 10V20C2 21.1046 2.89543 22 4 22H12.5C13.6046 22 14.5 21.1046 14.5 20V10C14.5 8.89543 13.6046 8 12.5 8H4ZM4 20.5H12.5C12.7761 20.5 13 20.2761 13 20V10C13 9.72386 12.7761 9.5 12.5 9.5H4C3.72386 9.5 3.5 9.72386 3.5 10V20C3.5 20.2761 3.72386 20.5 4 20.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconduplicate.displayName = 'Iconduplicate'

export default Iconduplicate
