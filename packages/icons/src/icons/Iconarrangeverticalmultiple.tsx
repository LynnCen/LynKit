import React from 'react'

export interface IconarrangeverticalmultipleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * arrange_vertical_multiple
 * @source figma
 */
export const Iconarrangeverticalmultiple = React.memo((props: IconarrangeverticalmultipleProps) => {
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
        d="M6.5 11L17.5 11L17.5 13L6.5 13L6.5 11Z"
        fill="#222529"
      />
      <path d="M21 20.75H3V19.25H21V20.75ZM21 4.75H3V3.25H21V4.75Z" fill="#B4B8BF" />
    </svg>
  )
})

Iconarrangeverticalmultiple.displayName = 'Iconarrangeverticalmultiple'

export default Iconarrangeverticalmultiple
