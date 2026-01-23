import React from 'react'

export interface IconvolumefillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * volume_fill
 * @source figma
 */
export const Iconvolumefill = React.memo((props: IconvolumefillProps) => {
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
        d="M3 8.5V15.5H7L12.6951 19.8809C13.024 20.1338 13.5 19.8994 13.5 19.4846V4.51543C13.5 4.10059 13.024 3.86619 12.6951 4.11912L7 8.5H3Z"
        fill="#222529"
      />
      <path
        d="M21 12C21 15.3137 18.3137 18 15 18V16.5C17.4853 16.5 19.5 14.4853 19.5 12C19.5 9.51472 17.4853 7.5 15 7.5V6C18.3137 6 21 8.68629 21 12Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconvolumefill.displayName = 'Iconvolumefill'

export default Iconvolumefill
