import React from 'react'

export interface IconformatvercenterProps extends React.SVGProps<SVGSVGElement> {}

/**
 * format_ver_center
 * @source figma
 */
export const Iconformatvercenter = React.memo((props: IconformatvercenterProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M6 21L6 3L4.5 3L4.5 21L6 21Z" fill="#222529" />
      <path d="M10.5 17.9999L10.5 5.9999L9 5.9999L9 17.9999L10.5 17.9999Z" fill="#222529" />
      <path d="M19.5 5.9999L19.5 17.9999L18 17.9999L18 5.9999L19.5 5.9999Z" fill="#222529" />
      <path d="M15 21L15 3L13.5 3L13.5 21L15 21Z" fill="#222529" />
    </svg>
  )
})

Iconformatvercenter.displayName = 'Iconformatvercenter'

export default Iconformatvercenter
