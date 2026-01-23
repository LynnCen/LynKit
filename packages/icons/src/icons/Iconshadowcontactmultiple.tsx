import React from 'react'

export interface IconshadowcontactmultipleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * shadow_Contact_multiple
 * @source figma
 */
export const Iconshadowcontactmultiple = React.memo((props: IconshadowcontactmultipleProps) => {
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
        opacity="0.6"
        d="M4.99986 16L3.19986 18.4C2.70544 19.0592 3.17582 20 3.99986 20H19.9999C20.8239 20 21.2943 19.0592 20.7999 18.4L18.9999 16H4.99986Z"
        fill="#B4B8BF"
      />
      <path
        d="M5.5 5.5H18.5V14.5H5.5V5.5ZM5 4C4.44772 4 4 4.44772 4 5V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V5C20 4.44772 19.5523 4 19 4H5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconshadowcontactmultiple.displayName = 'Iconshadowcontactmultiple'

export default Iconshadowcontactmultiple
