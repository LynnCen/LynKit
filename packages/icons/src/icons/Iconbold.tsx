import React from 'react'

export interface IconboldProps extends React.SVGProps<SVGSVGElement> {}

/**
 * bold
 * @source figma
 */
export const Iconbold = React.memo((props: IconboldProps) => {
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
        d="M5 3H13.3726C15.9573 3 18.0526 5.09531 18.0526 7.68C18.0526 9.06452 17.4514 10.3086 16.4958 11.1655C17.9997 12.1054 19 13.7759 19 15.68C19 18.6182 16.6182 21 13.68 21H5V3ZM13.3726 10.36C14.8528 10.36 16.0526 9.16012 16.0526 7.68C16.0526 6.19988 14.8528 5 13.3726 5H7V10.36H13.3726ZM7 12.36V19H13.68C15.5136 19 17 17.5136 17 15.68C17 13.8464 15.5136 12.36 13.68 12.36H7Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconbold.displayName = 'Iconbold'

export default Iconbold
