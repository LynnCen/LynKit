import React from 'react'

export interface IconstrikethroughProps extends React.SVGProps<SVGSVGElement> {}

/**
 * strikethrough
 * @source figma
 */
export const Iconstrikethrough = React.memo((props: IconstrikethroughProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M5 4.5H11.25V10.5H3V12H21V10.5H12.75V4.5H19V3H5V4.5Z" fill="#222529" />
      <path d="M11.25 13.5V21H12.75V13.5H11.25Z" fill="#222529" />
    </svg>
  )
})

Iconstrikethrough.displayName = 'Iconstrikethrough'

export default Iconstrikethrough
