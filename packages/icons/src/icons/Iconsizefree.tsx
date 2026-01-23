import React from 'react'

export interface IconsizefreeProps extends React.SVGProps<SVGSVGElement> {}

/**
 * size_free
 * @source figma
 */
export const Iconsizefree = React.memo((props: IconsizefreeProps) => {
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
        d="M15 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V9H21V5C21 3.89543 20.1046 3 19 3H15V4.5ZM9 4.5V3H5C3.89543 3 3 3.89543 3 5V9H4.5V5C4.5 4.72386 4.72386 4.5 5 4.5H9ZM4.5 15H3V19C3 20.1046 3.89543 21 5 21H9V19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V15ZM15 19.5V21H19C20.1046 21 21 20.1046 21 19V15H19.5V19C19.5 19.2761 19.2761 19.5 19 19.5H15Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75ZM7.25 12C7.25 9.37665 9.37665 7.25 12 7.25C14.6234 7.25 16.75 9.37665 16.75 12C16.75 14.6234 14.6234 16.75 12 16.75C9.37665 16.75 7.25 14.6234 7.25 12Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconsizefree.displayName = 'Iconsizefree'

export default Iconsizefree
