import React from 'react'

export interface IconformatcenterProps extends React.SVGProps<SVGSVGElement> {}

/**
 * format_center
 * @source figma
 */
export const Iconformatcenter = React.memo((props: IconformatcenterProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M3 6H21V4.5H3V6Z" fill="#222529" />
      <path d="M6.0001 10.5H18.0001V9H6.0001V10.5Z" fill="#222529" />
      <path d="M18.0001 19.5H6.0001V18H18.0001V19.5Z" fill="#222529" />
      <path d="M3 15H21V13.5H3V15Z" fill="#222529" />
    </svg>
  )
})

Iconformatcenter.displayName = 'Iconformatcenter'

export default Iconformatcenter
