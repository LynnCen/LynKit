import React from 'react'

export interface IconpositiontopProps extends React.SVGProps<SVGSVGElement> {}

/**
 * position_top
 * @source figma
 */
export const Iconpositiontop = React.memo((props: IconpositiontopProps) => {
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
        d="M20 3H4V4.5H20V3ZM12.75 8.81055L15.9697 12.0303L17.0303 10.9697L12 5.93945L6.96973 10.9697L8.03027 12.0303L11.25 8.81055V21H12.75V8.81055Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconpositiontop.displayName = 'Iconpositiontop'

export default Iconpositiontop
