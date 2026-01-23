import React from 'react'

export interface IconarrowupProps extends React.SVGProps<SVGSVGElement> {}

/**
 * arrow_up
 * @source figma
 */
export const Iconarrowup = React.memo((props: IconarrowupProps) => {
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
        d="M11.9999 9.62127L18.4696 16.0909L19.5303 15.0303L11.9999 7.49995L4.46961 15.0303L5.53027 16.0909L11.9999 9.62127Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconarrowup.displayName = 'Iconarrowup'

export default Iconarrowup
