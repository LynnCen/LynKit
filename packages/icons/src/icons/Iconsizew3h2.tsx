import React from 'react'

export interface Iconsizew3h2Props extends React.SVGProps<SVGSVGElement> {}

/**
 * size_w3_h2
 * @source figma
 */
export const Iconsizew3h2 = React.memo((props: Iconsizew3h2Props) => {
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
        d="M19.5 7.5H4.5V16.5H19.5V7.5ZM3 6V18H21V6H3Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconsizew3h2.displayName = 'Iconsizew3h2'

export default Iconsizew3h2
