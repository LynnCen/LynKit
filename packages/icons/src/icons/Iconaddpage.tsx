import React from 'react'

export interface IconaddpageProps extends React.SVGProps<SVGSVGElement> {}

/**
 * add_page
 * @source figma
 */
export const Iconaddpage = React.memo((props: IconaddpageProps) => {
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
        d="M6 20.5H12V22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H13.0169C13.6369 2 14.2218 2.28751 14.6005 2.77839L19.5836 9.23795C19.8536 9.58795 20 10.0175 20 10.4596V13H18.5V10.75H15C13.4812 10.75 12.25 9.51878 12.25 8V3.5H6C5.72386 3.5 5.5 3.72386 5.5 4V20C5.5 20.2761 5.72386 20.5 6 20.5ZM13.75 4.13171V8C13.75 8.69036 14.3096 9.25 15 9.25H17.6984L13.75 4.13171Z"
        fill="#222529"
      />
      <path
        d="M17.25 19.75H14V18.25H17.25V15H18.75V18.25H22V19.75H18.75V23H17.25V19.75Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconaddpage.displayName = 'Iconaddpage'

export default Iconaddpage
