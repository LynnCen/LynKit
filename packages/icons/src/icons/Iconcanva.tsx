import React from 'react'

export interface IconcanvaProps extends React.SVGProps<SVGSVGElement> {}

/**
 * canva
 * @source figma
 */
export const Iconcanva = React.memo((props: IconcanvaProps) => {
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
        d="M7.0498 3H5.5498V5.5H3.0498V7H5.5498V17H3.0498V18.5H5.5498V21H7.0498V18.5L17.0498 18.5V21H18.5498V18.5H21.0498V17H18.5498V7H21.0498V5.5H18.5498V3H17.0498V5.5L7.0498 5.5V3ZM7.0498 7V17L17.0498 17V7L7.0498 7Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconcanva.displayName = 'Iconcanva'

export default Iconcanva
