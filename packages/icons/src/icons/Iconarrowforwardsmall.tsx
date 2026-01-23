import React from 'react'

export interface IconarrowforwardsmallProps extends React.SVGProps<SVGSVGElement> {}

/**
 * arrow_forward_small
 * @source figma
 */
export const Iconarrowforwardsmall = React.memo((props: IconarrowforwardsmallProps) => {
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
        d="M14.2842 7.29777L13.8246 6.83105L12.8912 7.75021L13.3507 8.21693L16.4419 11.3561H6.00486H5.34985V12.6662H6.00486H16.42L13.3507 15.7831L12.8912 16.2498L13.8246 17.1689L14.2842 16.7022L18.4619 12.4596L18.9145 12L18.4619 11.5404L14.2842 7.29777Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconarrowforwardsmall.displayName = 'Iconarrowforwardsmall'

export default Iconarrowforwardsmall
