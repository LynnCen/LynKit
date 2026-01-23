import React from 'react'

export interface Iconsizew1h1Props extends React.SVGProps<SVGSVGElement> {}

/**
 * size_w1_h1
 * @source figma
 */
export const Iconsizew1h1 = React.memo((props: Iconsizew1h1Props) => {
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
        d="M19 5H5V19H19V5ZM3.5 3.5V20.5H20.5V3.5H3.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconsizew1h1.displayName = 'Iconsizew1h1'

export default Iconsizew1h1
