import React from 'react'

export interface IconshadowinvertedmultipleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * shadow_inverted_multiple
 * @source figma
 */
export const Iconshadowinvertedmultiple = React.memo((props: IconshadowinvertedmultipleProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M20 17V15H4V17H20Z" fill="#B4B8BF" />
      <path opacity="0.8" d="M20 18V17H4V18H20Z" fill="#B4B8BF" />
      <path opacity="0.6" d="M20 19V18H4V19H20Z" fill="#B4B8BF" />
      <path opacity="0.4" d="M20 20V19H4V20H20Z" fill="#B4B8BF" />
      <path opacity="0.2" d="M20 21V20H4V21H20Z" fill="#B4B8BF" />
      <path
        d="M5.5 5.5H18.5V14.5H5.5V5.5ZM5 4C4.44772 4 4 4.44772 4 5V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V5C20 4.44772 19.5523 4 19 4H5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconshadowinvertedmultiple.displayName = 'Iconshadowinvertedmultiple'

export default Iconshadowinvertedmultiple
