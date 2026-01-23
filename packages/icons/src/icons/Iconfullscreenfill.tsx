import React from 'react'

export interface IconfullscreenfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * full_screen_fill
 * @source figma
 */
export const Iconfullscreenfill = React.memo((props: IconfullscreenfillProps) => {
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
        d="M21 19C21 20.0357 20.2128 20.887 19.2041 20.9893L19 21H14V19H19V14H21V19Z"
        fill="black"
      />
      <path d="M10 3V5H5V10H3V5C3 3.89543 3.89543 3 5 3H10Z" fill="black" />
    </svg>
  )
})

Iconfullscreenfill.displayName = 'Iconfullscreenfill'

export default Iconfullscreenfill
