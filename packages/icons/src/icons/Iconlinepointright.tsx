import React from 'react'

export interface IconlinepointrightProps extends React.SVGProps<SVGSVGElement> {}

/**
 * line_point_right
 * @source figma
 */
export const Iconlinepointright = React.memo((props: IconlinepointrightProps) => {
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
        d="M18 16C20.2091 16 22 14.2091 22 12C22 9.79086 20.2091 8 18 8C16.0472 8 14.4213 9.39935 14.0702 11.25H2.75C2.33579 11.25 2 11.5858 2 12C2 12.4142 2.33579 12.75 2.75 12.75H14.0702C14.4213 14.6006 16.0472 16 18 16Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconlinepointright.displayName = 'Iconlinepointright'

export default Iconlinepointright
