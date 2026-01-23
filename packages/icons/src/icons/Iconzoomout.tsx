import React from 'react'

export interface IconzoomoutProps extends React.SVGProps<SVGSVGElement> {}

/**
 * zoom_out
 * @source figma
 */
export const Iconzoomout = React.memo((props: IconzoomoutProps) => {
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
        d="M7.5 12.75V11.25H16.5V12.75H7.5Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconzoomout.displayName = 'Iconzoomout'

export default Iconzoomout
