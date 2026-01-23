import React from 'react'

export interface Iconsizew1h2Props extends React.SVGProps<SVGSVGElement> {}

/**
 * size_w1_h2
 * @source figma
 */
export const Iconsizew1h2 = React.memo((props: Iconsizew1h2Props) => {
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
        d="M9 4.5L9 19.5L15 19.5L15 4.5L9 4.5ZM7.5 21L16.5 21L16.5 3L7.5 3L7.5 21Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconsizew1h2.displayName = 'Iconsizew1h2'

export default Iconsizew1h2
