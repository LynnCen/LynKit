import React from 'react'

export interface IconplaybeginfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * play_begin_fill
 * @source figma
 */
export const Iconplaybeginfill = React.memo((props: IconplaybeginfillProps) => {
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
        d="M19 18.0397C19 18.4442 18.5447 18.6813 18.2133 18.4493L9.58517 12.4096C9.30081 12.2106 9.30081 11.7894 9.58517 11.5904L18.2133 5.55073C18.5447 5.31875 19 5.55583 19 5.96034V18.0397Z"
        fill="#222529"
      />
      <path d="M7 6.00001H5V18H7V6.00001Z" fill="#222529" />
    </svg>
  )
})

Iconplaybeginfill.displayName = 'Iconplaybeginfill'

export default Iconplaybeginfill
