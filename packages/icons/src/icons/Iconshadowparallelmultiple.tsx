import React from 'react'

export interface IconshadowparallelmultipleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * shadow_parallel_multiple
 * @source figma
 */
export const Iconshadowparallelmultiple = React.memo((props: IconshadowparallelmultipleProps) => {
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
        d="M20.5 7.5C21.0523 7.5 21.5 7.94772 21.5 8.5V18.5C21.5 19.0523 21.0523 19.5 20.5 19.5H6.5C5.94772 19.5 5.5 19.0523 5.5 18.5V16.5H17.5C18.0523 16.5 18.5 16.0523 18.5 15.5V7.5H20.5Z"
        fill="#B4B8BF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6V15H17V6H4ZM2.5 5.5C2.5 4.94772 2.94772 4.5 3.5 4.5H17.5C18.0523 4.5 18.5 4.94772 18.5 5.5V15.5C18.5 16.0523 18.0523 16.5 17.5 16.5H3.5C2.94772 16.5 2.5 16.0523 2.5 15.5V5.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconshadowparallelmultiple.displayName = 'Iconshadowparallelmultiple'

export default Iconshadowparallelmultiple
