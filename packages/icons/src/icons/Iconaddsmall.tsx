import React from 'react'

export interface IconaddsmallProps extends React.SVGProps<SVGSVGElement> {}

/**
 * add_small
 * @source figma
 */
export const Iconaddsmall = React.memo((props: IconaddsmallProps) => {
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
        d="M11.25 12.75V18H12.75V12.75H18V11.25H12.75V6H11.25V11.25H6V12.75H11.25Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconaddsmall.displayName = 'Iconaddsmall'

export default Iconaddsmall
