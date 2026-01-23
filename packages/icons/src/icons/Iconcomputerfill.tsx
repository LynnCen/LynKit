import React from 'react'

export interface IconcomputerfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * computer_fill
 * @source figma
 */
export const Iconcomputerfill = React.memo((props: IconcomputerfillProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 17V6H19V17H5ZM3 5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5V18C21 18.5523 20.5523 19 20 19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20C1 19.4477 1.44772 19 2 19H4C3.44772 19 3 18.5523 3 18V5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconcomputerfill.displayName = 'Iconcomputerfill'

export default Iconcomputerfill
