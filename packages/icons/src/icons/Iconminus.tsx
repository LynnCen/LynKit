import React from 'react'

export interface IconminusProps extends React.SVGProps<SVGSVGElement> {}

/**
 * minus
 * @source figma
 */
export const Iconminus = React.memo((props: IconminusProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M12.75 12.75H21V11.25H12.75H11.25H3V12.75H11.25H12.75Z" fill="#222529" />
    </svg>
  )
})

Iconminus.displayName = 'Iconminus'

export default Iconminus
