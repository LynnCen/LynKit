import React from 'react'

export interface Iconsizew3h4Props extends React.SVGProps<SVGSVGElement> {}

/**
 * size_w3_h4
 * @source figma
 */
export const Iconsizew3h4 = React.memo((props: Iconsizew3h4Props) => {
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
        d="M16.5 18.5L16.5 5.5L7.5 5.5L7.5 18.5L16.5 18.5ZM18 4L6 4L6 20L18 20L18 4Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconsizew3h4.displayName = 'Iconsizew3h4'

export default Iconsizew3h4
