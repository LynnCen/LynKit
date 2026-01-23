import React from 'react'

export interface IconformatfullhightProps extends React.SVGProps<SVGSVGElement> {}

/**
 * format_full_hight
 * @source figma
 */
export const Iconformatfullhight = React.memo((props: IconformatfullhightProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M18 3L18 21L19.5 21L19.5 3L18 3Z" fill="#222529" />
      <path d="M13.5 3L13.5 21L15 21L15 3L13.5 3Z" fill="#222529" />
      <path d="M4.5 21L4.5 3L6 3L6 21L4.5 21Z" fill="#222529" />
      <path d="M9 3L9 21L10.5 21L10.5 3L9 3Z" fill="#222529" />
    </svg>
  )
})

Iconformatfullhight.displayName = 'Iconformatfullhight'

export default Iconformatfullhight
