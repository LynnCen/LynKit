import React from 'react'

export interface IconitalyProps extends React.SVGProps<SVGSVGElement> {}

/**
 * italy
 * @source figma
 */
export const Iconitaly = React.memo((props: IconitalyProps) => {
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
        d="M9.5 3H18.5V4.5H14.6481L10.8981 19.5H14.5V21H5.5V19.5H9.35192L13.1019 4.5H9.5V3Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconitaly.displayName = 'Iconitaly'

export default Iconitaly
