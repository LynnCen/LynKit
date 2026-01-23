import React from 'react'

export interface IconthintiltProps extends React.SVGProps<SVGSVGElement> {}

/**
 * thin_tilt
 * @source figma
 */
export const Iconthintilt = React.memo((props: IconthintiltProps) => {
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
        d="M16.1894 6.75H8.00006V5.25H18.7501V16H17.2501V7.81066L6.53039 18.5303L5.46973 17.4697L16.1894 6.75Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconthintilt.displayName = 'Iconthintilt'

export default Iconthintilt
