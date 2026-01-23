import React from 'react'

export interface IconstopProps extends React.SVGProps<SVGSVGElement> {}

/**
 * stop
 * @source figma
 */
export const Iconstop = React.memo((props: IconstopProps) => {
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
        d="M19 7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V7Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconstop.displayName = 'Iconstop'

export default Iconstop
