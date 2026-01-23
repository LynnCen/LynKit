import React from 'react'

export interface IconformatdownProps extends React.SVGProps<SVGSVGElement> {}

/**
 * format_down
 * @source figma
 */
export const Iconformatdown = React.memo((props: IconformatdownProps) => {
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
      <path d="M10.5 21L10.5 9L9 9L9 21L10.5 21Z" fill="#222529" />
      <path d="M19.5 9L19.5 21L18 21L18 9L19.5 9Z" fill="#222529" />
      <path d="M15 21L15 3L13.5 3L13.5 21L15 21Z" fill="#222529" />
    </svg>
  )
})

Iconformatdown.displayName = 'Iconformatdown'

export default Iconformatdown
