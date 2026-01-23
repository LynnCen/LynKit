import React from 'react'

export interface IconpageProps extends React.SVGProps<SVGSVGElement> {}

/**
 * page
 * @source figma
 */
export const Iconpage = React.memo((props: IconpageProps) => {
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
        d="M4 4C4 2.89543 4.89543 2 6 2H13.0169C13.6369 2 14.2218 2.28751 14.6005 2.77839L19.5836 9.23795C19.8536 9.58795 20 10.0175 20 10.4596V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4ZM18 20.5H6C5.72386 20.5 5.5 20.2761 5.5 20V4C5.5 3.72386 5.72386 3.5 6 3.5H12.25V8C12.25 9.51878 13.4812 10.75 15 10.75H18.5V20C18.5 20.2761 18.2761 20.5 18 20.5ZM17.6984 9.25L13.75 4.13171V8C13.75 8.69036 14.3096 9.25 15 9.25H17.6984Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconpage.displayName = 'Iconpage'

export default Iconpage
