import React from 'react'

export interface IconcustomProps extends React.SVGProps<SVGSVGElement> {}

/**
 * custom
 * @source figma
 */
export const Iconcustom = React.memo((props: IconcustomProps) => {
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
        d="M2 4H5V4.75H19V4H22V7H21.25V12.5H19.75V7H19V6.25H5V7H4.25V17H5V17.75H14.5V19.25H5V20H2V17H2.75V7H2V4Z"
        fill="#222529"
      />
      <path
        d="M18.25 16.25H16V17.75H18.25V20H19.75V17.75H22V16.25H19.75V14H18.25V16.25Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconcustom.displayName = 'Iconcustom'

export default Iconcustom
