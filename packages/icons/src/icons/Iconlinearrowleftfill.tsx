import React from 'react'

export interface IconlinearrowleftfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * line_arrow_left_fill
 * @source figma
 */
export const Iconlinearrowleftfill = React.memo((props: IconlinearrowleftfillProps) => {
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
        d="M2.67836 11.576L8.70248 7.81092C9.11249 7.55466 9.61128 7.97169 9.43171 8.42061L8.29996 11.25H21.25C21.6642 11.25 22 11.5858 22 12C22 12.4142 21.6642 12.75 21.25 12.75H8.29996L9.43171 15.5794C9.61128 16.0283 9.11248 16.4453 8.70247 16.1891L2.67836 12.424C2.36503 12.2282 2.36503 11.7718 2.67836 11.576Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconlinearrowleftfill.displayName = 'Iconlinearrowleftfill'

export default Iconlinearrowleftfill
