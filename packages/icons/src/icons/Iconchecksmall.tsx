import React from 'react'

export interface IconchecksmallProps extends React.SVGProps<SVGSVGElement> {}

/**
 * check_small
 * @source figma
 */
export const Iconchecksmall = React.memo((props: IconchecksmallProps) => {
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
        d="M19.0303 8.03039L9.97133 17.0894L4.9425 11.5018L6.05745 10.4983L10.0286 14.9108L17.9696 6.96973L19.0303 8.03039Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconchecksmall.displayName = 'Iconchecksmall'

export default Iconchecksmall
