import React from 'react'

export interface IconarrowforwardProps extends React.SVGProps<SVGSVGElement> {}

/**
 * arrow_forward
 * @source figma
 */
export const Iconarrowforward = React.memo((props: IconarrowforwardProps) => {
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
        d="M19.1893 11.2501L13.4697 5.53039L14.5303 4.46973L22.0607 12.0001L14.5303 19.5304L13.4697 18.4697L19.1893 12.7501H2V11.2501H19.1893Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconarrowforward.displayName = 'Iconarrowforward'

export default Iconarrowforward
