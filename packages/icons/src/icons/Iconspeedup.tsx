import React from 'react'

export interface IconspeedupProps extends React.SVGProps<SVGSVGElement> {}

/**
 * speedup
 * @source figma
 */
export const Iconspeedup = React.memo((props: IconspeedupProps) => {
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
        d="M14.1678 9L16.8691 2.69696C17.0105 2.36703 16.7685 2 16.4095 2H8.50908C8.30325 2 8.11846 2.12613 8.04346 2.3178L3.93476 12.8178C3.80644 13.1457 4.04825 13.5 4.40038 13.5H9.66781L7.25953 21.5276C7.10891 22.0297 7.73406 22.3957 8.09814 22.0186L19.8497 9.8473C20.1562 9.52987 19.9313 9 19.49 9H14.1678Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconspeedup.displayName = 'Iconspeedup'

export default Iconspeedup
