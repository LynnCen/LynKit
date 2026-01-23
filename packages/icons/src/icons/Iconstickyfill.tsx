import React from 'react'

export interface IconstickyfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * sticky_fill
 * @source figma
 */
export const Iconstickyfill = React.memo((props: IconstickyfillProps) => {
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
        d="M13.293 2.70706L14.492 3.90606L7.08296 9.66863L5.20718 7.79285L3.79297 9.20706L6.29297 11.7071L8.58586 14L1.79297 20.7928L3.20718 22.2071L10.0001 15.4142L12.293 17.7071L14.793 20.2071L16.2072 18.7928L14.3314 16.9171L20.094 9.50806L21.293 10.7071L22.7072 9.29285L20.7072 7.29285L16.7072 3.29285L14.7072 1.29285L13.293 2.70706Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconstickyfill.displayName = 'Iconstickyfill'

export default Iconstickyfill
