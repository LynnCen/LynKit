import React from 'react'

export interface IconcheckProps extends React.SVGProps<SVGSVGElement> {}

/**
 * check
 * @source figma
 */
export const Iconcheck = React.memo((props: IconcheckProps) => {
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
        d="M21.5355 6.52517L9.20189 19.1006L2.43774 11.4375L3.56231 10.4449L9.25971 16.8994L20.4646 5.47485L21.5355 6.52517Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconcheck.displayName = 'Iconcheck'

export default Iconcheck
