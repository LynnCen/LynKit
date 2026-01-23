import React from 'react'

export interface IconnodesquareProps extends React.SVGProps<SVGSVGElement> {}

/**
 * node_square
 * @source figma
 */
export const Iconnodesquare = React.memo((props: IconnodesquareProps) => {
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
        d="M11.4697 3.46967C11.6103 3.32902 11.8011 3.25 12 3.25H20.75V4.75H12.3107L4.75 12.3107V20.75H3.25V12C3.25 11.8011 3.32902 11.6103 3.46967 11.4697L11.4697 3.46967Z"
        fill="#222529"
      />
      <path d="M14 10V11.25H20.75V12.75H14V14H12.75V20.75H11.25V14H10V10H14Z" fill="#222529" />
    </svg>
  )
})

Iconnodesquare.displayName = 'Iconnodesquare'

export default Iconnodesquare
