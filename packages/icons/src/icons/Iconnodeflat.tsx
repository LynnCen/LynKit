import React from 'react'

export interface IconnodeflatProps extends React.SVGProps<SVGSVGElement> {}

/**
 * node_flat
 * @source figma
 */
export const Iconnodeflat = React.memo((props: IconnodeflatProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M3.25 20.75V3.25H20.75V4.75H4.75V20.75H3.25Z" fill="#222529" />
      <path d="M14 10V11.25H20.75V12.75H14V14H12.75V20.75H11.25V14H10V10H14Z" fill="#222529" />
    </svg>
  )
})

Iconnodeflat.displayName = 'Iconnodeflat'

export default Iconnodeflat
