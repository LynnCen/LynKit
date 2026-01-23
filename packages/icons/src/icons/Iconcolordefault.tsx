import React from 'react'

export interface IconcolordefaultProps extends React.SVGProps<SVGSVGElement> {}

/**
 * color_default
 * @source figma
 */
export const Iconcolordefault = React.memo((props: IconcolordefaultProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <rect x="4" y="4" width="16" height="16" fill="#7F8792" />
    </svg>
  )
})

Iconcolordefault.displayName = 'Iconcolordefault'

export default Iconcolordefault
