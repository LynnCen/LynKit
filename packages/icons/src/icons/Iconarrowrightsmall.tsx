import React from 'react'

export interface IconarrowrightsmallProps extends React.SVGProps<SVGSVGElement> {}

/**
 * arrow_right_small
 * @source figma
 */
export const Iconarrowrightsmall = React.memo((props: IconarrowrightsmallProps) => {
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
        d="M13.8796 12.0302L8.90991 16.9999L9.97057 18.0605L16.0009 12.0302L9.97057 5.99989L8.90991 7.06055L13.8796 12.0302Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconarrowrightsmall.displayName = 'Iconarrowrightsmall'

export default Iconarrowrightsmall
