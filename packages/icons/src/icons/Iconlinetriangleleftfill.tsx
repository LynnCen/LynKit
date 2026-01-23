import React from 'react'

export interface IconlinetriangleleftfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * line_triangle_left_fill
 * @source figma
 */
export const Iconlinetriangleleftfill = React.memo((props: IconlinetriangleleftfillProps) => {
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
        d="M2 15.9325C2 16.3564 2.49443 16.588 2.82009 16.3166L7.1 12.75H21.25C21.6642 12.75 22 12.4142 22 12C22 11.5858 21.6642 11.25 21.25 11.25H7.1L2.82009 7.6834C2.49443 7.41202 2 7.6436 2 8.06751V15.9325Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconlinetriangleleftfill.displayName = 'Iconlinetriangleleftfill'

export default Iconlinetriangleleftfill
