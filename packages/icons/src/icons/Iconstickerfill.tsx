import React from 'react'

export interface IconstickerfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * sticker_fill
 * @source figma
 */
export const Iconstickerfill = React.memo((props: IconstickerfillProps) => {
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
        d="M13.2704 2.84487C13.8904 2.18351 14.9999 2.62227 14.9999 3.52881V15C14.9999 15.5523 14.5522 16 13.9999 16H3.30813C2.4327 16 1.97985 14.9548 2.5786 14.3161L13.2704 2.84487ZM4.46225 14.5L13.4999 4.7932V14.5H4.46225Z"
        fill="#222529"
      />
      <path
        d="M15.5001 22.0001C12.0785 22.0001 9.27434 19.3563 9.01904 16H10.5248C10.7756 18.5267 12.9074 20.5001 15.5001 20.5001C18.2615 20.5001 20.5001 18.2615 20.5001 15.5001C20.5001 12.7386 18.2615 10.5001 15.5001 10.5001C15.3313 10.5001 15.1644 10.5084 14.9999 10.5248V9.01902C15.165 9.00646 15.3318 9.00006 15.5001 9.00006C19.09 9.00006 22.0001 11.9102 22.0001 15.5001C22.0001 19.0899 19.09 22.0001 15.5001 22.0001Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconstickerfill.displayName = 'Iconstickerfill'

export default Iconstickerfill
