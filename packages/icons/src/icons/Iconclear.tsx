import React from 'react'

export interface IconclearProps extends React.SVGProps<SVGSVGElement> {}

/**
 * clear
 * @source figma
 */
export const Iconclear = React.memo((props: IconclearProps) => {
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
        d="M14.4697 15.5303L12 13.0607L9.53033 15.5303L8.46967 14.4697L10.9393 12L8.46967 9.53033L9.53033 8.46967L12 10.9393L14.4697 8.46967L15.5303 9.53033L13.0607 12L15.5303 14.4697L14.4697 15.5303Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconclear.displayName = 'Iconclear'

export default Iconclear
