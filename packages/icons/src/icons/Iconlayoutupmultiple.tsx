import React from 'react'

export interface IconlayoutupmultipleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * layout_up_multiple
 * @source figma
 */
export const Iconlayoutupmultiple = React.memo((props: IconlayoutupmultipleProps) => {
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
        d="M5 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V9C19.5 9.27614 19.2761 9.5 19 9.5H17V11H19C20.1046 11 21 10.1046 21 9V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11H7V9.5H5C4.72386 9.5 4.5 9.27614 4.5 9V5C4.5 4.72386 4.72386 4.5 5 4.5Z"
        fill="#222529"
      />
      <path
        d="M16.4687 14.3831L15.5313 13.2122L12.75 15.4388V9H11.25V15.4388L8.46873 13.2122L7.53127 14.3831L12 17.9607L16.4687 14.3831Z"
        fill="#222529"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M21 20.75H3V19.25H21V20.75Z" fill="#B4B8BF" />
    </svg>
  )
})

Iconlayoutupmultiple.displayName = 'Iconlayoutupmultiple'

export default Iconlayoutupmultiple
