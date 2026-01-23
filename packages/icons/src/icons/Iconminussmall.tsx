import React from 'react'

export interface IconminussmallProps extends React.SVGProps<SVGSVGElement> {}

/**
 * minus_small
 * @source figma
 */
export const Iconminussmall = React.memo((props: IconminussmallProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M6 12.75H18V11.25H6V12.75Z" fill="#222529" />
    </svg>
  )
})

Iconminussmall.displayName = 'Iconminussmall'

export default Iconminussmall
