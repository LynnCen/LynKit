import React from 'react'

export interface IconstartProps extends React.SVGProps<SVGSVGElement> {}

/**
 * start
 * @source figma
 */
export const Iconstart = React.memo((props: IconstartProps) => {
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
        d="M7.5 18.3507V5.64929L18.0845 12L7.5 18.3507ZM7.5145 3.9087C6.84797 3.50879 6 3.9889 6 4.76619V19.2338C6 20.0111 6.84797 20.4912 7.5145 20.0913L19.5708 12.8575C20.2182 12.4691 20.2182 11.5309 19.5708 11.1425L7.5145 3.9087Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconstart.displayName = 'Iconstart'

export default Iconstart
