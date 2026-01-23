import React from 'react'

export interface IconpositionbottomProps extends React.SVGProps<SVGSVGElement> {}

/**
 * position_bottom
 * @source figma
 */
export const Iconpositionbottom = React.memo((props: IconpositionbottomProps) => {
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
        d="M20 21H4V19.5H20V21ZM12.75 15.1895L15.9697 11.9697L17.0303 13.0303L12 18.0605L6.96973 13.0303L8.03027 11.9697L11.25 15.1895V3H12.75V15.1895Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconpositionbottom.displayName = 'Iconpositionbottom'

export default Iconpositionbottom
