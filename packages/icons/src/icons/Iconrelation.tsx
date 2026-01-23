import React from 'react'

export interface IconrelationProps extends React.SVGProps<SVGSVGElement> {}

/**
 * relation
 * @source figma
 */
export const Iconrelation = React.memo((props: IconrelationProps) => {
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
        d="M14.5644 5.5061L13.4356 6.49386L15.8472 9.24998H5V10.75H19.1528L14.5644 5.5061Z"
        fill="#222529"
      />
      <path
        d="M4.84717 13.25L9.43557 18.4939L10.5644 17.5061L8.15282 14.75H19V13.25H4.84717Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconrelation.displayName = 'Iconrelation'

export default Iconrelation
