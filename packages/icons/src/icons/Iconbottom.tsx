import React from 'react'

export interface IconbottomProps extends React.SVGProps<SVGSVGElement> {}

/**
 * bottom
 * @source figma
 */
export const Iconbottom = React.memo((props: IconbottomProps) => {
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
        d="M12.9697 16.2803L14.0303 15.2197L16.5 17.6893V4.5H18V17.6893L20.4697 15.2197L21.5303 16.2803L17.25 20.5607L12.9697 16.2803Z"
        fill="#222529"
      />
      <path d="M3 6.75H10.5V5.25H3V6.75Z" fill="#222529" />
      <path d="M10.5 18.75H3V17.25H10.5V18.75Z" fill="#222529" />
      <path d="M3 12.75H10.5V11.25H3V12.75Z" fill="#222529" />
    </svg>
  )
})

Iconbottom.displayName = 'Iconbottom'

export default Iconbottom
