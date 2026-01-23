import React from 'react'

export interface IconbillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * bill
 * @source figma
 */
export const Iconbill = React.memo((props: IconbillProps) => {
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
        d="M6.5 17C7.32843 17 8 16.3284 8 15.5C8 14.6716 7.32843 14 6.5 14C5.67157 14 5 14.6716 5 15.5C5 16.3284 5.67157 17 6.5 17Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM20 5.5H4C3.72386 5.5 3.5 5.72386 3.5 6V9.25H20.5V6C20.5 5.72386 20.2761 5.5 20 5.5ZM3.5 18V10.75H20.5V18C20.5 18.2761 20.2761 18.5 20 18.5H4C3.72386 18.5 3.5 18.2761 3.5 18Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconbill.displayName = 'Iconbill'

export default Iconbill
