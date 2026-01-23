import React from 'react'

export interface Iconsizew2h3Props extends React.SVGProps<SVGSVGElement> {}

/**
 * size_w2_h3
 * @source figma
 */
export const Iconsizew2h3 = React.memo((props: Iconsizew2h3Props) => {
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
        d="M7.5 4.5L7.5 19.5L16.5 19.5L16.5 4.5L7.5 4.5ZM6 21L18 21L18 3L6 3L6 21Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconsizew2h3.displayName = 'Iconsizew2h3'

export default Iconsizew2h3
