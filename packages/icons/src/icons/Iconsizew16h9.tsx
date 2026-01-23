import React from 'react'

export interface Iconsizew16h9Props extends React.SVGProps<SVGSVGElement> {}

/**
 * size_w16_h9
 * @source figma
 */
export const Iconsizew16h9 = React.memo((props: Iconsizew16h9Props) => {
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
        d="M19.3881 8.5H4.61035V15.5H19.3881V8.5ZM3.11035 7V17H20.8881V7H3.11035Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconsizew16h9.displayName = 'Iconsizew16h9'

export default Iconsizew16h9
