import React from 'react'

export interface Iconsizew2h1Props extends React.SVGProps<SVGSVGElement> {}

/**
 * size_w2_h1
 * @source figma
 */
export const Iconsizew2h1 = React.memo((props: Iconsizew2h1Props) => {
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
        d="M19.5 9H4.5V15H19.5V9ZM3 7.5V16.5H21V7.5H3Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconsizew2h1.displayName = 'Iconsizew2h1'

export default Iconsizew2h1
