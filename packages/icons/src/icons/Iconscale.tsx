import React from 'react'

export interface IconscaleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * scale
 * @source figma
 */
export const Iconscale = React.memo((props: IconscaleProps) => {
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
        d="M6 3.25C4.48122 3.25 3.25 4.48122 3.25 6V18C3.25 19.5188 4.48122 20.75 6 20.75H18C19.5188 20.75 20.75 19.5188 20.75 18V6C20.75 5.26923 20.465 4.60504 20 4.11253V4H19.8875C19.395 3.53504 18.7308 3.25 18 3.25H6ZM12 4.75H6C5.30964 4.75 4.75 5.30964 4.75 6V18C4.75 18.6904 5.30964 19.25 6 19.25H18C18.6904 19.25 19.25 18.6904 19.25 18V12H14C12.8954 12 12 11.1046 12 10V4.75Z"
        fill="black"
      />
    </svg>
  )
})

Iconscale.displayName = 'Iconscale'

export default Iconscale
