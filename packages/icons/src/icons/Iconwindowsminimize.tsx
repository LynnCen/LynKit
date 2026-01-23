import React from 'react'

export interface IconwindowsminimizeProps extends React.SVGProps<SVGSVGElement> {}

/**
 * windows_minimize
 * @source figma
 */
export const Iconwindowsminimize = React.memo((props: IconwindowsminimizeProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <rect x="2.5" y="7.5" width="11" height="1" rx="0.5" fill="#222529" />
    </svg>
  )
})

Iconwindowsminimize.displayName = 'Iconwindowsminimize'

export default Iconwindowsminimize
