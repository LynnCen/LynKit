import React from 'react'

export interface IconrectanglemarkmultipleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * rectanglemark_multiple
 * @source figma
 */
export const Iconrectanglemarkmultiple = React.memo((props: IconrectanglemarkmultipleProps) => {
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
        opacity="0.6"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.42857 0C1.53502 0 0 1.53502 0 3.42857V20.5714C0 22.465 1.53502 24 3.42857 24H20.5714C22.465 24 24 22.465 24 20.5714V3.42857C24 1.53502 22.465 0 20.5714 0H3.42857ZM18 6H6V18H18V6Z"
        fill="#B4B8BF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 6.5H6.5V17.5H17.5V6.5ZM5 5V19H19V5H5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconrectanglemarkmultiple.displayName = 'Iconrectanglemarkmultiple'

export default Iconrectanglemarkmultiple
