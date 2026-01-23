import React from 'react'

export interface IconformatrightProps extends React.SVGProps<SVGSVGElement> {}

/**
 * format_right
 * @source figma
 */
export const Iconformatright = React.memo((props: IconformatrightProps) => {
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
      <path d="M9 10.5H21V9H9V10.5Z" fill="#222529" />
      <path d="M21 19.5H9V18H21V19.5Z" fill="#222529" />
      <path d="M3 15H21V13.5H3V15Z" fill="#222529" />
    </svg>
  )
})

Iconformatright.displayName = 'Iconformatright'

export default Iconformatright
