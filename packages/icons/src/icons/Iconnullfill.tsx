import React from 'react'

export interface IconnullfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * null_fill
 * @source figma
 */
export const Iconnullfill = React.memo((props: IconnullfillProps) => {
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
        d="M19.0711 19.0711C15.1658 22.9763 8.83418 22.9763 4.92893 19.0711C1.02369 15.1658 1.02369 8.83418 4.92893 4.92893C8.83418 1.02369 15.1658 1.02369 19.0711 4.92893C22.9763 8.83418 22.9763 15.1658 19.0711 19.0711ZM14.4741 16L8 9.52596L9.52595 8.00001L16 14.4741L14.4741 16Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconnullfill.displayName = 'Iconnullfill'

export default Iconnullfill
