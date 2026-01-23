import React from 'react'

export interface IconnoderoundProps extends React.SVGProps<SVGSVGElement> {}

/**
 * node_round
 * @source figma
 */
export const Iconnoderound = React.memo((props: IconnoderoundProps) => {
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
        d="M3.25 12C3.25 7.16752 7.16752 3.25 12 3.25H20.75V4.75H12C7.99595 4.75 4.75 7.99595 4.75 12V20.75H3.25V12Z"
        fill="#222529"
      />
      <path d="M14 10V11.25H20.75V12.75H14V14H12.75V20.75H11.25V14H10V10H14Z" fill="#222529" />
    </svg>
  )
})

Iconnoderound.displayName = 'Iconnoderound'

export default Iconnoderound
