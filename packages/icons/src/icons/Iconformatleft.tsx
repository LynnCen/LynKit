import React from 'react'

export interface IconformatleftProps extends React.SVGProps<SVGSVGElement> {}

/**
 * format_left
 * @source figma
 */
export const Iconformatleft = React.memo((props: IconformatleftProps) => {
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
      <path d="M3 10.5H15V9H3V10.5Z" fill="#222529" />
      <path d="M15 19.5H3V18H15V19.5Z" fill="#222529" />
      <path d="M3 15H21V13.5H3V15Z" fill="#222529" />
    </svg>
  )
})

Iconformatleft.displayName = 'Iconformatleft'

export default Iconformatleft
