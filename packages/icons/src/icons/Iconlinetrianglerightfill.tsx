import React from 'react'

export interface IconlinetrianglerightfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * line_triangle_right_fill
 * @source figma
 */
export const Iconlinetrianglerightfill = React.memo((props: IconlinetrianglerightfillProps) => {
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
        d="M22 15.9325C22 16.3564 21.5056 16.588 21.1799 16.3166L16.9 12.75H2.75C2.33579 12.75 2 12.4142 2 12C2 11.5858 2.33579 11.25 2.75 11.25H16.9L21.1799 7.6834C21.5056 7.41202 22 7.6436 22 8.06751V15.9325Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconlinetrianglerightfill.displayName = 'Iconlinetrianglerightfill'

export default Iconlinetrianglerightfill
