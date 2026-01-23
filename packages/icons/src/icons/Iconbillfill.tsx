import React from 'react'

export interface IconbillfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * bill_fill
 * @source figma
 */
export const Iconbillfill = React.memo((props: IconbillfillProps) => {
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
        d="M4 4C2.89543 4 2 4.89543 2 6V9.25H22V6C22 4.89543 21.1046 4 20 4H4Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 10.75H2V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V10.75ZM8 15.5C8 16.3284 7.32843 17 6.5 17C5.67157 17 5 16.3284 5 15.5C5 14.6716 5.67157 14 6.5 14C7.32843 14 8 14.6716 8 15.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconbillfill.displayName = 'Iconbillfill'

export default Iconbillfill
