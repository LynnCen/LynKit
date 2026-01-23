import React from 'react'

export interface IconchatsettingProps extends React.SVGProps<SVGSVGElement> {}

/**
 * chat_setting
 * @source figma
 */
export const Iconchatsetting = React.memo((props: IconchatsettingProps) => {
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
        d="M4 6.75L20 6.75V5.25H4V6.75ZM20 12.75H4V11.25H20V12.75ZM20 18.75H9V17.25H20V18.75Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconchatsetting.displayName = 'Iconchatsetting'

export default Iconchatsetting
