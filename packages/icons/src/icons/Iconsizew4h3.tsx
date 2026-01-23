import React from 'react'

export interface Iconsizew4h3Props extends React.SVGProps<SVGSVGElement> {}

/**
 * size_w4_h3
 * @source figma
 */
export const Iconsizew4h3 = React.memo((props: Iconsizew4h3Props) => {
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
        d="M18.5 7.5H5.5V16.5H18.5V7.5ZM4 6V18H20V6H4Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconsizew4h3.displayName = 'Iconsizew4h3'

export default Iconsizew4h3
