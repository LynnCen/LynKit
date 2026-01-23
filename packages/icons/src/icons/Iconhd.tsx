import React from 'react'

export interface IconhdProps extends React.SVGProps<SVGSVGElement> {}

/**
 * hd
 * @source figma
 */
export const Iconhd = React.memo((props: IconhdProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M4.5 4H3V20H4.5V12.5H9.5V20H11V4H9.5V11H4.5V4Z" fill="#222529" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 4V20H17C19.2091 20 21 18.0897 21 15.7333V8.26667C21 5.91025 19.2091 4 17 4H13ZM19.5 15.7333C19.5 17.354 18.291 18.5 17 18.5H14.5V5.5H17C18.291 5.5 19.5 6.64602 19.5 8.26667V15.7333Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconhd.displayName = 'Iconhd'

export default Iconhd
