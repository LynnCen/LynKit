import React from 'react'

export interface IconwinfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * win_fill
 * @source figma
 */
export const Iconwinfill = React.memo((props: IconwinfillProps) => {
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
        d="M2 12H10.3333V3.61111L2 4.77778V12ZM2 19.2222L10.3333 20.3889V12.5556H2V19.2222ZM10.8889 20.4444L22 22V12.5556H10.8889V20.4444ZM10.8889 3.55556V12H22V2L10.8889 3.55556Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconwinfill.displayName = 'Iconwinfill'

export default Iconwinfill
