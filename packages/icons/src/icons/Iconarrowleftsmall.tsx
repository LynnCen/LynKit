import React from 'react'

export interface IconarrowleftsmallProps extends React.SVGProps<SVGSVGElement> {}

/**
 * arrow_left_small
 * @source figma
 */
export const Iconarrowleftsmall = React.memo((props: IconarrowleftsmallProps) => {
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
        d="M10.1212 12.0009L15.0908 16.9706L14.0302 18.0312L7.99983 12.0009L14.0302 5.97059L15.0908 7.03125L10.1212 12.0009Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconarrowleftsmall.displayName = 'Iconarrowleftsmall'

export default Iconarrowleftsmall
