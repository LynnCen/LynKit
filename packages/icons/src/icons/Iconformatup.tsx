import React from 'react'

export interface IconformatupProps extends React.SVGProps<SVGSVGElement> {}

/**
 * format_up
 * @source figma
 */
export const Iconformatup = React.memo((props: IconformatupProps) => {
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
      <path d="M10.5 15L10.5 3L9 3L9 15L10.5 15Z" fill="#222529" />
      <path d="M19.5 3L19.5 15L18 15L18 3L19.5 3Z" fill="#222529" />
      <path d="M15 21L15 3L13.5 3L13.5 21L15 21Z" fill="#222529" />
    </svg>
  )
})

Iconformatup.displayName = 'Iconformatup'

export default Iconformatup
