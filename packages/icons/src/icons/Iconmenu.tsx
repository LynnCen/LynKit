import React from 'react'

export interface IconmenuProps extends React.SVGProps<SVGSVGElement> {}

/**
 * menu
 * @source figma
 */
export const Iconmenu = React.memo((props: IconmenuProps) => {
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
        d="M4 6.75L20 6.75V5.25H4V6.75ZM20 12.75H4V11.25H20V12.75ZM20 18.75H4V17.25H20V18.75Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconmenu.displayName = 'Iconmenu'

export default Iconmenu
