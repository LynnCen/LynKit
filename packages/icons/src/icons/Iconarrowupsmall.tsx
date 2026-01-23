import React from 'react'

export interface IconarrowupsmallProps extends React.SVGProps<SVGSVGElement> {}

/**
 * arrow_up_small
 * @source figma
 */
export const Iconarrowupsmall = React.memo((props: IconarrowupsmallProps) => {
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
        d="M12.0302 10.4304L16.9999 15.4L18.0605 14.3394L12.0302 8.30903L5.99989 14.3394L7.06055 15.4L12.0302 10.4304Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconarrowupsmall.displayName = 'Iconarrowupsmall'

export default Iconarrowupsmall
